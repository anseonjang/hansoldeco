$(function () {
    //헤더 스크롤링
    const body = document.body
    const scrollUp = "scroll-up"
    const scrollDown = "scroll-down"
    let lastScroll = 0

    const onWindowScroll = () => {
    const currentScroll = window.pageYOffset

    if (currentScroll === 0) {
        body.classList.remove(scrollUp)
        return
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp)
        body.classList.add(scrollDown)
    } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
    ) {
        // up
        body.classList.remove(scrollDown)
        body.classList.add(scrollUp)
    }

    lastScroll = currentScroll
    }

    window.addEventListener("scroll", onWindowScroll)

    // 메뉴
    $(".mainmenu>li").mouseenter(function(){
        $(this).find(".submenu").stop().fadeIn(300);
    });
    $(".mainmenu>li").mouseleave(function(){
        $(this).find(".submenu").stop().fadeOut(300);
    });

    // 집 이미지  - 마우스 따라다니기
    $(document).mousemove(function (event) {
        // 'movable' 클래스를 가진 이미지를 선택하여 변수에 저장
        var $img = $('.movable');

        // 이동할 양을 설정하는 변수
        var moveAmount = 10; // 이 값을 조절하여 이미지의 이동량을 조절할 수 있음

        // 마우스의 X 좌표를 윈도우 너비를 기준으로 비율로 변환
        var x = (event.clientX / $(window).width() - 0.5) * moveAmount * 4;
        // 마우스의 Y 좌표를 윈도우 높이를 기준으로 비율로 변환
        var y = (event.clientY / $(window).height() - 0.5) * moveAmount * 3;

        // 변환을 통해 이미지의 위치를 조정
        $img.css('transform', 'translate(' + x + 'px, ' + y + 'px)');
        // 위의 코드에서:
        // 'translate(' + x + 'px, ' + y + 'px)'는 CSS transform 속성의 값을 지정하는 문자열
        // 'x'와 'y' 값에 따라 이미지가 수평과 수직으로 이동
    });

    // setion 이미지 스크롤
    $(document).ready(function(){
        $(window).scroll(function(){
            var scrollAmount = $(this).scrollTop();

            if (scrollAmount > 400) {
                $('.imgbox1').stop().animate({top:94});
            } else {
                $('.imgbox1').stop().animate({top:500});
            }
            if (scrollAmount > 400) {
                $('.imgbox2').stop().animate({top:264});
            } else {
                $('.imgbox2').stop().animate({top:94});
            }
        });
    });

    // 동그라미 동작
        $(window).on("scroll", function () { 
            // 현재 스크롤 위치를 가져옴 
            var scrollY = $(this).scrollTop();
            // 클래스명이 "bg-circle"인 요소를 선택
            var bgCircle = $(".bg-circle");
    
            // 스크롤 위치에 따라 "bg-circle" 요소의 상단 위치를 조정
            // 예를 들어, 스크롤 위치가 1000픽셀 내려가면 동그라미가 200픽셀 올라감
            var moveAmount = scrollY * 0.2; // 이동 비율 조정
            bgCircle.css("top", 1525 - moveAmount + "px");
        });


    
});
    
