let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline //setting timeline -> how elements should behave
    .to('.rock', 3, {
        y: -300
    })
    .to('.girl', 3, {
        y: -200,
    }, '-=3')
    .fromTo('.bg1', 3, {
        y: -50
    }, {
        y: 0
    }, "-=3")
    .to('.content', 3, {
        top: '0%'
    }, "-=3")
    .fromTo(".content-images", 10, {
        opacity:0,
        scale: 0.1
    }, {
        opacity:1,
        scale: 1,
    })
    .fromTo(".text", {
        x: -1600,
        opacity:0,
    }, {
        x: 0,
        opacity:1,
        duration: 3
    }, "-=3");

let scene = new ScrollMagic.Scene({
        triggerElement: 'section', //trigger scene when reach section
        duration: '100%', //duration 
        triggerHook: 0, //when to trigger scene (0 -> instanst on scrolling, 1 -> when we reach end of the section)
    })
    .setTween(timeline)
    .setPin("section")
    .addTo(controller);