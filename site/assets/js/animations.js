const timeline1 = gsap.timeline();
    timeline1.to('.logo-link', {duration: 0, y: '-100%'})
    timeline1.to('.logo-link', {duration: .8, y: '50%', ease: 'back'})
    timeline1.to('.logo-link', {duration: 1, ease: 'circ', onComplete: () => showContent()})
    timeline1.fromTo('body', {delay: 3, duration: 5, ease: 'circ', backgroundPosition: '0 0'}, {duration: 5, ease:'power3', backgroundPosition: '0 -200px'})
const timeline2 = gsap.timeline({paused: true});
    timeline2.to('.logo-link', {duration: .5, ease: 'back', y: '0%'})
    timeline2.to('.container .bg-blue', {duration: .8, ease:'circ', borderRadius: '5px'})
    timeline2.to('.container', {duration: 2, ease:'circ', borderRadius: '5px', })
const timeline3 = gsap.timeline({paused: true});
    timeline3.fromTo('.container', {duration: .3, zoom: .5, }, {duration: .3, ease:'back', zoom: 1, })
    
function showContent() {
    const container = document.querySelector('.container');
    timeline2.resume();
    container.style.visibility = 'visible';
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.pointerEvents = 'all';
        timeline3.resume();
    }, 200);
}

function guides() {
    const guidesContent = document.querySelectorAll('.container .guide-content');
    const guidesTabs = document.querySelectorAll('.container .tabs .guide')

    guidesTabs.forEach((e, i) => {
        e.onclick = function() {
            const fidx = e.dataset.content - 1;
            guidesContent.forEach((el, id) => {
                if(id == fidx) {
                    el.style.display = 'block';
                } else {
                    el.style.display = 'none';
                }
            });
        }
    });
    // console.log(guidesContent)
    // console.log(guidesTabs)
}guides();

function startGame() {
    window.location.reload();
}