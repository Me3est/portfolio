
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var main_html = $("html");
var page = 1;

$(window).on("wheel", function(e) {
    if(main_html.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 4) return;
        page++; 
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    main_html.animate({scrollTop : posTop});
})

$(document).ready(function() {
    let b_hei = $('.section');
    b_hei.eq(0).addClass('indi_active');
    $(window).scroll(function() { 
        let s_top = $(window).scrollTop();
        console.log(s_top)
        for(let i=0; i<$('.section').length; i++) {
            if(s_top == b_hei.eq(i).offset().top) {
                $('.indi_bar').removeClass('indi_active')
                $('.indi_bar').eq(i).addClass('indi_active')
            }
        }
    })
// section1
    let click_box = $('.click_box')
        click_box.click(function() {
            click_box.css({display:'none'})
            $('.intro_box').fadeIn(50)
            setInterval(typing,200)
        })
// section2 
    let img_box = $('.img_box')
    let skill = $('.skill')
    for(let i=0; i<skill.length; i++) {
        img_box.eq(i).click(function() {
            img_box.eq(i).css({display:'none'})
            $('.img_click_box').eq(i).addClass('display1')
            $('.skill_bar').eq(i).animate({
                width:'65%'
            }, 50)
        })
    }

    
function count_up(i, num) {
    let tmp =0;
    let interval;

    interval = setInterval(function() {
        tmp++;
        
        $('.img_click_box').eq(i).find('.skill_bar').css({
            width: tmp + "%"
        })
        $('.img_click_box').eq(i).find('.count').text(tmp);
        if(tmp >= num) {
            clearInterval(interval);
        }
    }, 5)
}
    let sec2_chk = true;
    $(window).scroll(function() {
        let sec2_top = $('#section2').offset().top;
        let s_top = $(window).scrollTop();
        if(sec2_top == s_top) {
            if(sec2_chk) {
                sec2_chk = false;
                let per = [95, 95, 90, 95, 80];
                for(let i=0; i<skill.length; i++) {
                    count_up(i, per[i])
                }
            }
        }
    })
})
