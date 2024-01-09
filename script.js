gsap.set('.box', { right: 30, opacity: 0 });

gsap.to('.box:nth-child(1)', {
    duration: 1.5,
    motionPath: {
        path: [{ right: 40, top: 100 }, { right: 700, top: 0 }]
    },
    stagger: 0.5,
    opacity: 1
});

gsap.to('.box:nth-child(2)', {
    duration: 1.5,
    motionPath: {
        path: [{ right: 40, top: 150 }, { right: 900, top: 20 }] 
    },
    stagger: 0.5,
    delay: 0.5,
    opacity: 1
});

gsap.to('.box:nth-child(3)', {
    duration: 1.5,
    motionPath: {
        path: [{ right: 40, top: 200 }, { right: 800, top: 40 }] 
    },
    stagger: 0.5,
    delay: 1,
    opacity: 1
});
gsap.to('.box:nth-child(4)', {
    duration: 1.5,
    motionPath: {
        path: [{ right:40, top: 250 }, { right: 700, top: 60 }] 
    },
    stagger: 0.5,
    delay: 1.5,
    opacity: 1
});
gsap.to('.box:nth-child(5)', {
    duration: 1.5,
    motionPath: {
        path: [{ right: 40, top: 350 }, { right: 600, top: 80 }] 
    },
    stagger: 0.5,
    delay: 2,
    opacity: 1
});
gsap.to('.box:nth-child(6)', {
    duration: 1.5,
    motionPath: {
        path: [{ right: 40, top: 400 }, { right: 500, top: 100 }] 
    },
    stagger: 0.5,
    delay: 2.5,
    opacity: 1
});
gsap.to('.box:nth-child(7)', {
    duration: 1.5,
    motionPath: {
        path: [{ right: 40, top: 450 }, { right: 400, top: 120 }] 
    },
    stagger: 0.5,
    delay: 3,
    opacity: 1
});
gsap.to('.box:nth-child(8)', {
    duration: 1.5,
    motionPath: {
        path: [{ right: 40, top: 500 }, { right: 300, top: 140 }] 
    },
    stagger: 0.5,
    delay: 3.5,
    opacity: 1
});


// Text
const myText = new SplitType('#my-text');

// Initial state
gsap.set('.char', { y: 115 });

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 2.5,
    duration: 0.1,
    visibility: 'visible', 
});

