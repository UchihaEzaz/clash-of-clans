
var br=gsap.timeline()
br.from(".nav ",{
    y:-50,
    duration:1,
    opacity:0,
    stagger:0.3
})

br.from(".company h1",{
    y:50,
    duration:0.5,
    opacity:0
})
br.from(".company p",{
    y:-50,
    duration:0.5,
    opacity:0
})
br.from(".company button",{
    y:-50,
    duration:0.5,
    opacity:0
})




var menu=document.querySelector(".manu")
var nav_icon=document.querySelector(".nav i")
var menu_icon=document.querySelector(".manu i")

var tl=gsap.timeline()

tl.to(menu,{
    right:0,
    duration:0.5
})
tl.from(".manu h2",{
    y:-100,
    durtion:0.4,
    stagger:0.2,
    opacity:0
})
tl.from(".manu i",{
    x:50,
    durtion:0.4,
    stagger:0.2,
    opacity:0
})
tl.pause()
nav_icon.addEventListener("click",function(){
    tl.play()
})
menu_icon.addEventListener("click",function(){
    tl.reverse()
})

gsap.from(".character",{
    x:200,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:".page3 .character",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from(".character-con",{
    x:-200,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:".page3 .character",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from(".clashroyal",{
    x:200,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:".page4 .clashroyal",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from(".clashroyal-con",{
    x:-200,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:".page4 .clashroyal-con",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
        scrub:3,
    }
})
gsap.to(".scroller",{
    transform:"translateX(-84%)",
    duration:2,
    ease:"power1.out",
    scrollTrigger:{
        trigger:".page5",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})
gsap.to(".rush-img",{
    right:0,
    duration:1,
    opacity:0
})

gsap.to(".second2 img",{
    x:-800,
    duration:8,
    repeat:-1,
    yoyo:true,
})

gsap.from(".pekka-con",{
    x:50,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:".page6 .pekka-con",
        scroller:"body",
        start:"top 80%",
    }
})
gsap.from(".pekka-img",{
    x:-50,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".page6 .pekka-img",
        scroller:"body",
        start:"top 80%",
    }
})
gsap.from(".arcser-con",{
    x:-50,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:".page7 .arcser-con",
        scroller:"body",
        start:"top 80%",
    }
})
gsap.from(".arcser-img",{
    x:50,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".page7 .arcser-img",
        scroller:"body",
        start:"top 80%",
    }
})
gsap.from(".pekka-img img",{
    x:-50,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".page6 .pekka-img img",
        scroller:"body",
        start:"top 40%",
    }
})
gsap.from(".arcser-img img",{
    x:50,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".page7 .arcser-img img",
        scroller:"body",
        start:"top 45%",
    }
})

window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        gsap.to(".rollingtext",{
            transform:"translateX(-200%)",
            repeat:-1,
            duration:3,
            ease:"none",
        })
        gsap.to(".rollingtext img",{
            rotate:180
        })
    }else{
        gsap.to(".rollingtext",{
            transform:"translateX(0%)",
            repeat:-1,
            duration:3,
            ease:"none",
        })
        gsap.to(".rollingtext img",{
            rotate:0
        })
    }
})

var initialpath="M 10 140 Q 100 140 890 140"

var finalpath="M 10 140 Q 100 140 890 140"

var foot=document.querySelector(".footersvg")

foot.addEventListener("mousemove",function(dets){
    path =`M 10 140 Q 200 ${dets.y} 890 140`

    gsap.to(".curve path",{
        attr:{d:path},
        duration:0.3
    })
})
foot.addEventListener("mouseleave",function(){
    gsap.to(".curve path",{
        attr:{d:finalpath},
        duration:1,
        ease:"elastic.out"
    })
})

var me="M 10 60 Q 100 60 1240 60"

var my="M 10 60 Q 100 60 1240 60"
var myself=document.querySelector(".footernav-svg")

myself.addEventListener("mousemove",(dets)=>{
    path=`M 10 60 Q 100 ${dets.y} 1240 60`
    gsap.to(".curves path",{
        attr:{d:path},
        duration:0.1
    })
})
myself.addEventListener("mouseleave",()=>{
    gsap.to(".curves path",{
        attr:{d:my},
        duration:1.5,
        ease:"elastic.out"
    })
})