import { AppReloadService } from './app-reload.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-app-reload',
  templateUrl: './app-reload.component.html',
  styleUrls: ['./app-reload.component.css']
})
export class AppReloadComponent implements OnInit {

  @Input() interval;
  constructor(private appReloadService: AppReloadService) { }

  ngOnInit() {
    this.appReloadService.getCurrentHashCode('./version.json', this.interval);
  }

  reload() {
    location.reload(true);
  }

}
