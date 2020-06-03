$(function(){
    if($(window).width() > 767){

        $('.header__menu-catalog').on('click', function(){
            $(this).toggleClass('open')
            $('.overlay').toggleClass('active')
            $('.main__menu').toggleClass('z-index-edit')
            $('.nav__level2').removeClass('open')
            $('.nav__level2').eq(0).addClass('open')
            $('.nav__level1').removeClass('grey-nav')
            $('.nav__level1').eq(0).addClass('grey-nav')
            
        })

        $('.overlay').on('click', function(){
            $('.header__menu-catalog').toggleClass('open')
            $('.overlay').toggleClass('active')
            $('.main__menu').removeClass('z-index-edit')
        })
         
         $('.nav__level1').mouseenter(function(){
            $('.nav__level1').removeClass('grey-nav')
            $(this).addClass('grey-nav')
            $('.nav__level2').removeClass('open')
            $(this).find('.nav__level2').addClass('open')
         })

         $('.mail__left__level1').mouseenter(function(){
            $('.mail__left__level1').removeClass('grey-nav')
            $(this).addClass('grey-nav')
            $('.nav__level2').removeClass('open')
            $(this).find('.nav__level2').addClass('open')
            $('.overlay').addClass('active')
        })

        $('.mail__left__level1').mouseleave(function(){
            $('.mail__left__level1').removeClass('grey-nav')
            $('.nav__level2').removeClass('open')
            $('.overlay').removeClass('active')
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
        if($(window).width() < 768){
            $('.footer').css('padding-bottom', '100px')
        }
        if($('.nocoment').length){
            $('.tovar__coment').css('min-height', '200px')
        }
        $('.tovar__photo__main').slick({
            fade: true,
            asNavFor: '.tovar__photo__nav',
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    fade: false,
                    infinite: true,
                    dots: true
                  }
                },
            ]
        })
        $('.tovar__photo__nav').slick({
            asNavFor: '.tovar__photo__main',
            slidesToShow: 3,
            focusOnSelect: true
        })
       
    }
    $('.about span').click(function(){
        $(this).closest('.about').toggleClass('open')
        $(this).closest('.about').find('.about__wrap').slideToggle(300)
    })
    $('#addcoment').click(function(){
        $('.cooment__view').fadeOut(300)
        
        setTimeout(function(){$('.comment__add').fadeIn(300)},300)
    })
    $('#viewcoment').click(function(){
        $('.comment__add').fadeOut(300)
        
        setTimeout(function(){$('.cooment__view').fadeIn(300)},300)
    })
    $('.rating-area label').eq(0).click(function(){
        $('.star__num span').eq(0).text('5')
    })
    $('.rating-area label').eq(1).click(function(){
        $('.star__num span').eq(0).text('4')
    })
    $('.rating-area label').eq(2).click(function(){
        $('.star__num span').eq(0).text('3')
    })
    $('.rating-area label').eq(3).click(function(){
        $('.star__num span').eq(0).text('2')
    })
    $('.rating-area label').eq(4).click(function(){
        $('.star__num span').eq(0).text('1')
    })

    $('.tovar__info .more-content').click(function(){
        $(this).toggleClass('grey-more')
        $('.info__more').slideToggle()
    })
    $('.cooment__view .more-content').click(function(){
        $(this).toggleClass('grey-more')
        $('.comment__more').slideToggle()
    })
})