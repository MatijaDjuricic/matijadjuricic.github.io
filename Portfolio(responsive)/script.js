const mobileMenu = () => {
    let manu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');
    if (btn.innerText === 'MENU') 
    {
        manu.style.display = 'block'
        btn.innerText = 'CLOSE'
    } else 
    {
        manu.style.display = 'none'
        btn.innerText = 'MENU'
    }
}
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');
let imgNum = 0;
const displayNone = () => {
    pictures.forEach((img) => {
    img.style.display = 'none';
});
}
const moveRight = () => {
    displayNone();
    imgNum++;
    if (imgNum === pictures.length){
        imgNum = 0;
    }
    pictures[imgNum].style.display = 'block';
}
const moveLeft = () => {
    displayNone();
    imgNum--;
    if (imgNum === -1) {
        imgNum = pictures.length - 1;
    }
    pictures[imgNum].style.display = 'block';
}
rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);
const portfolioSort = (button) => {
    let categry = button.getAttribute('data-category');
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');
    portfolioItems.forEach((item) => {
    item.style.display = 'none';
    })
    if (categry === 'sve') {
        portfolioItems.forEach((item) => {
            item.style.display = 'block';
        });
    }
    portfolioItems.forEach((item) => {
        if (item.getAttribute('data-category').includes(categry))
        item.style.display = 'block';
    });
}
const openModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
}
const closeModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
}