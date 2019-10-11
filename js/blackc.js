const colors = {"a":"#d94a6f;","b":"#3a97f7;","c":"#fffa73;","d":"#8747f6;","e":"#454545;","f":"#8ef271;","g":"#f29737;","h":"#d1a239;","i":"#70f9fd;","j":"#f091d4;","k":"#a957e5;","l":"#4f3aec;","m":"#e18695;","n":"#faec75;","o":"#ffffff;","p":"#cb63ef;","q":"#d2bfb7;","r":"#f091d4;","s":"#ec4025;","t":"#57964d;","u":"#e5bf74;","v":"#f29840;","w":"#fffa8c;","x":"#a97f40;","y":"#fae085;","z":"#4b258d;"}
blackcat = (id) => {
let ll = document.getElementById(id)
ll.innerHTML = ll.innerText.split("").map(l => `<span style="background-color:${colors[l]}">${l}</span>`).join("")
}
