/*Typewriter.js// https://github.com/ronv/Typewriter.js*/

var aText = new Array("<span class='terminal__text__span'>hi, i'm Lehdt</span>","<span class='terminal__text__span'>a public class void client side hacker</span>","<span class='terminal__text__span'>I'm sorry to do this to you user (on laptop...</span>","<span class='terminal__text__span'>but i'm hacking your private files</span>","<span class='terminal__text__span'>these files include all of your important ones. You may verify. This <a href='chrome://device-log'>portfolio</a> has all of your files</span>","<span class='terminal__text__span'>These include your mp4, mp3, html, coding, drive, downloads, bookmarks, extensions, online data, .jpeg, .gif, .png, jpg, .bat, .js, .py, .html, .unkown, and any other files on your computer</span>","<span class='terminal__text__span'> If you have any questions here is my <a href='nathan.schmitt@franklinsabers.org'>email</a></span>","<span class='terminal__text__span'>to decript your data please go to this link<a 'href=https://www.cryptoprank.com/#/crypto'> decription link</a></span>");
var iSpeed = 25;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;
var iTextPos = 0;
var sContents = "";
var iRow;

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 200);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

(function() {
  $(".terminal").draggable();
});

// ENcryption

var barWidth = 0;

function contLoading() {
  if (barWidth >= 10) {
    document.getElementById("things").innerHTML = "encrypting: /system/BIOS";
  }
  if (barWidth >= 20) {
    document.getElementById("things").innerHTML = "encrypting: user/Documentos/*.*";
  }
  if (barWidth >= 30) {
    document.getElementById("things").innerHTML = "encrypting: user/Escritorio/*.*";
  }
  if (barWidth >= 40) {
    document.getElementById("things").innerHTML =
      "encrypting: user/Documentos/EPMTPQ"";
  }
  if (barWidth >= 50) {
    document.getElementById("things").innerHTML =
      "encrypting: user/Escritorio/EPMTPQ"";
  }
  if (barWidth >= 60) {
    document.getElementById("things").innerHTML = "Encriptando INTRANET.trolebus.gob.ec";
  }
  if (barWidth >= 70) {
    document.getElementById("things").innerHTML =
      "encrypting: Archivos del Sistema";
  }
  if (barWidth >= 80) {
    document.getElementById("things").innerHTML =
      "Hacking Exchange account mail.trolebus.gob.ec";
  }
  if (barWidth >= 90) {
    document.getElementById("things").innerHTML = "Hacking Exchange account mail.trolebus.gob.ec";
  }
  if (barWidth >= 95) {
    document.getElementById("things").innerHTML =
      "Hacking Facebook account";
  }

  if (barWidth >= 100) {
    var loadBar = document.getElementById("loadingProgress");
    var loadtran = document.getElementById("loadingProgress");
    document.getElementById("status").innerHTML = "Lehdt";
    document.getElementById("precentage").innerHTML = "Lehdt";
    document.getElementById("typedtext").innerHTML = "Lehdt";
    document.getElementById("things").innerHTML =
      "encryption result: hacked :(";
    loadBar.style.width = 0;
    loadtran.style.transition = "width 2s ease-in";
  } else {
    var percentage = document.getElementById("precentage");
    var loadBar = document.getElementById("loadingProgress");
    barWidth = barWidth + 1;
    loadBar.style.width = barWidth + "%";
    percentage.innerHTML = barWidth + "%";
  }
}

window.setInterval(contLoading, 400);
