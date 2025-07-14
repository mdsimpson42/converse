/*
 * Code for switching between tabs on the tips page in the resources section.
 * This file is included in the no_title.html and default.html layouts.
*/
function self() {
    document.getElementById("tips-tab-self").classList.add("current");
    document.getElementById("tips-tab-colleagues").classList.remove("current");
    document.getElementById("tips-tab-team").classList.remove("current");

    document.getElementById("tips-self").hidden = false;
    document.getElementById("tips-colleagues").hidden = true;
    document.getElementById("tips-team").hidden = true;
}

function colleagues() {
    document.getElementById("tips-tab-self").classList.remove("current");
    document.getElementById("tips-tab-colleagues").classList.add("current");
    document.getElementById("tips-tab-team").classList.remove("current");

    document.getElementById("tips-self").hidden = true;
    document.getElementById("tips-colleagues").hidden = false;
    document.getElementById("tips-team").hidden = true;
}

function team() {
    document.getElementById("tips-tab-self").classList.remove("current");
    document.getElementById("tips-tab-colleagues").classList.remove("current");
    document.getElementById("tips-tab-team").classList.add("current");

    document.getElementById("tips-self").hidden = true;
    document.getElementById("tips-colleagues").hidden = true;
    document.getElementById("tips-team").hidden = false;
}