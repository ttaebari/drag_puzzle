const container = document.querySelector(".image-container")
const startButton = document.querySelector(".start-button")
const gameText = document.querySelector(".game-text")
const playTime = document.querySelector(".play-time")
const button1 = document.getElementById('1')
const button2 = document.getElementById('2')
const button3 = document.getElementById('3')
const button4 = document.getElementById('4')
const button5 = document.getElementById('5')
const button6 = document.getElementById('6')
const button7 = document.getElementById('7')
const button8 = document.getElementById('8')


const tileCount = 12;

let tiles = [];

const dragged = {
    el: null,
    class: null,
    index: null,
}

let isPlaying = false;
let timeInterval = null;
let time = 0;

//function


function showPic(){
    time = 0;
    container.innerHTML = "";
    gameText.computedStyleMap.display = 'none'
    tiles = createImageTiles();
    tiles.forEach(tile => container.appendChild(tile))
}

function setGame() {
    setTimeout(() => {
        isPlaying = true;
        container.innerHTML = "";
        shuffle(tiles).forEach(tile => container.appendChild(tile))
        clearInterval(timeInterval)
        timeInterval = setInterval(()=>{
            playTime.innerText = time;
            time++;
        },1000)
    }, 2000)
}

function createImageTiles() {
    const tempArray = [];
    Array(tileCount).fill().forEach((_, i) => {
        const li = document.createElement("li");
        li.setAttribute('draggable', 'true')
        li.setAttribute('data-index', i)
        li.classList.add('list' + i);
        tempArray.push(li)
    })
    return tempArray;
}

function shuffle(array) {
    let index = array.length - 1;
    while (index > 0) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]]
        index--;
    }
    return array;
}

function checkStatus() {
    const currentList = [...container.children];
    const unMatchedList = currentList.filter((child, index) => {
        return Number(child.getAttribute("data-index")) !== index
    })
    if(unMatchedList === 0){
        gameText.computedStyleMap.display = "block";
        isPlaying = false;
        clearInterval(timeInterval)
    }
}

//events
container.addEventListener('touchstart', e => {
    if(!isPlaying) return;
    const obj = e.target
    dragged.el = obj;
    dragged.class = obj.className;
    dragged.index = [...obj.parentNode.children].indexOf(e.target);
})

container.addEventListener('touchmove', e => {
    e.preventDefault();
})

container.addEventListener('touchend', e => {
    if(!isPlaying) return;
    const obj = e.target

    if (obj.className !== dragged.class) {
        let originPlace;
        let isLast = false;

        if (dragged.el.nextSibling) {
            originPlace = dragged.el.nextSibling;
        } else {
            originPlace = dragged.el.previousSibling;
            isLast = true;
        }
        const droppedIndex = [...obj.parentNode.children].indexOf(e.target);
        dragged.index > droppedIndex ? obj.before(dragged.el) : obj.after(dragged.el);
        isLast ? originPlace.after(obj) : originPlace.before(obj);
    }
    checkStatus();
})

startButton.addEventListener('click',()=>{
    setGame();
})

button1.addEventListener('click',()=>{
    showPic();
    var img = '1.jpg'
    var listItems = document.querySelectorAll('.image-container li');
    listItems.forEach(function(li) {
        li.style.backgroundImage = 'url(' + img + ')';
    });
})

button2.addEventListener('click',()=>{
    showPic();
    var img = '2.png'
    var listItems = document.querySelectorAll('.image-container li');
    listItems.forEach(function(li) {
        li.style.backgroundImage = 'url(' + img + ')';
    });
})

button3.addEventListener('click',()=>{
    showPic();
    var img = '3.jpg'
    var listItems = document.querySelectorAll('.image-container li');
    listItems.forEach(function(li) {
        li.style.backgroundImage = 'url(' + img + ')';
    });
})

button4.addEventListener('click',()=>{
    showPic();
    var img = '4.png'
    var listItems = document.querySelectorAll('.image-container li');
    listItems.forEach(function(li) {
        li.style.backgroundImage = 'url(' + img + ')';
    });
})

button5.addEventListener('click',()=>{
    showPic();
    var img = '5.jpg'
    var listItems = document.querySelectorAll('.image-container li');
    listItems.forEach(function(li) {
        li.style.backgroundImage = 'url(' + img + ')';
    });
})

button6.addEventListener('click',()=>{
    showPic();
    var img = '6.png'
    var listItems = document.querySelectorAll('.image-container li');
    listItems.forEach(function(li) {
        li.style.backgroundImage = 'url(' + img + ')';
    });
})

button7.addEventListener('click',()=>{
    showPic();
    var img = '7.jpg'
    var listItems = document.querySelectorAll('.image-container li');
    listItems.forEach(function(li) {
        li.style.backgroundImage = 'url(' + img + ')';
    });
})

button8.addEventListener('click',()=>{
    showPic();
    var img = '8.jpg'
    var listItems = document.querySelectorAll('.image-container li');
    listItems.forEach(function(li) {
        li.style.backgroundImage = 'url(' + img + ')';
    });
})