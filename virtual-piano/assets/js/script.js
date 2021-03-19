const pianoKey = document.querySelectorAll('.piano')
const pianoKeySharp = document.querySelectorAll('.keys-sharp')
const fullScr = document.querySelector('.fullscreen')
const html = document.documentElement;

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

pianoKey.forEach(elem => {
   elem.addEventListener('click', event =>{
      event.target.classList.add('active')
   })
})

pianoKeySharp.forEach(elem => {
   elem.addEventListener('click', event => {
      event.target.classList.add('active')
   })
})
fullScr.addEventListener('click', () =>{
   (!document.fullscreen) ? activateFullscreen() : deactivateFullscreen();})