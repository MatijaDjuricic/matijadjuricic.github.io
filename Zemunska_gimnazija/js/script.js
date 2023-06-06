let hero_tittle = document.querySelector(".hero-tittle");
let more_info_overlay = document.querySelector(".info-overlay");
document.querySelector(".more-info-btn").addEventListener("click",  () => {
    window.scrollTo(0, 0);
    hero_tittle.style.display = "none";
    more_info_overlay.style.display = "block";
});
document.querySelector(".close-overlay").addEventListener("click", () => {
    hero_tittle.style.display = "block";
    more_info_overlay.style.display = "none";
});
document.addEventListener('scroll', () => {
    const line = document.querySelector('.scrolling-line');
    const { scrollTop, scrollHeight } = document.documentElement;
    const scrolling = scrollTop / (scrollHeight - window.innerHeight) * 100;
    let scroll = `${scrolling}%`;
    line.style.setProperty('--line-width', scroll);
});
const linkBtn = document.querySelector('#linkButton');
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');
let imgNum = 0;
let imgLinks = ['http://www.zemunskagimnazija.edu.rs/index.php?jezik=sr&strana=nastava_izborni_predmeti',
                'http://www.zemunskagimnazija.edu.rs/index.php?jezik=sr&strana=aktuelnost&godina=2022-2023&n=767', 
                'http://www.zemunskagimnazija.edu.rs/index.php?jezik=sr&strana=aktuelnost&godina=2020-2021&n=750',
                'http://www.zemunskagimnazija.edu.rs/index.php?jezik=sr&strana=aktuelnost&godina=2020-2021&n=743',
                'http://www.zemunskagimnazija.edu.rs/index.php?jezik=sr&strana=aktuelnost&godina=2022-2023&n=761'];
if (imgNum === 0) {
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
    linkBtn.addEventListener('click', e => {
        e.preventDefault();
        window.open(`${imgLinks[imgNum]}`, '_blank')
    });
}
rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);