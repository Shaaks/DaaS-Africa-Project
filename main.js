// let menu = document.querySelector('.menu');
// let hamburger = document.querySelector('.hamburger');

// hamburger.addEventListener('click', ()=>{
//     menu.classList.toggle('change');
//     hamburger.classList.toggle('open')
// })

let menu = document.querySelector('.menu');
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('change');
    hamburger.classList.toggle('open')
}) 





$(document).ready(function(){
    $('.projects').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:true,
      prevArrow :'#prev',
      nextArrow : '#next',
      autoplay:true,
      autoplaySpeed:2000,
    });
  });

  
 $(document).ready(function(){
  $('.title').slick({
    infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // arrows:true,
      // prevArrow :'#prev',
      // nextArrow : '#next',
      autoplay:true,
      autoplaySpeed:2000,
  });
});