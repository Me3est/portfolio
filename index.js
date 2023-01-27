// 원페이지 스크롤 이벤트
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});
var main_html = $("html");
var page = 1;
$(window).on("wheel", function(e) {
    if(main_html.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 5) return;
        page++; 
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    main_html.animate({scrollTop : posTop});
})
// 새로고침 이벤트
$(window).load(function() {
    $('#section1').css({opacity:'1'})
    $('.indi_bar').css({opacity:'1'})
})
// 본문 이벤트
$(document).ready(function() {
    history.scrollRestoration = "manual"
    // 인디케이터 스크롤 이벤트
    let b_hei = $('.section');
    $(window).scroll(function() { 
        let s_top = $(window).scrollTop();
        console.log(s_top, b_hei.eq(1))
        for(let i=0; i<$('.section').length; i++) {
            if(s_top >= b_hei.eq(i).offset().top) {
                $('.indi_bar').removeClass('indi_active')
                $('.indi_bar').eq(i).addClass('indi_active')
                $('.indi_bar2').removeClass('indi_active2')
                $('.indi_bar2').eq(i).addClass('indi_active2')
            }
        }
        // 각 섹션의 스크롤 이벤트
        if(s_top >= $('#section1').offset().top) {
            $('.skills_box').css({transform:'translate(-50%, -50%)'})
            $('.sec2_title_box').css({left:'67%'})
        }
        if(s_top >= $('#section3').offset().top) {
            $('.main_info').css({transform:'translateY(0)', opacity:'1'})
            $('.main_img').css({transform:'translateX(0)', opacity:'1'})
            $('.sec3_title_box').css({top:'10%'})
            // $('.bicycle_img').css({display:'block'})
            $('.bicycle_img').fadeIn(1700, 'linear')
        }
        if(s_top >= $('#section4').offset().top) {
            $('.about_box').css({transform:'translateY(0)', opacity:'1'})
            $('.sec4_title').css({transform:'translateY(0)', opacity:'1'})
        }
        if(s_top >= $('#section5').offset().top) {
            $('.contect').css({transform:'translate(-50%, -70%)', opacity:'1'})
            $('.item_s').css({transform:'translateY(0)', opacity:'1'})
        }
    })
    // 식션1 클릭 이벤트
    let click_box = $('.click_box')
        click_box.click(function() {
            click_box.css({display:'none'})
            $('.intro_box').fadeIn(50)
            setInterval(typing,150)
            $('.scroll_box').css({display:'block'})
        })
    $('.click_box2').mouseenter(function() {
        $('.door1').css({display:'none'})
        $('.door2').css({display:'block'})
    })
    $('.click_box2').mouseleave(function() {
        $('.door1').css({display:'block'})
        $('.door2').css({display:'none'})
    })
// 스킬 이벤트
function count_up(i, num) {
    let tmp =0;
    let interval;

    interval = setInterval(function() {
        tmp++;
        
        $('.img_click_box').eq(i).find('.skill_bar').css({
            width: tmp + "%"
        })
        $('.img_click_box').eq(i).find('.count').text(tmp+"%");
        if(tmp >= num) {
            clearInterval(interval);
        }
    }, 5)
}
    let sec2_chk = true;
    let skill = $('.skill')
    $(window).scroll(function() {
        let sec2_top = $('#section2').offset().top;
        let s_top = $(window).scrollTop();
        if(sec2_top == s_top) {
            if(sec2_chk) {
                sec2_chk = false;
                let per = [95, 95, 95, 95, 70, 80, 80];
                for(let i=0; i<skill.length; i++) {
                    count_up(i, per[i])
                }
            }
        }
    })
})
// 타이핑 이벤트
const $text = document.querySelector('.text');
const letters = "도움을 줄 수 있는 \n FRONT-END DEVELOPER가 되기위해 \n 공부중인 이유진 입니다.";
let i = 0;

function typing() {
    if(i < letters.length) {
        let txt = letters.charAt(i)
        $text.innerHTML += txt=== "\n" ? "<br/>":txt;
        i++
    }
}