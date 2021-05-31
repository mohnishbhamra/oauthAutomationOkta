This project helps you to perform actual UI based login in browser.
modify constants in index.js as follows:
OKTA_LOGIN_HOME_URL - This is your okta home url which prompts user to enter credentials.
USER_ID - This is email id of account
PASSWORD - This should be password the account

The dependency of project is that this project was made in windows computer.
I have added a local chromedriver.exe but you can replace this file with your supported platform.
For mac,linux replace chromedriver.exe with desired version from http://chromedriver.storage.googleapis.com/index.html

To run project perform following commands:
#one time command to init project
npm install 
#to start project
npm start