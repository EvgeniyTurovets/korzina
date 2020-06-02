$(function(){
    if($(window).width() > 767){

        $('.header__menu-catalog').on('click', function(){
            $(this).toggleClass('open')
             $('.overlay').toggleClass('active')
         })

         $('.overlay').on('click', function(){
             $('.header__menu-catalog').toggleClass('open')
             $('.overlay').toggleClass('active')
            
         })
         
         $('.nav__level1').mouseenter(function(){
             $('.nav__level2').removeClass('open')
             $(this).find('.nav__level2').addClass('open')
         })

         $('.mail__left__level1').mouseenter(function(){
            $('.nav__level2').removeClass('open')
            $(this).find('.nav__level2').addClass('open')
            $('.overlay').addClass('active')
        })

        $('.mail__left__level1').mouseleave(function(){
            $('.nav__level2').removeClass('open')
            $('.overlay').removeClass('active')
        })

        $('.nav__level2').mouseleave(function() {
            $('.nav__level2').removeClass('open')
        })
         
        $('.nav__level1').on('touchend', function(){
            
            $('.nav__level2').removeClass('open')
            $(this).find('.nav__level2').addClass('open')
            return false;
     
        })
    }

    if($(window).width() <= 767){
       $('.menu-catalog__burger').click(function(){
        $('.header__mob').toggleClass('active')
        $('.mob__menu').slideToggle(200)
        $('.overlay').toggleClass('active')
       })
       $('.header__mob__phone').click(function(){
        $('.header__mob').toggleClass('active')
        $('.mob__menu').slideToggle(200)
        $('.overlay').toggleClass('active')
       })
    }


    $(".dropdown").click(function() {
        let menu = $(this).find('.dropdown__menu');
        if (menu) {
          menu.toggleClass("dropdown__menu--active");
        }
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".dropdown"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
            let menu = div.find('.dropdown__menu');
            if (menu) {
                menu.removeClass("dropdown__menu--active");
            }
		}
	});
    if($('.catalog').length){
        if($(window).width() < 992 ){
            $('.filter__wraper').append( $('.filter__select') );
        }
        $('.filter__toggle').on('click', function(){
            $('.filter__toggle').toggleClass('open')
            $('.filter').slideToggle()
            
        })
        $(window).resize(function(){
            if($(window).width() < 992 ){
                $('.filter__wraper').append( $('.filter__select') );
            }
            if($(window).width() > 991 ){
                $('.catalog__top').append( $('.filter__select') );
            }

        })
    }
    if($('.tovar').length){
        $('.tovar__photo__main').slick({
            fade: true,
            asNavFor: '.tovar__photo__nav'
        })
        $('.tovar__photo__nav').slick({
            asNavFor: '.tovar__photo__main',
            slidesToShow: 3,
            focusOnSelect: true
        })
       
    }
})