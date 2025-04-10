// hooks/useScrollAnimations.tsx
'use client'
import { useEffect } from 'react';

const useScrollAnimations = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section-profile');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);
};

export default useScrollAnimations;
