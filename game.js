let cat = document.getElementById('cat');
let box = document.getElementById('box');
let counter = 0;

function jump() {
    if(cat.classList != "animate") {
        cat.classList.add("animate");
    }
    setTimeout( function() {
        cat.classList.remove("animate");
        counter++;
    }, 500 );
}

let lose = setInterval(function() {
    let catTop = 
    parseInt (window.getComputedStyle(cat).
    getPropertyValue("top"));
    let blockLeft = 
    parseInt (window.getComputedStyle(box).
    getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0 && catTop >= 130) {
        box.style.animation = "none";
        box.style.dispaly = "none";
        alert("Score: " + counter)
        counter = 0;
    }
}, 10)