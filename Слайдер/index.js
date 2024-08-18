let point = document.querySelectorAll('.point')
let imageSlider = document.querySelectorAll('.imageSlider')
let about__list = document.querySelectorAll('.about__list')
leftBtn = document.getElementById('leftBtn')
rightBtn = document.getElementById('rightBtn')


point[0].classList.add('activeImage')
imageSlider[0].classList.add('activeImage')
about__list[0].classList.add('active')

let counter = 0;

function paintActiveElement(){
    document.querySelector('.point.activeImage').classList.remove('activeImage')
    document.querySelector('.imageSlider.activeImage').classList.remove('activeImage')
    document.querySelector('.about__list.active').classList.remove('active')

    imageSlider[counter].classList.add('activeImage')
    point[counter].classList.add('activeImage')
    about__list[counter].classList.add('active')
}

 for(let i=0; i<point.length; i++){
   point[i].addEventListener('click',()=>{
        counter = i;
        paintActiveElement()
    })   
 }

 for(let i=0; i<about__list.length; i++){
    about__list[i].addEventListener('click',()=>{
         counter = i;
         paintActiveElement()
     })
    } 

 
 leftBtn.addEventListener('click',()=>{
    counter--
    if (counter <0 ){
        counter = imageSlider.length-1
    }
    paintActiveElement()
 })

 rightBtn.addEventListener('click',()=>{
    counter++
    if (counter >= imageSlider.length ){
        counter = 0
    }
    paintActiveElement()
})


