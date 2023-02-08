const holes = document.querySelectorAll ('.hole')
const mole = document.querySelector ('.mole')
const timeleft = document.querySelector('#time-left')
const score = document.querySelector('#points')
const cursor = document.querySelector('.cursor')

let randomHole = holes

window.addEventListener('mousemove' , e =>{
    cursor.style.top = e.pageY +'px'
    cursor.style.left = e.pageX +'px'
})
window.addEventListener('mousedown', () =>{
    cursor.classList.add('active')
})

    function ran(){
     const i = [Math.floor(Math.random () * 9)]
     const hole = holes[i]


     
    
     }