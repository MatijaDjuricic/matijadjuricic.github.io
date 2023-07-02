//client links
let links_array = ["https://craftigames.net", "https://jartexnetwork.net", "https://lunaty.net", "https://pika-network.net", "https://discord.gg/zekcord"]
let client_divs = document.querySelectorAll(".items");
client_divs.forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        let arr = Array.from(client_divs);
        window.open(`${links_array[arr.indexOf(el)]}`, '_blank');
    });
});