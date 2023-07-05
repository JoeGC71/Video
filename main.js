// DOM Elementos
const video = document.querySelector(".video"),
playButton = document.querySelector(".play"),
icon = document.getElementById("icon"),
reinicio=document.getElementById("reinicio"),
progress = document.querySelector(".progress"),
min= document.querySelector(".currentTime"),
duracion = document.querySelector(".duration")

// Listen for events
video.addEventListener("click",()=>{playPauseVideo();iconToggle()})
progress.addEventListener("change",setVideoProgress)
video.addEventListener("timeupdate",updateVideoProgress)
playButton.addEventListener("click",()=>{playPauseVideo();iconToggle()})
reinicio.addEventListener("click",stopVideo)
// Functions
function playPauseVideo(){
    video[video.paused ? "play":"pause"]();
}

function iconToggle(){
    if(video.paused){
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play")
    }else{
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause")
    }
}

function stopVideo(){
    video.pause();
    video.currentTime=0;
    iconToggle();
}

function setVideoProgress(){
    video.currentTime= (progress.value * video.duration) /100
}
function updateVideoProgress(){
    progress.value=Number((video.currentTime/video.duration)*100);
    let minutes = Math.floor(video.currentTime/60);
    let seconds = Math.floor(video.currentTime % 60);
    if(seconds < 10){
        seconds="0"+seconds
    }
    min.innerHTML = minutes +":"+seconds;
    

    let dur = Math.floor(video.duration / 60)
    let second = Math.floor(video.duration % 60);
    duracion.innerHTML="/"+ dur +":"+second
}

