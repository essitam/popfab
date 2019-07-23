let ߐ = main;
function check(_ૐ) {
  _ૐ_ = new RegExp(_ૐ, "ig");
  ߐ.innerHTML = ߐ.innerHTML.replace(_ૐ_, "<mark>" + _ૐ + "</mark>");
  window.setTimeout(Ώ, 5000);
}
function Ώ() {
  _ૐ_ = new RegExp("mark", "ig");
  ߐ.innerHTML = ߐ.innerHTML.replace(_ૐ_, "wbr");
}

// check("paradoxe")
// check(prompt("Search","paradoxe"))

check(search.value);