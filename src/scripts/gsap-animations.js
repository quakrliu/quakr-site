import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  initAnimations();
}

function initAnimations() {
  // --- Hero: sequential text reveal ---
  const heroText = document.querySelector('.hp-hero-text');
  if (heroText) {
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .from('.hp-hero-tag', { opacity: 0, y: 20, duration: 0.5 })
      .from('.hp-hero-text h1', { opacity: 0, y: 40, duration: 0.8 }, '-=0.2')
      .from('.hp-hero-desc', { opacity: 0, y: 30, duration: 0.6 }, '-=0.4')
      .from('.hp-hero-milestone', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
      .from('.hp-hero-actions', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
      .from('.hp-hero-aside', { opacity: 0, x: 40, duration: 0.7 }, '-=0.6');
  }

  // --- Hero proof numbers: counter animation ---
  document.querySelectorAll('.hp-proof-number').forEach((el) => {
    const target = parseInt(el.textContent, 10);
    if (!isNaN(target) && target > 0) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.5,
        delay: 0.8,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = Math.round(obj.val).toString();
        },
      });
    }
  });

  // --- Tools cards: stagger from bottom ---
  const toolsSection = document.querySelector('.hp-tools');
  if (toolsSection) {
    gsap.utils.toArray('.hp-tool-card').forEach((card, i) => {
      gsap.set(card, { opacity: 0, y: 50 });
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: toolsSection,
          start: 'top 80%',
          once: true,
        },
      });
    });
  }

  // --- Start Here: columns slide from left/right ---
  gsap.utils.toArray('.start-here-column').forEach((col, i) => {
    const fromX = i === 0 ? -60 : 60;
    gsap.set(col, { opacity: 0, x: fromX });
    gsap.to(col, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: col,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // --- Start Here cards: stagger ---
  gsap.utils.toArray('.start-here-card').forEach((card) => {
    gsap.set(card, { opacity: 0, y: 25 });
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        once: true,
      },
    });
  });

  // --- Progress steps: stagger ---
  gsap.utils.toArray('.progress-step').forEach((step, i) => {
    gsap.set(step, { opacity: 0, scale: 0.8 });
    gsap.to(step, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      delay: i * 0.15,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.start-here-progress',
        start: 'top 88%',
        once: true,
      },
    });
  });

  // --- Daily Pulse cards: stagger from bottom ---
  const dpSection = document.querySelector('.dp-section');
  if (dpSection) {
    gsap.utils.toArray('.dp-card').forEach((card, i) => {
      gsap.set(card, { opacity: 0, y: 40 });
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: dpSection,
          start: 'top 80%',
          once: true,
        },
      });
    });
  }

  // --- Featured card: fade up ---
  const featuredCard = document.querySelector('.hp-featured-card');
  if (featuredCard) {
    gsap.set(featuredCard, { opacity: 0, y: 35 });
    gsap.to(featuredCard, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: featuredCard,
        start: 'top 85%',
        once: true,
      },
    });
  }

  // --- Article grid cards: stagger ---
  gsap.utils.toArray('.hp-card').forEach((card) => {
    gsap.set(card, { opacity: 0, y: 30 });
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 92%',
        once: true,
      },
    });
  });

  // --- Section headers: slide up ---
  gsap.utils.toArray('.hp-section-header').forEach((header) => {
    gsap.set(header, { opacity: 0, y: 25 });
    gsap.to(header, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: header,
        start: 'top 88%',
        once: true,
      },
    });
  });

  // --- Category filter: fade in ---
  const catFilter = document.querySelector('.category-filter');
  if (catFilter) {
    gsap.set(catFilter, { opacity: 0, y: 15 });
    gsap.to(catFilter, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: catFilter,
        start: 'top 92%',
        once: true,
      },
    });
  }

  // --- Email CTA: scale up ---
  const emailCta = document.querySelector('.hp-email');
  if (emailCta) {
    gsap.set(emailCta, { opacity: 0, scale: 0.96 });
    gsap.to(emailCta, {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: emailCta,
        start: 'top 85%',
        once: true,
      },
    });
  }
}
