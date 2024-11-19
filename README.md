# simple-chat-app

Example app written for article purpose:
[How to write video chat app using webrtc and nodejs](https://tsh.io/blog/how-to-write-video-chat-app-using-webrtc-and-nodejs/)

This is updated version with changes to allow run and test inside local network.

# Install modules
```shell
npm i
```

# Start application
To start application run
```shell
WEB_HOST={IP} npm start
```
instead of {IP} put address of your network interface to bind, for example:
```shell
WEB_HOST=192.168.1.140 npm start
```
Open browser with URL https://{IP}:5000 to test it, accept self-signed certificate and have a fun :)
