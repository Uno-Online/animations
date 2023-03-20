const timeline1 = gsap.timeline();
    timeline1.to('.logo', {duration: 0, y: '-100%'})
    timeline1.to('.logo', {duration: .8, y: '50%', ease: 'back'})
    timeline1.to('.logo', {duration: 1, ease: 'circ', onComplete: () => showContent()})
const timeline2 = gsap.timeline({paused: true});
    timeline2.to('.logo', {duration: .5, ease: 'back', y: '0%'})
    timeline2.to('.container .bg-blue', {duration: .8, ease:'circ', borderRadius: '5px'})
    timeline2.to('.container', {duration: 2, ease:'circ', borderRadius: '5px', })

function showContent() {
    const container = document.querySelector('.container');
    timeline2.resume();
    container.style.visibility = 'visible';
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.pointerEvents = 'all';
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