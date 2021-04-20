let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.rock', 3, {y: -300})
    .to('.girl', 3, {y: -200}, '-=3')
    .to('.bg1', 3, {y: 50}, "-=3");