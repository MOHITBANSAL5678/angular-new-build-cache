
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';

@Injectable()
export class AppReloadService {
  private interval: number;
  private currentHash: String;
  public isNewVersionAvailable: Boolean = true;
  public isAlert: Boolean = false;
  constructor(private http: HttpClient) { }

  public getCurrentHashCode(url, interval): void {
    this.interval = 1000 * interval;
    // timestamp these requests to invalidate caches
    this.http.get(url)
      .subscribe(
        (response: any) => {
          const currentHashCode = response.json().hash;
          this.currentHash = currentHashCode;
          console.log("old" + currentHashCode);
          this.checkNewVersion(url);
        },
        (err) => {
          this.checkNewVersion(url); 
          console.error(err, 'Could not get version');
        }
      );
  }

  public checkNewVersion(url): void {

    interval(this.interval).subscribe(x => // do something)
    {
      this.http.get(url + '?t=' + new Date().getTime())
        .subscribe(
          (response: any) => {
            const newHash = response.json().hash;
            console.log("new" + newHash);
            const hashChanged = this.hasHashChanged(this.currentHash, newHash);
          },
          (err) => {
            console.error(err, 'Could not get version');
          }
        )
    });

  }

  /**
   * Checks if hash has changed.
   * This file has the JS hash, if it is a different one than in the version.json
   * we are dealing with version change
   */

  private hasHashChanged(currentHash, newHash) {
    if (currentHash === newHash) {
      return false;
    }
    this.isNewVersionAvailable = true;
    this.isAlert = true;
    setTimeout(() => {
      this.isAlert = false;
    }, 500);
    return true;
  }


}
