console.log("page loaded...");

const video = document.getElementById('vid');

video.addEventListener('mouseover', ()=>{
    video.muted = true;
    video.play()
});

video.addEventListener('mouseout', ()=>{
    video.muted = false;
    video.pause()
});