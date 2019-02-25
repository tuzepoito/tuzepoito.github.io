window.addEventListener("load", function () {
  var contactLink = document.createElement("a");
  var contactEl = document.createElement("p");
  var contentEl = document.getElementById("content");

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

  contactEl.innerText = "Contact: ";

  contactLink.innerText = shift(mailString2, -2) + shift(mailString3, 3);
  contactLink.href = shift(mailString1, 1) + shift(mailString2, -2) + shift(mailString3, 3);

  contactEl.appendChild(contactLink);
  contactEl.classList.add("contact");

  contentEl.appendChild(contactEl);
});