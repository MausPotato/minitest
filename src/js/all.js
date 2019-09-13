import jQuery from 'jquery';

jQuery(document).ready(function($) {
  $('.hide').hide();
  let time = 400;
  // topmenu btn切換
  $('#topmenu button').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
    $('.popmenu').slideUp(time / 4);
    let targetId = e.target.id.replace('btn', 'pop');
    if (targetId) {
      $('#' + targetId).stop(true).slideToggle(time / 2);
      $('#disableclick').fadeToggle(time / 4);
    }
  })

  // rwd 關閉destpop
  $('.title button').click(function() {
    $('.popmenu').fadeOut(time / 2);
    $('#disableclick').fadeOut(time / 2);
  })

  // destmenu切換
  $('#destmenu li').click(function() {
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
  })

  //destlist切換
  $('#destmenu li').click(function(e) {
    $('#destlist form').hide();
    $('.' + e.currentTarget.id).show();
  })

  //location btn選擇
  $('.location button').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  })

  //resetbtn
  $('.resetbtn').click(function(e) {
    e.preventDefault();
    $('.location button').removeClass('active');
  })
});