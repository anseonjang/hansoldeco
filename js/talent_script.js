$(function () {
    
    // 네비게이션
    $(".mainmenu>li").mouseenter(function(){
        $(this).find(".submenu").stop().fadeIn(300);
    });
    $(".mainmenu>li").mouseleave(function(){
        $(this).find(".submenu").stop().fadeOut(300);
    });
    

    // 이미지 효과
    function view(){
        const img = document.querySelectorAll('.mainImg');
      const winTop = document.documentElement.scrollTop;
      
      img.forEach((i) => {
          const imgTop = i.offsetTop-1000;
        
        if( imgTop <= winTop )
            i.classList.add('on')
      });
    }
    
    window.addEventListener('scroll', () => {
        view()
    })


 
});