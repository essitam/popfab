
function jumpingoimg(letters=["\\w"]) {
//   let reg = RegExp(`<[^>]+>|(${letters.join("|")})`, 'gi');
//   let el = document.getElementById(id);
//   el.innerHTML = el.innerHTML.replace(reg, `<span class="$1">$1</span>`);
// }
var x = document.querySelectorAll("p");
let reg = RegExp(`<[^>]+>|(${letters.join("|")})`, 'gi');

for (i = 0; i < x.length; i++) {
var text = x[i].innerHTML;
let op =text.replace(reg, `<a href="randomImgo()">$1</a>`);

x[i].innerHTML = op;
}}

randomImgo(){
  var aaaa = ['img/aaaa/50050004.JPG'];
  var iii = document.getElementById('');
  var eeee = createElement('img');
  eeee.setAttribute('src', aaaa[0]);
}
