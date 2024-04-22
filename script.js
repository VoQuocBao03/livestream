const startButton = document.getElementById('startButton');
const localVideo = document.getElementById('localVideo');

startButton.addEventListener('click', () => {
    // Replace the placeholder video with the actual livestream
    localVideo.src = "your_stream_url_here";
    localVideo.play();
});
