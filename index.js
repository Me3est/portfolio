// 원페이지 스크롤 이벤트
var scroll = function(){
    
    var $nav = null,
        $cnt = null,
        moveCnt = null,
        moveIndex = 0,
        moveCntTop = 0,
        winH = 0,
        time = false; // 새로 만든 변수
  
    $(document).ready(function(){
        init();
        initEvent();
    });
    
    var init = function(){
        $cnt = $(".section");
        $nav = $(".indicator a");
    };
    
    var initEvent = function(){
        $("html ,body").scrollTop(0);
        winResize();
        $(window).resize(function(){
            winResize();
        });
        $nav.on("click", function(){
            moveIndex = $(this).parent("li").index();
            moving(moveIndex);
            return false;
        });
        $cnt.on("mousewheel", function(e){
            if(time === false){ // time 변수가 펄스일때만 휠 이벤트 실행
              wheel(e);
            }
        });
    };
        
    var winResize = function(){
        winH = $(window).height();
        $cnt.height(winH);
        $("html ,body").scrollTop(moveIndex.scrollTop);
    };
    
    var wheel = function(e){
        if(e.originalEvent.wheelDelta < 0){
            if(moveIndex < 5){
                moveIndex += 1;
                moving(moveIndex);
            };
        }else{
            if(moveIndex > 0){
                moveIndex -= 1;
                moving(moveIndex);
            };
        };
    };
    
    var moving = function(index){
        time = true // 휠 이벤트가 실행 동시에 true로 변경
        moveCnt = $cnt.eq(index);
        moveCntTop = moveCnt.offset().top;
        $("html ,body").stop().animate({
            scrollTop: moveCntTop
        }, 700, function(){
          time = false; // 휠 이벤트가 끝나면 false로 변경
        });
        $nav.parent("li").eq(index).addClass("indi_active").siblings().removeClass("indi_active");
    };
    
  };
  scroll();
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
            // $('.skills_box').css({transform:'translate(-50%, -50%)'})
            // $('.sec2_title_box').css({left:'67%'})
        }
        if(s_top >= $('#section3').offset().top) {
            $('.main_info').css({transform:'translateY(0)', opacity:'1'})
            $('.main_img').css({transform:'translateX(0)', opacity:'1'})
            $('.bicycle_img').fadeIn(1700, 'linear')
        }
        if(s_top >= $('#section4').offset().top) {
            $('.main_info2').css({transform:'translateY(0)', opacity:'1'})
            $('.main_img2').css({transform:'translateX(0)', opacity:'1'})
        }
        if(s_top >= $('#section5').offset().top) {
            $('.about_box').css({transform:'translateY(0)', opacity:'1'})
            $('.sec5_title').css({transform:'translateY(0)', opacity:'1'})
        }
        if(s_top >= $('#section6').offset().top) {
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
const letters = "도움을 줄 수 있는 \n 웹퍼블리셔가 되기위해 \n 공부중인 이유진 입니다.";
let i = 0;

function typing() {
    if(i < letters.length) {
        let txt = letters.charAt(i)
        $text.innerHTML += txt=== "\n" ? "<br/>":txt;
        i++
    }
}
