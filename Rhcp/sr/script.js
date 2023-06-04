let overlay = document.querySelector(".overlay");
let closeicon = document.querySelector(".close-icon");
let btns_header = document.querySelectorAll(".btn-header")
let list = document.querySelector(".list-container");
let table = document.querySelector(".table-container");
let members = document.querySelector(".members-container");
let videowrapper = document.querySelector(".video-container");
let video = document.querySelector("video");
btns_header.forEach(i => {
    i.addEventListener("click", e => {
        e.preventDefault();
        overlay.style.display = "block";
        switch(true) {
            case i.id === list.id: 
                list.style.display = "block";
                break;
            case i.id === table.id: 
                table.style.display = "block";
                break;
                case i.id === members.id: 
                    members.style.display = "block";
                    break;
            case i.id === videowrapper.id: 
                videowrapper.style.display = "block";
                video.play();
                video.volume = 0.2;
            break;
        }
    });
});
closeicon.addEventListener("click", e => {
    e.preventDefault();
    overlay.style.display = "none";
    list.style.display = "none";
    table.style.display = "none";
    members.style.display = "none";
    videowrapper.style.display = "none";
    video.pause();
});