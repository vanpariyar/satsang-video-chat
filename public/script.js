
const socket = io('/');
var videoGrid = document.getElementById('video-grid');

var myPeer = new Peer(undefined, {
    host:'/',
    port: '3001'
}); 
const myVideo = document.createElement('video');
myVideo.muted = true;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
}).then( stream => {
    addVideoStream(myVideo, stream);
})

myPeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id);
})



socket.on('user-connected', userId =>{
    console.log('User Connected: '+ userId)
})

function addVideoStream( video , stream ){
    video.srcObject = stream;
    video.addEventListner('loadedmetadata', () => {
        video.play();
    });
    videoGrid.append(video);
}