!function(){for(var e,t=/[?&]([^=#]+)=([^&#]*)/g,n=window.location.href,o={};e=t.exec(n);)o[e[1]]=e[2];"from"in o&&(document.getElementsByClassName("invite-username")[0].innerText=o.from),"referral"in o&&(document.getElementsByClassName("invite-code")[0].innerText=o.referral),"internal"in o&&(document.getElementsByClassName("invite-type")[0].innerText=" added you to the list"),new WOW({boxClass:"anim",animateClass:"animated",offset:0,mobile:!0,live:!0}).init();var i=[{node:document.querySelector(".steps__content__image__list__item--1"),path:"/statics/bodymovin/step1/data.json"},{node:document.querySelector(".steps__content__image__list__item--2"),path:"/statics/bodymovin/step2/data.json"},{node:document.querySelector(".steps__content__image__list__item--3"),path:"/statics/bodymovin/step3/data.json"}];window.loadedAnimationsList=[],i.forEach(function(e){window.loadedAnimationsList.push(bodymovin.loadAnimation({container:e.node,renderer:"svg",loop:e.loop||!1,autoplay:!1,path:e.path}))}),loadedAnimationsList[0].setSpeed=.5,loadedAnimationsList[0].setQuality="medium",loadedAnimationsList[0].play();var a=[0,150,300],s=[0,160,325],d=0,l=(document.querySelector(".steps__content__list"),document.querySelectorAll(".steps__content__image__list__item")),r=document.querySelector(".steps__content__list__item--active");setInterval(function(){d<3?(!function(e){1024<window.innerWidth?r.style.top=s[e]+"px":r.style.top=a[e]+"px";for(var t=0;t<l.length;t++){var n=t+1<l.length?t+1:0;l[t].dataset.image!==e?(l[t].classList.add("hide"),loadedAnimationsList[n].pause()):(l[t].classList.remove("hide"),loadedAnimationsList[t].goToAndPlay(0))}}(String(d)),d++):d=0},4e3);new SmoothScroll('a[href*="#"]',{ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:function(e){},before:function(){},after:function(){}})}();