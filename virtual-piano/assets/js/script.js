const piano = document.querySelector('.piano')
const pianoKeys = document.querySelectorAll('.piano-key')
const fullScr = document.querySelector('.fullscreen')
const html = document.documentElement;
const btn = document.querySelector('.btn-container')


function activateFullscreen() {
   if (html.requestFullscreen) {
      html.requestFullscreen();
   } else if (html.mozRequestFullScreen) {
      html.mozRequestFullScreen();
   } else if (html.webkitRequestFullscreen) {
      html.webkitRequestFullscreen();
   } else if (html.msRequestFullscreen) {
      html.msRequestFullscreen();
   }
}
function deactivateFullscreen() {
   if (document.exitFullscreen) {
      document.exitFullscreen();
   } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
   } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
   }
};
const pressKey = (event) =>{
   let key = event.key.toUpperCase();
   const keyNode = document.querySelector(`.piano-key[data-letter="${key}"]`)
   if (keyNode){
      const note = keyNode.dataset.note;
      const audio = new Audio();
      const src = `assets/audio/${note}.mp3`;
      audio.src = src;
      if (!audio) return;
      audio.currentTime = 0;
      keyNode.classList.add('piano-key-active', 'piano-key-active-pseudo')
      audio.play();
}
}
const dropKey = (event) => {
   let key = event.key.toUpperCase();
   const keyNode = document.querySelector(`.piano-key[data-letter="${key}"]`)
   if (keyNode) {
      keyNode.classList.remove('piano-key-active', 'piano-key-active-pseudo')
   }
}
const startSound = (event) => {
   const audio = new Audio();
   const note = event.target.dataset.note;
   const src = `assets/audio/${note}.mp3`;
   audio.src = src;
   if (!audio) return;
   audio.currentTime = 0;
   event.target.classList.add('piano-key-active', 'piano-key-active-pseudo')
   audio.play();
}


const stopSound = (event) => {
   event.target.classList.remove('piano-key-active')
}

const startMouseHandler = (event) =>{
   event.target.classList.add('piano-key-active')
   startSound(event)
   pianoKeys.forEach(elem =>{
      elem.addEventListener('mouseover', startSound)
      elem.addEventListener('mouseout', stopSound)
   })
 
}
const stopMouseHandler = () => {
   pianoKeys.forEach(elem => {
      elem.classList.remove('piano-key-active')
      elem.removeEventListener('mouseover', startSound)
      elem.removeEventListener('mouseout', stopSound)
      })
}

document.addEventListener('keydown', pressKey)
document.addEventListener('keyup', dropKey)
piano.addEventListener('mousedown', startMouseHandler, false)
piano.addEventListener('mouseup', stopMouseHandler, false)

fullScr.addEventListener('click', () =>{
   (!document.fullscreen) ? activateFullscreen() : deactivateFullscreen();})
   
   btn.addEventListener('click', elem => {
      let btnA = 'btn-active'
      let btnNotes = 'btn-notes'
      let btnLetters = 'btn-letters'

      if (!elem.target.classList.contains(btnA) && !elem.target.classList.contains(btnNotes)) {
         elem.target.classList.add(btnA)
         let btnNotes = btn.querySelector('.btn-notes')
         btnNotes.classList.remove(btnA)
         pianoKeys.forEach(el => { el.classList.add('piano-key-letter') })
      } else if (!elem.target.classList.contains(btnA) && !elem.target.classList.contains(btnLetters)) {
         elem.target.classList.add(btnA)
         let btnLetters = btn.querySelector('.btn-letters')
         btnLetters.classList.remove(btnA)
         pianoKeys.forEach(el => { el.classList.remove('piano-key-letter') })
      }
      
         
   
})