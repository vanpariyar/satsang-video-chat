# satsang-video-chat
Learning to make a video call client from web Dev simplified. Go chek it out https://youtu.be/DvlyzDZDEq4

### See Demo Hosted oN Glitch.

https://satsang-video-chat.glitch.me
##### Note: 
- As you know i am running on glitch so it provides only one port to run your appication, 
- In My case express is using only port which is port`3000`.
- In video we have two server runnig on.
- for the peer js server i have used, Peer.js own server to connections. https://peerjs.com/peerserver.html

IN Video
```
var myPeer = new Peer(undefined, {
    host:'/',
    port: '3001'
}); 
```
On my Glitch Project

```
var myPeer = new Peer(); 
```
- if you have hosting i recommand to use your own server.


### How to use that ? Steps are here:
1. click on link.
2. after Open and you can see your face.
3. Then copy URL link from the browser.
4. share it with your friends.

### Support

- A huge support from [Web Dev Simplified](https://github.com/WebDevSimplified/Zoom-Clone-With-WebRTC)
- Peer Connection Server and Library https://peerjs.com/

