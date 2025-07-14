/*
 * Code for switching between tabs on the tips page in the resources section.
 * This file is included in the no_title.html and default.html layouts.
*/
function aboutConverse() {
    document.getElementById("about-tab-converse").classList.add("current");
    document.getElementById("about-tab-site").classList.remove("current");

    document.getElementById("about-converse").hidden = false;
    document.getElementById("about-site").hidden = true;
}

function aboutWebsite() {
    document.getElementById("about-tab-converse").classList.remove("current");
    document.getElementById("about-tab-site").classList.add("current");

    document.getElementById("about-converse").hidden = true;
    document.getElementById("about-site").hidden = false;
}