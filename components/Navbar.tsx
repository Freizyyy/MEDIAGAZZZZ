import React from 'react';
import { AppTab } from '../types';
import { Icons } from '../constants';

interface NavbarProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
}

export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`relative group/logo animate-logo-float ${className}`}>
    <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 animate-pulse-slow group-hover/logo:opacity-60 transition-opacity duration-700"></div>
    
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="relative drop-shadow-2xl transform group-hover/logo:scale-115 group-hover/logo:rotate-[8deg] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="10" y="10" width="80" height="80" rx="24" fill="url(#logoGrad)" filter="url(#shadow)" />
      <path d="M35 30V70H65" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" className="group-hover/logo:stroke-[12px] transition-all duration-500" />
      <circle cx="65" cy="50" r="15" stroke="white" strokeWidth="8" className="group-hover/logo:r-[16] transition-all duration-500" />
      <path d="M20 20L80 80" stroke="white" strokeWidth="2" strokeOpacity="0.2" />
    </svg>
  </div>
);

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: AppTab.ABOUT, label: 'О нас', icon: <Icons.Info /> },
    { id: AppTab.STAFF, label: 'Команда', icon: <Icons.Users /> },
    { id: AppTab.NEWS, label: 'События', icon: <Icons.News /> },
    { id: AppTab.FEEDBACK, label: 'Контакты', icon: <Icons.Mail /> },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] px-4 pt-4 sm:pt-6 pointer-events-none">
        <div className="max-w-7xl mx-auto glass rounded-[2rem] sm:rounded-[3rem] h-16 sm:h-24 px-6 sm:px-10 flex items-center justify-between shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] pointer-events-auto border border-white/50 backdrop-blur-3xl">
          <div 
            className="flex items-center space-x-3 sm:space-x-5 cursor-pointer group shrink-0" 
            onClick={() => setActiveTab(AppTab.ABOUT)}
          >
            <Logo className="w-10 h-10 sm:w-12 h-12" />
            <div className="flex flex-col hidden sm:flex">
              <span className="text-lg sm:text-2xl font-black text-gray-900 tracking-tighter leading-none group-hover:text-blue-600 transition-colors">Лицейское Обозрение</span>
              <span className="text-[9px] sm:text-[11px] font-black text-blue-500 uppercase tracking-[0.4em] mt-1 sm:mt-2 opacity-80">Официальный Медиа-Портал</span>
            </div>
          </div>

          <div className="flex items-center bg-gray-100/50 p-1 sm:p-2 rounded-[2rem] gap-1 sm:gap-2 border border-white shadow-inner overflow-x-auto no-scrollbar max-w-[60%] sm:max-w-none">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 sm:space-x-3 px-3 sm:px-6 py-2 sm:py-4 rounded-2xl transition-all duration-500 relative overflow-hidden group/btn shrink-0 ${
                  activeTab === item.id 
                    ? 'bg-white text-blue-600 shadow-xl shadow-blue-500/10 font-bold scale-[1.05]' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-white/70'
                }`}
              >
                <span className={`${activeTab === item.id ? 'scale-125 rotate-3' : 'group-hover/btn:scale-110'} transition-transform duration-300`}>
                  {item.icon}
                </span>
                <span className="text-[10px] sm:text-sm font-black tracking-tight uppercase hidden md:inline">{item.label}</span>
                {activeTab === item.id && (
                  <div className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full animate-in fade-in slide-in-from-left duration-700"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="lg:hidden fixed bottom-6 left-4 right-4 z-[100] h-16 glass rounded-2xl border border-white/40 shadow-2xl flex items-center justify-around px-2 pointer-events-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center space-y-1 w-full h-full rounded-xl transition-all duration-300 ${
              activeTab === item.id ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <div className={`transition-transform duration-300 ${activeTab === item.id ? 'scale-110' : ''}`}>
              {item.icon}
            </div>
            <span className={`text-[8px] font-bold uppercase tracking-wider transition-opacity ${activeTab === item.id ? 'opacity-100' : 'opacity-60'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;