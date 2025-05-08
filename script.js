//to used for initala to final position
gsap.to("#box1",{
    //x axis animation
    x: 400,
    //duration of the animation
    duration: 2, //2 seconds
    delay: 1, //2 seconds delay before the animation starts
    //animation will be in a circular path
    rotate:30, //rotate the box 30 degrees
    backgroundColor: "blue", //change the background color to red
    borderRadius:"50%",
    scale:1.5,
    repeat:-1, //repeat the animation indefinitely
    yoyo:true,
})
//from used for final to initial position
gsap.from("#box2",{
    //y axis animation
    x: 400,
    //duration of the animation
    duration: 2, //2 seconds
    delay: 2, //2 seconds delay before the animation starts
    //animation will be in a circular path
})
gsap.to("#box3",{
    //x axis animation
    x: 400,
    //duration of the animation
    duration: 2, //2 seconds
    delay: 3, //2 seconds delay before the animation starts
    //animation will be in a circular path
})

gsap.from("h1",{
    color: "#1f1f1f",
    duration: 1, //2 seconds
    delay: 1, //2 seconds delay before the animation starts
    y: 30,
    stagger:0.3,
    
})