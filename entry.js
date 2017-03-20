var lb = require("./lb.js");


var btn = document.getElementById('lightClick');
var btn2 = document.getElementById('closeLB');
btn.addEventListener("click", lb.open);
btn2.addEventListener("click", lb.close);

$("#modal").css("backgroundColor", "yellow");