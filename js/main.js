$(document).ready(function () {
   $('.header-burger').click(function (event) {
       $('.burger-line').toggleClass('active');
       $('.nav').toggleClass('open');
       $('body').toggleClass('lock')
   });
});