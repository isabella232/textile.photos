!function(){new WOW({boxClass:"anim",animateClass:"animated",offset:0,mobile:!0,live:!0}).init();var t=document.querySelectorAll(".how__slider__content__list__item__desktop"),s=document.querySelectorAll(".how__slider__content__dots__item"),e=document.querySelector(".how__slider__left"),n=document.querySelector(".how__slider__right"),i=0;e.addEventListener("click",function(){if(!(i<=0)){for(var e=0;e<t.length;e++)t[e].classList.remove("sbFadeRight","sbFadeLeft"),i===e&&t[e].classList.add("sbFadeRight");i-=1,setTimeout(function(){for(var e=0;e<t.length;e++)i===e?(t[e].classList.remove("hide"),s[e].classList.add("how__slider__content__dots__item--active")):(t[e].classList.add("hide"),s[e].classList.remove("how__slider__content__dots__item--active"))},500)}}),n.addEventListener("click",function(){if(!(i>=t.length-1)){for(var e=0;e<t.length;e++)t[e].classList.remove("sbFadeRight","sbFadeLeft"),i===e&&t[e].classList.add("sbFadeLeft");i+=1,setTimeout(function(){for(var e=0;e<t.length;e++)i===e?(t[e].classList.remove("hide"),s[e].classList.add("how__slider__content__dots__item--active")):(t[e].classList.add("hide"),s[e].classList.remove("how__slider__content__dots__item--active"))},500)}});var o=function(){var i=new XMLHttpRequest;i.open("GET","https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Ftextileio",!0),i.responseType="json",i.onload=function(){if(200===i.status){var e=i.response.items[0].title;60<e.length&&(e=e.substring(0,57)+"...");var t=document.createElement("span");t.innerHTML=i.response.items[0].description;var s=t.textContent||t.innerText;100<s.length&&(s=(s=s.substring(0,97)).substring(0,s.lastIndexOf(" "))+"...");var n=i.response.items[0].link;document.getElementsByClassName("blog__content__text__title")[0].innerHTML=e,document.getElementsByClassName("blog__content__text__content")[0].innerHTML=s,document.getElementsByClassName("blog__content__text__link")[0].href=n}},i.send()};loadedAnimationsList[0].addEventListener("DOMLoaded",function(){setTimeout(o,1)}),loadedAnimationsList[0].setSpeed=.5,loadedAnimationsList[0].setQuality="medium",loadedAnimationsList[0].play();var a=[0,150,300],_=[0,160,325],d=0,l=document.querySelector(".steps__content__list"),r=document.querySelectorAll(".steps__content__image__list__item"),c=document.querySelector(".steps__content__list__item--active"),m=function(e){1024<window.innerWidth?c.style.top=_[e]+"px":c.style.top=a[e]+"px";for(var t=0;t<r.length;t++)r[t].dataset.image!==e?(r[t].classList.add("hide"),loadedAnimationsList[t+1].pause()):(r[t].classList.remove("hide"),loadedAnimationsList[t+1].isPaused&&loadedAnimationsList[t+1].goToAndPlay(0))};l.addEventListener("mouseover",function(e){if(e.target.classList.contains("steps__content__list__item")){var t=e.target.dataset.step;m(t),d=t}});setInterval(function(){d<3?(m(String(d)),d++):d=0},4e3);new SmoothScroll('a[href*="#"]',{ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:function(e){},before:function(){},after:function(){}})}();