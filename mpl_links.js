"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Micah Fischer
   Date:   4-18-19
   
   Filename: mpl_links.js

*/

// Adds an event listener on load to add selection elements to an array.
window.addEventListener("load", function () {
    var allSelect = document.querySelectorAll("#govLinks select");
    // For loop adds change event listeners which navigates to webpages from target value.
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].addEventListener("change", function (e) {
            window.location.href = e.target.value;
        });
    }
})