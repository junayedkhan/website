
// responsive navmenu start //
const navBtn = document.getElementsByClassName("responsiveMenuIcon")
const Menu = document.getElementsByClassName("navMenu")
$(document).ready(() => {
    $(navBtn).click((event) => {
        event.preventDefault()
      $(Menu).fadeToggle("slow");
    });
  });
  // responsive navmenu end // 
// change color section start //
  var change = document.getElementsByClassName("changeIcon")
  var changeMenu = document.getElementsByClassName("changeMenu")
  $(change).click(() => {
    $(changeMenu).animate({width: 'toggle'}, "slow")
  })

  const colors = document.getElementsByClassName("colors")
  let i;
  for(i = 0; i<colors.length; i++){
    colors[i].addEventListener("click", changecolor)
  }
  function changecolor(){
    let color = this.getAttribute("data-color")
    document.documentElement.style.setProperty("--color", color)
  }
  // change color section end //
//

//
// chart start
$(document).ready(() => {
  $(window).on('load', ()=> {
		$(".loader .inner").fadeOut(600, ()=> {
			$(".loader").fadeOut(750)
		})
	})
  $('.owl-carousel').owlCarousel({
    loop:true,
    items:3,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
var skillsOffset = $('.skillsSection').offset().top;
$(window).scroll(()=> {
  if(window.pageYOffset > skillsOffset - $(window).height() + 200){
  
    $('.chart').easyPieChart({
              //your options goes here
              easing:'easeInOut',
              barColor: "#eb920c",
              trackColor:true,
              scaleColor:false,
              lineWidth:4,
              size:152,
              onStep:function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent))
              }
       });
  }
})

})
// chart end

// scroll to top start
$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});
// scroll to top end