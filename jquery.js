	var next_icon = "images/top/next_icon.png";
   	var down_icon = "images/top/down_icon.png";

$(function(){
 $('#side_categories').on('click', function(){
  $('.categories').stop().slideToggle();
  $('.categories').toggleClass("on");
  if($('.categories').hasClass("on")){
   $('#side_categories .right').attr('src',down_icon);
  }else{
   $('#side_categories .right').attr('src',next_icon);
  }
  return false;
 });
})

$(function(){
 $('#side_pagelink').on('click', function(){
  $('.pagelink').stop().slideToggle();
  $('.pagelink').toggleClass("on");
  if($('.pagelink').hasClass("on")){
   $('#side_pagelink .right').attr('src',down_icon);
  }else{
   $('#side_pagelink .right').attr('src',next_icon);
  }
  return false;
 });
})

$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});

$(document).ready(function(){
  $("#menu").click(function(){
    $(".sp_navi").slideToggle();
  });
});