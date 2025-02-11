const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const brushWidth = document.getElementById('brush_width');
const brushColor = document.querySelector('#color-picker');
const brush = document.querySelector('.brush');
const eraser = document.querySelector('.eraser');
const cleraBtn = document.querySelector('.clear');
const saveBtn = document.querySelector('.save');


let isDrowing = false
let currenWidth = 5
let currenColor =''
window.addEventListener('load' , ()=>{
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;  
ctx.fillStyle = 'white';
ctx.fillRect(0,0,canvas.width, canvas.height)  
})

function startdraw(){
    isDrowing = true;
    ctx.beginPath()
    ctx.lineWidth = currenWidth;
}

function drawing(e){
    if(!isDrowing) return
    ctx.lineTo(e.offsetX , e.offsetY);
    ctx.strokeStyle = `${currenColor}`
    ctx.stroke()
}

function endDraw(){
    isDrowing = false;
}

canvas.addEventListener('mousemove' , drawing);
canvas.addEventListener('mousedown' , startdraw);
canvas.addEventListener('mouseup' , endDraw);




brushWidth.addEventListener('change' , ()=>{
     currenWidth = brushWidth.value
})


brushColor.addEventListener('change' , ()=>{
    currenColor = brushColor.value
})

eraser.addEventListener('click' , ()=>{
    eraser.classList.add('active')
    brush.classList.remove('active')
    currenColor = "white"
})



brush.addEventListener('click' , ()=>{
    brush.classList.add('active');
    eraser.classList.remove('active');
    currenColor = brushColor.value;

})



cleraBtn.addEventListener('click' , ()=>{
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width, canvas.height)
});


saveBtn.addEventListener('click' , () => {
    let link = document.createElement('a');
    link.download = `${Date.now().jpg}`;
    link.href = canvas.toDataURL();
    link.click();
})