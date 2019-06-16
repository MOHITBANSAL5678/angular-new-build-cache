
# CHANGE  public isNewVersionAvailable: Boolean = FALSE;  FOR WORKNIG SOLUTION 

## Reload applciation on new version  avalible solution 

# Problem :  ‘How can we be sure the users use the latest version of the site?”
So what are going to do about?:    
1.	We’ll hash our file names each build so we know when they have changed
2.	We’ll create version.json in our dist folder which holds the current build hash and also enter the current build hash into the code itself.
3.	We’ll make frontend poll the version.json every X minutes to check if the hash has changed compared to it’s “inner” hash.
4.	If it has, we’ll reload the client either forcefully or gracefully by giving a pop-up / other kind of notification about the new version.

Need to import Reload module and configuration in app.component.html and all Done 😊
 
# Step to Solve :
1. Create Angular 4 project with angular-cli .
2. with ng build --prod and you’ll get bunch of files in your /dist/ folder, one of them being /dist/main.somehash.bundle.js 

3. Next, I’ve created a /build/post-build.js file. post-build is just a script in our package.json:"post-build": "node ./build/post-build.js" 
 
4. After running this script, you should have version.json in the /dist/folder with something like:
 

## That’s it. Now, whenever you do a deploy, the hash will change in the version.json and users will be notified after they have polled the version file. 
 
