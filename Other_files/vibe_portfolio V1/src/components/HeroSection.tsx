import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const fadeIn = (el: HTMLElement, delay: number) => {
      setTimeout(() => {
        el.classList.remove('opacity-0');
        el.classList.add('opacity-100');
        el.classList.remove('translate-y-10');
        el.classList.add('translate-y-0');
      }, delay);
    };
    
    if (titleRef.current) fadeIn(titleRef.current, 300);
    if (subtitleRef.current) fadeIn(subtitleRef.current, 600);
    if (ctaRef.current) fadeIn(ctaRef.current, 900);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30 dark:opacity-20">
          {/* Background grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 
            ref={titleRef} 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          >
            Hi, I'm <span className="text-teal-500">Saanthanu</span>
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300"
          >
            I build modern web experiences that blend clean design with robust, efficient code.
          </p>
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-500"
          >
            <a 
              href="#projects"
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 font-medium py-3 px-8 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors shadow hover:shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-slate-400 hover:text-teal-500 transition-colors">
          <ArrowDownCircle size={36} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;