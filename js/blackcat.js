// function blackc(id, letters=["\\w"]) {
//   let reg = RegExp(`<[^>]+>|(${letters.join("|")})`, 'gi');
//   let el = document.getElementById(id);
//   el.innerHTML = el.innerHTML.replace(reg, `<span class="$1">$1</span>`);
// }


function blackc(letters=["\\w"]) {
//   let reg = RegExp(`<[^>]+>|(${letters.join("|")})`, 'gi');
//   let el = document.getElementById(id);
//   el.innerHTML = el.innerHTML.replace(reg, `<span class="$1">$1</span>`);
// }
var x = document.querySelectorAll("p");
let reg = RegExp(`<[^>]+>|(${letters.join("|")})`, 'gi');

for (i = 0; i < x.length; i++) {
var text = x[i].innerHTML;
let op =text.replace(reg, `<span class="$1">$1</span>`);

x[i].innerHTML = op;
}}
