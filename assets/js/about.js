function main () {
  var contactLink = document.createElement('a');
  var contactEl = document.getElementById('contact');

  // obfuscation function
  function shift (str, num) {
    var ret = "";
    for (var i = 0; i < str.length; i++) {
      ret += String.fromCharCode(str.charCodeAt(i) + num);
    }
    return ret;
  }

  var mailString1 = "l`hksn9";
  var mailString2 = "vw|grqkvqB";
  var mailString3 = "dj^fi+`lj";

  var contactText = document.createTextNode("You may contact me at: ");

  contactLink.innerText = shift(mailString2, -2) + shift(mailString3, 3);
  contactLink.href = shift(mailString1, 1) + shift(mailString2, -2) + shift(mailString3, 3);

  contactEl.appendChild(contactText);
  contactEl.appendChild(contactLink);
}

if (window.addEventListener) {
  window.addEventListener('load', main);
} else if (window.attachEvent) {
  window.attachEvent('onload', main);
} else {
  window.onload = main;
}
