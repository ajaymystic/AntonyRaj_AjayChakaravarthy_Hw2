gsap.registerPlugin(ScrollTrigger);

function initHeroAnimation() {
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTimeline
        .from('.hero-badge', { y: -20, opacity: 0, duration: 0.5 })
        .from('.hero-title', { y: 40, opacity: 0, duration: 0.7 }, '-=0.2')
        .from('.hero-sub', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4');
}

function initScrollAnimations() {
    const docSections= document.querySelectorAll('.doc-section');

    docSections.forEach(function revealSection(section) {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 82%',
                toggleActions: 'play none none none',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
        });
    });

    gsap.from('.demo-card', {
        scrollTrigger: {
            trigger: '#demo',
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power2.out',
    });
}

initHeroAnimation();
initScrollAnimations();