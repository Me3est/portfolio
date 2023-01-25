const $text = document.querySelector('.text');
const letters = "도움을 줄 수 있는 \n FRONT-END DEVELOPER가 되기위해 \n 노력중인 이유진 입니다.";
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