let box = document.getElementById('box');

document.onmousemove = (event) => {
    var x = event.clientX;
    var y = event.clientY;
    box.style.left = event.clientX - (box.clientWidth/2) + 'px';
    box.style.top = event.clientY - (box.clientWidth/2) + 'px';
}
function random(number){
    return Math.floor(Math.random() * number)
}
document.onclick = function () {
ubah = "rgb("+random(255)+", "+random(255)+", "+random(255)+")";
box.style.backgroundColor = ubah;
}