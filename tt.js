const $text = document.querySelector('.text');
const letters = "HTML, CSS, JavaScript, Jquery \n front-end developer";
let i = 0;

function typing() {
    if(i < letters.length) {
        let txt = letters.charAt(i)
        $text.innerHTML += txt=== "\n" ? "<br/>":txt;
        i++
    }
}
$(document).ready(function() {
    
})