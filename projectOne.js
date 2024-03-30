
let colors = ['#DFFF00', '#FF7F50', '#DE3163', '#40E0D0', '#6495ED', '#800000', '#008000'];

let container = document.getElementById("container");
let color = document.getElementById("color");

function button(){
    let randomColor = getRandomColor();
    // console.log(randomColor);
    container.style.backgroundColor = colors[randomColor];
    color.innerHTML = colors[randomColor];
    color.style.color = colors[randomColor];

}

function getRandomColor(){
    return Math.floor(Math.random() * colors.length);
}
