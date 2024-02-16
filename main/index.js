const elImgs = document.getElementById("imgs");
const elLeftBtn = document.getElementById("left");
const elRightBtn = document.getElementById("right");

const elImg = document.querySelectorAll("#imgs img");

elRightBtn.addEventListener('click', changeImgs);

function changeImgs (){
    imgs.style.transform = `translateX(-500px)`;
}