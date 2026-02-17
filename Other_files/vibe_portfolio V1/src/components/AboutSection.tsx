import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      if (imageRef.current) {
        imageRef.current.classList.remove('opacity-0');
        imageRef.current.classList.add('opacity-100');
        imageRef.current.classList.remove('-translate-x-10');
        imageRef.current.classList.add('translate-x-0');
      }
      if (contentRef.current) {
        contentRef.current.classList.remove('opacity-0');
        contentRef.current.classList.add('opacity-100');
        contentRef.current.classList.remove('translate-x-10');
        contentRef.current.classList.add('translate-x-0');
      }
    }
  }, [isInView]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            About <span className="text-teal-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className="opacity-0 -translate-x-10 transition-all duration-1000 ease-out"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 opacity-20 blur"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="opacity-0 translate-x-10 transition-all duration-1000 ease-out delay-300"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Passionate Web Developer & Designer
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Hello! I'm Saanthanu, a dedicated web developer passionate about creating                    engaging digital experiences. I specialize in building modern, responsive                    websites and applications using technologies like HTML, CSS, JavaScript,                     Node.js, and MongoDB.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              My journey in web development began with a curiosity for how websites work, which led me to a Web Development Bootcamp by Dr. Angela Yu. Since then, I’ve built several full-stack projects that emphasize clean UI and strong backend logic, honing both my technical and creative skills.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring UI design inspiration, watching tech YouTube channels, or diving into new productivity tools. I believe these interests fuel the creativity and problem-solving mindset I bring to every project I work on.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-lg">
                <span className="text-teal-500 font-bold">10+</span>
                <p className="text-slate-600 dark:text-slate-300">Technologies Mastered</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-lg">
                <span className="text-teal-500 font-bold">300+</span>
                <p className="text-slate-600 dark:text-slate-300">Hours of Code</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-lg">
                <span className="text-teal-500 font-bold">3+</span>
                <p className="text-slate-600 dark:text-slate-300">Full-Length Courses Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;