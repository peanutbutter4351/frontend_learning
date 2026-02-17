import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-slate-900 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-slate-800 dark:text-white">
              Portfolio<span className="text-teal-500">.</span>
            </a>
            <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-md">
              Creating elegant digital experiences with modern technologies and clean code.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/ManjaLays"
              className="text-slate-600 hover:text-teal-500 dark:text-slate-400 dark:hover:text-teal-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/its-saanthanu-prasad/"
              className="text-slate-600 hover:text-teal-500 dark:text-slate-400 dark:hover:text-teal-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-teal-500 dark:text-slate-400 dark:hover:text-teal-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-teal-500 dark:text-slate-400 dark:hover:text-teal-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © {currentYear} ManjaLays. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-sm text-slate-600 hover:text-teal-500 dark:text-slate-400 dark:hover:text-teal-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-600 hover:text-teal-500 dark:text-slate-400 dark:hover:text-teal-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;