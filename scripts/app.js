function init() {

//Element

const allClassesAudio = document.querySelectorAll(".individual-play-item")
const audio = document.querySelector("audio")

//Execution

function playSound(event) {
    audio.src = `sounds2/${event.target.id}.mp3`
    audio.play()
}

//Event 

allClassesAudio.forEach(item => item.addEventListener("mouseenter", playSound))

}

window.addEventListener("DOMContentLoaded", init)