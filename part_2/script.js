gsap.from("#page1 #box",{
    duration: 2,
    scale: 0.5,
    rotation: 360,
   
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
        
    }
    
} )
gsap.from("#page1 h1",{
    duration: 2,
    rotation: -360,
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 20%",
        
    }
} )
gsap.from("#page2 h1",{
    duration: 2,
    
    rotation: -360,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 20%",
        
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
        
    }
} )