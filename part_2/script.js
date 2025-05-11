gsap.from("#page1 #box",{
    duration: 2,
    scale: 0.5,
    rotation: 360,
    scrub: 1,
   
} )
gsap.from("#page2 #box",{
    duration: 2,
    scale: 0.5,
    rotation: 360,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        
    }
} )
gsap.from("#page3 #box",{
    duration: 2,
    scale: 0.5,
    rotation: 360,
    scrollTrigger: {
        trigger: "#page3 #box",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        
    }
    
} )
gsap.from("#page1 h1",{
    duration: 2,
    rotation: -360,
   
} )
gsap.to("#page2 #scroll",{
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page2 #scroll",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        pin: true,
        scrub: 1,
    }
} )
gsap.from("#page3 h1",{
    duration: 2,
    
    rotation: -360,
    scrollTrigger: {
        trigger: "#page3 h1",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
    }
} )