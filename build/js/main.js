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
       $('.menu-catalog__burger').on('touchend', function(){
        $('.header__mob').toggleClass('active')
        $('.mob__menu').slideToggle(200)
        $('.overlay').toggleClass('active')
       })
       $('.header__mob__phone').on('touchend', function(){
        $('.header__mob').toggleClass('active')
        $('.mob__menu').slideToggle(200)
        $('.overlay').toggleClass('active')
       })
    }
})