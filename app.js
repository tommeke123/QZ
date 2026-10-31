/* QUICK TIPS
 * var MIN_CHARS = 1;  change 1 to 3 to start filtering only after 3 typed letters
 * var SHOW_COUNT = true;  change true to false to hide the "x vragen" counter
 */
var MIN_CHARS = 1;
var SHOW_COUNT = true;

(function () {
  var box = document.getElementById("search");
  if (!box) { return; }
  var items = document.querySelectorAll("#list li");
  var counter = document.getElementById("count");

  function update() {
    var q = box.value.toLowerCase().trim();
    var shown = 0;
    for (var i = 0; i < items.length; i++) {
      var hit = q.length < MIN_CHARS || items[i].getAttribute("data-text").indexOf(q) !== -1;
      items[i].classList.toggle("hidden", !hit);
      if (hit) { shown++; }
    }
    if (counter && SHOW_COUNT) { counter.textContent = shown + " vragen"; }
  }
  box.addEventListener("input", update);
  update();
})();
