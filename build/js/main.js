$(function(){
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
    $('.nav__level2').mouseleave(function() {
        $('.nav__level2').removeClass('open')
    })
    
    $('.nav__level1').on('touchend', function(){
       
        $('.nav__level2').removeClass('open')
        $(this).find('.nav__level2').addClass('open')
        return false;
        
        
        
    })
})