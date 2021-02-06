//Other scripts files are added here
var time = new Date();
document.getElementById("foot1").innerHTML =
    "<buton type='button' >" +
    "<a class='btn btn-danger' href ='#top'>Go up</a></button><br/>" +
    "<br/> &copy " +
    time.getFullYear() +
    " Cyrus Momoh. All rights reserved.";

// header navigation bar
document.getElementById("nav1").innerHTML =
    "<ul id = 'menu' class='tab'>" +
    "<li class='btn btn-dark'><a href= 'index.html'>Home</a></li>" +
    "<li class='btn btn-dark'><a>About</a></li>" +
    "<li class='btn btn-dark'><a>Help</a></li><ul>";
