$(document).ready(function(){
    $('.gnb>ul>li').mouseover(function(){
        $(this).css({'backgroundColor':'green'})
        $(this).css({'color':'white'})
        $('.sub').stop().animate({opacity:"1"},500)
    })
    $('.gnb>ul>li').mouseout(function(){
        $(this).css({'backgroundColor':'white'})
        $(this).css({'color':'#333333'})
        $('.sub').stop().animate({opacity:"1"},500)
    })
    $('.gnb').mouseout(function(){
        $('.sub').stop().animate({opacity:"0"},500)
    })
    $('.sub>li').mouseover(function(){
        $(this).css({'backgroundColor':'green'})
        $(this).css({'color':'white'})
    })
    $('.sub>li').mouseout(function(){
        $(this).css({'backgroundColor':'white'})
        $(this).css({'color':'#333333'})
    })
    $('.close').click(function(){
        $('.popup').css({'display':'none'}); 
    })




})
