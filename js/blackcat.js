function blackc(id, letters=["\\w"]) {
  let reg = RegExp(`<[^>]+>|(${letters.join("|")})`, 'gi');
  let el = document.getElementById(id);
  el.innerHTML = el.innerHTML.replace(reg, `<span class="$1">$1</span>`);
}
