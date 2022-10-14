const el = document.querySelector('.multilink')

console.log(el);

function clickHandler(e) {
    e.preventDefault();
    window.open('https://app.destinyitemmanager.com/');
    window.open('https://www.light.gg/god-roll/roll-appraiser/');
    window.open('https://bray.tech/weeklies');
}
;

el.addEventListener("click", clickHandler)

alert("Be sure to 'allow pop-ups' in order for the Core Tools button to work.")

