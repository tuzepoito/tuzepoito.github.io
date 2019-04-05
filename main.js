function main () {
  var contactListEl = document.createElement('li');
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

  // contactEl.innerText = "Contact: ";

  // contactLink.innerText = shift(mailString2, -2) + shift(mailString3, 3);
  contactLink.href = shift(mailString1, 1) + shift(mailString2, -2) + shift(mailString3, 3);
  contactLink.className = "icon-envelop";
  contactLink.title = "E-mail";
  contactLink.innerText = "E-mail";

  contactListEl.appendChild(contactLink);
  contactEl.appendChild(contactListEl);
}

if (window.addEventListener) {
  window.addEventListener('load', main);
} else if (window.attachEvent) {
  window.attachEvent('onload', main);
} else {
  window.onload = main;
}
