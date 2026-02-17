import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Code, PenTool, Server, Database, Globe, BarChart3 } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const frontendSkills: Skill[] = [
  { name: 'HTML & CSS', level: 90, icon: <Globe className="w-6 h-6" /> },
  { name: 'JavaScript', level: 85, icon: <Code className="w-6 h-6" /> },
  { name: 'React', level: 80, icon: <Code className="w-6 h-6" /> },
  { name: 'UI/UX Design', level: 75, icon: <PenTool className="w-6 h-6" /> },
];

const backendSkills: Skill[] = [
  { name: 'Node.js', level: 80, icon: <Server className="w-6 h-6" /> },
  { name: 'Python', level: 70, icon: <Code className="w-6 h-6" /> },
  { name: 'SQL', level: 75, icon: <Database className="w-6 h-6" /> },
  { name: 'Data Analysis', level: 65, icon: <BarChart3 className="w-6 h-6" /> },
];

const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(barRef, { threshold: 0.3 });
  
  return (
    <div ref={barRef} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-teal-500">{skill.icon}</span>
          <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
        </div>
        <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isInView ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-slate-50 dark:bg-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            My <span className="text-teal-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I've acquired a diverse range of skills throughout my career. Here's a snapshot
            of my technical expertise and proficiency levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
              <Code className="mr-2 text-teal-500" /> Frontend Development
            </h3>
            <div>
              {frontendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 200} />
              ))}
            </div>
          </div>
          
          <div className={`bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
              <Server className="mr-2 text-teal-500" /> Backend Development
            </h3>
            <div>
              {backendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 200} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;