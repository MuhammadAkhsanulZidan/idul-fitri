var style=document.createElement('style');
var position='right';
style.innerHTML=`
@keyframes myanimation{
    0%{${position}: -${document.querySelector('.takbir .text').offsetWidth +10}px;}
    100%{${position}:100%;}
}`;

document.head.append(style);


const boxes = document.querySelectorAll('.headLine .text');
const boxes2 = document.querySelectorAll('.sunnah .box');

window.addEventListener('scroll', checkBoxes);
window.addEventListener('scroll', checkBoxes2);

checkBoxes();
checkBoxes2();

function checkBoxes(){
    const triggerBottom = window.innerHeight /5 * 4;

    boxes.forEach(box =>{
        const boxTop=box.getBoundingClientRect().top;
        if(boxTop<triggerBottom){
            box.classList.add('animate');
        }
        else{
            box.classList.remove('animate')
        }
    })
}


function checkBoxes2(){
    const triggerBottom = window.innerHeight /5 * 4;

    boxes2.forEach(box2 =>{
        const boxTop=box2.getBoundingClientRect().top;
        if(boxTop<triggerBottom){
            box2.classList.add('animate');
        }
        else{
            box2.classList.remove('animate')
        }
    })
}

function scrolll(){
    var left = document.querySelector(".scroll-images");
    left.scrollBy(-350,0)
}

function scrollr(){
    var right = document.querySelector(".scroll-images");
    right.scrollBy(350,0)
}