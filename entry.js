var lb = require("./lb.js");
var $ = require("./node_modules/jquery/dist/jquery.js");
var mainStyle = require("./style.css");

var btn = document.getElementById('lightClick');
var btn2 = document.getElementById('closeLB');
btn.addEventListener("click", lb.open);
btn2.addEventListener("click", lb.close);



$("#modal").css("backgroundColor", "red");