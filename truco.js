
window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
          for(var i = 0; i < elements.length; i++) {
          var element = elements[i];
  
          if(element.getBoundingClientRect().top < screenSize) {
            element.classList.add('visible');
          } else {
            element.classList.remove('visible');
          }
  
        }
  });
  $(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});

});