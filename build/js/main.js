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


   //корзина

    $(".tel").mask("+38(999) 999-9999");
    

    //select
    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
            }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
    }

    function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
        arrNo.push(i)
        } else {
        y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
        }
    }
    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    document.addEventListener("click", closeAllSelect);
    
    
    //step
    $('.nextstep').click(function(){
        let mainPhone = $('.step1 .tel').val()
        let fio = $('.step1 .fio').val()
        let email = $('.step1 .email').val()
        if(mainPhone.length == 0){
            $('.step1 .tel').addClass('error')
        }else{
            $('.step1 .tel').removeClass('error')
        }
        if(fio.length == 0){
            $('.step1 .fio').addClass('error')
        }else{
            $('.step1 .fio').removeClass('error')
        }
        if(mainPhone.length != 0 && fio.length != 0){
            $('.step__edit__fio').html(fio + ",")
            $('.step__edit__telephone').html(mainPhone + ",")
            if(email.length != 0){
                $('.step__edit__email').html(email)
            }

            $('.korzina').addClass('step-two')
            $('.step1 .step__wrap').slideUp()
            $('.step__edit').slideDown()
            $('.step2 .step__wrap').slideDown()
        }
        
    })
    $('.edit__btn').click(function(){
        $('.korzina').removeClass('step-two')
        $('.step1 .step__wrap').slideDown()
        $('.step__edit').slideUp()
        $('.step2 .step__wrap').slideUp()
    })
    $('.korzina__submite').click(function(){
        let mainPhone = $('.step1 .tel').val()
        let fio = $('.step1 .fio').val()
        if(mainPhone.length == 0){
            $('.step1 .tel').addClass('error')
            return false
        }else{
            $('.step1 .tel').removeClass('error')
        }
        if(fio.length == 0){
            $('.step1 .fio').addClass('error')
            return false
        }else{
            $('.step1 .fio').removeClass('error')
        }
    })
    
    $('.header__corzina__mob').click(function(){
       $('.mob-corzina').slideToggle()
    })
    
})