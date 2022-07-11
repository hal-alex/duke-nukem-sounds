function init() {

//Element

const allClassesAudio = document.querySelectorAll(".individual-play-item")

//Execution

function playSound(event) {
    let eventTarget = event.target
    let audioFile = new Audio(`./sounds2/${event.target.id}.mp3`)
    audioFile.play()
    eventTarget.onmouseleave.audioFile.pause()
}

//Event 

allClassesAudio.forEach(item => item.addEventListener("mouseenter", playSound))

//Element 

//Execution 
// function stopSound(event) {
//     let audioFile = new Audio(`./sounds2/${event.target.id}.mp3`)
//     audioFile.pause()
// }
// //Event
// allClassesAudio.forEach(item => item.addEventListener("mouseleave", stopSound))

}

window.addEventListener("DOMContentLoaded", init)