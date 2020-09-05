# satsang-video-chat
Learning to make a video call client from web Dev simplified. Go chek it out https://youtu.be/DvlyzDZDEq4

This is an exact copy of the tutorial I am thinking about adding a new feature, 

**feel free to suggest new feature,** 


### See Demo Hosted oN Glitch.

https://satsang-video-chat.glitch.me

### How to use that ? Steps are here:
1. click on link.
2. after Open and you can see your face.
3. Then copy URL link from the browser.
4. share it with your friends.

### Who can contribute.
Any one can contribute. just see our goal mention below. start contributing.

### Our Goal
Our Goal is very simple we are making the simple web client for the self hosted web video calling for the satsang as of now.

We can grow this more if more contributors are supports.

### Note: 
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


### Support

- A huge support from [Web Dev Simplified](https://github.com/WebDevSimplified/Zoom-Clone-With-WebRTC)
- Peer Connection Server and Library https://peerjs.com/

