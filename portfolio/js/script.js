// smoth scroll (arrow)funcions
const ScrollToTop = () => {
    window.scrollTo(0, 0);
}
const ScrollToSecondSection = () => {
    window.scrollTo(0, 980);
}
const ScrollToThirdSection = () => {
    window.scrollTo(0, 1920);
}
const ScrollToFourthSection = () => {
    window.scrollTo(0, 2900);
}
// contact overlay
overlay = document.querySelector('#contact-overlay');
contact_btn = document.querySelector('#show-overlay');
contact_btn.addEventListener('click', () => {
    if (this.scrollY === 0) {
        overlay.style.display = 'block';
    }
    else {
        ScrollToTop();
        setTimeout(e = () => {
            overlay.style.display = 'block';
        }, 1000);
    } 
});
// border line animation and 'onscroll' - function
let border = document.querySelector('.border-line');
let animationWidth = 0;
window.onscroll = () => {
    if (this.oldScroll > this.scrollY) {
        animationWidth -= 1;
    }
    else {
        animationWidth += 0.5;
    }
    if (animationWidth >= 100) {
        animationWidth = 100;
    }
    if (animationWidth <= 0) {
        animationWidth = 0;
    }
    if (this.scrollY > 30) {
        overlay.style.display = 'none';
    }
    border.style.width = animationWidth +  '%';
    this.oldScroll = this.scrollY;   
}
// switch(button) text and image
document.querySelector('#invert').addEventListener('click', () => {
    let text = document.querySelector('#aboutMeText');
    let image = document.querySelector('#aboutMeImage');
    text.classList.toggle('text-moved');
    image.classList.toggle('image-moved');
});
// slider images(links gallery)
const statusText = document.querySelector('#statusText');
const statusNum = document.querySelector('#statusNum');
const linkBtn = document.querySelector('#linkButton');
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');
let imgName = ['Social Network', 'Tic Tac Toe - Game', 'Drums(simulator)', 'Snake game', 'Film tickets', 'Game shop', 'Fakery(full responsive)', 'To do list', 'Animations', 'Charts'];
let imgNum = 0;
let imgLinks = ['http://localhost:85/Social%20Network/index.php', 
                'file:///E:/My%20web%20projects/Tic%20tac%20toe/index.html', 'file:///E:/My%20web%20projects/The%20drums/index.html',
                'file:///E:/My%20web%20projects/Snake%20game/index.html', 'file:///E:/My%20web%20projects/Film%20tickets/index.html', 
                'file:///E:/My%20web%20projects/Game%20shop/index.html', 
                'file:///E:/My%20web%20projects/Portfolio(responsive)/index.html', 'file:///E:/My%20web%20projects/To%20do%20list/index.html',
                'file:///E:/My%20web%20projects/Animations/index.html', 'file:///E:/My%20web%20projects/Charts/index.html'];
if (imgNum === 0) {
    statusText.textContent = `${imgName[imgNum]}`;
    statusNum.textContent = `${imgNum + 1} / ${imgName.length} projects`;
    linkBtn.addEventListener('click', e => {
        e.preventDefault();
        window.open(`${imgLinks[imgNum]}`, '_blank')
    });
}
const displayNone = () => {
    pictures.forEach((img) => {
    img.style.display = 'none';
});
}
const moveRight = () => {
    displayNone();
    imgNum++;
    if (imgNum === pictures.length) {
        imgNum = 0;
    }
    pictures[imgNum].style.display = 'block';
    statusText.textContent = `${imgName[imgNum]}`;
    statusNum.textContent = `${imgNum + 1} / ${imgName.length} projects`;
    linkBtn.addEventListener('click', e => {
        e.preventDefault();
        window.open(`${imgLinks[imgNum]}`, '_blank')
    });
}
const moveLeft = () => {
    displayNone();
    imgNum--;
    if (imgNum === -1) {
        imgNum = pictures.length - 1;
    }
    pictures[imgNum].style.display = 'block';
    statusText.textContent = `${imgName[imgNum]}`;
    statusNum.textContent = `${imgNum + 1} / ${imgName.length} projects`;
    linkBtn.addEventListener('click', e => {
        e.preventDefault();
        window.open(`${imgLinks[imgNum]}`, '_blank')
    });
}
rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);