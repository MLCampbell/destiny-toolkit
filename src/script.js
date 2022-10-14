const multiBtn = document.querySelector('.multilink')

var modal = document.getElementById("Modal");

function PopupBlocked() {
    const firstWindow = window.open(null);
    firstWindow.close();
    const PUtest = window.open(null);
    try { PUtest.close(); return false; }
    catch (e) { return true }
};

function launchPages() {
    window.open('https://app.destinyitemmanager.com/');
    window.open('https://www.light.gg/god-roll/roll-appraiser/');
    window.open('https://bray.tech/weeklies');
}


function clickHandler(e) {
    e.preventDefault();
    if (!PopupBlocked()) {
        launchPages()
    }
    else { modal.style.display = "block" }
};

multiBtn.addEventListener("click", clickHandler)

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}