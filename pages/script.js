let currentImg = 0;
const slides = document.querySelectorAll('.li-img-slide');
const dragable = document.querySelector('.img-dragable');
const apiItem = document.querySelector('.entry');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const closeMenu = document.querySelector('.close');

const showImg = (index) => {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if(i === index ) {
            slide.classList.add('active');
        }
    });
  }

const nextImg = () => {
    currentImg = (currentImg + 1) % slides.length;
    showImg(currentImg);
}

const previousImg = () => {
    currentImg = (currentImg - 1 + slides.length) % slides.length
    showImg(currentImg)
}

setInterval(nextImg, 3000);

 
dragable.addEventListener('mousedown', (e) => {
    e.preventDefault();

    let pos1 = 0, pos2 = 0, pos3 = e.clientX, pos4 = e.clientY;
    
    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        dragable.style.top = (dragable.offsetTop - pos2) + "px";
        dragable.style.left = (dragable.offsetLeft - pos1) + "px";
    }


    function closeDragElement(){
        document.removeEventListener('mouseup', closeDragElement);
        document.removeEventListener('mousemove', elementDrag);
    }

    document.addEventListener('mousemove', elementDrag);
    document.addEventListener('mouseup', closeDragElement)
});

menu.addEventListener('click', () => {
    overlay.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    overlay.classList.remove('active');
});


// const getData = () => {

//     return fetch('http://localhost:4000/api/')
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         apiItem.innerHTML = `
//         <p>${data.text}</p>
//         <strong>${data.found}</strong>`
//     });
// }

//getData();

function loadData  ()  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            console.log(this.responseText);
            const data = JSON.parse(this.responseText);
            const text = data. text;
            document.getElementById('entry').innerHTML = text;
        }
    };
    xhttp.open("GET", "http://localhost:4000/api/", true);
    xhttp.send();
}

loadData();
