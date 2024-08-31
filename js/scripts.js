let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents")

function opentab(name) {
    for (link of tablinks) {
        link.classList.remove('active-link');
    }
    for (content of tabcontents) {
        content.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(name).classList.add('active-tab');
}

let sidebar = document.getElementById('side-bar');

function showbar() {
    sidebar.style.right = "0";
}
function hidebar() {
    sidebar.style.right = "-200px";
}