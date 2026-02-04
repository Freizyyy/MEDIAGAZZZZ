import React, { useState, useEffect, useRef } from 'react';
import Navbar, { Logo } from './components/Navbar';
import NewsFeed from './components/NewsFeed';
import StaffSection from './components/StaffSection';
import AboutSection from './components/AboutSection';
import FeedbackSection from './components/FeedbackSection';
import { AppTab } from './types';

const FooterLogo = () => (
  <div className="w-16 h-16">
    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100" height="100" rx="28" fill="white" fillOpacity="0.05" />
      <path d="M35 30V70H65" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="65" cy="50" r="15" stroke="white" strokeWidth="8" />
    </svg>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.ABOUT);
  const currentYear = new Date().getFullYear();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      isFirstRender.current = false;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.ABOUT:
        return (
          <div key="about" className="pt-28 sm:pt-52 pb-12 sm:pb-20">
            <div className="max-w-4xl mx-auto px-6 text-center mb-16 sm:mb-24">
              <h1 className="text-4xl sm:text-7xl md:text-8xl font-black text-gray-900 tracking-tighter leading-none font-heading animate-wow delay-100">
                Твоя история<br/>
                <span className="text-blue-600">начинается здесь</span>
              </h1>
              <p className="text-gray-500 mt-6 sm:mt-10 text-lg sm:text-2xl md:text-3xl font-medium max-w-2xl mx-auto opacity-95 tracking-tighter leading-tight px-4 animate-wow delay-300">
                Узнай больше о миссии нашего издания и людях, которые делают лицей ярче каждый день.
              </p>
            </div>
            <div className="animate-wow delay-500">
              <AboutSection />
            </div>
          </div>
        );
      case AppTab.STAFF:
        return (
          <div key="staff">
             <div className="max-w-4xl mx-auto px-6 pt-28 sm:pt-52 text-center mb-16 sm:mb-28">
                <div className="inline-block bg-indigo-50 text-indigo-700 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] px-6 sm:px-10 py-3 sm:py-4 rounded-full mb-8 sm:mb-14 border border-indigo-100 shadow-sm animate-scale-in">
                  ЛИЦА ПОРТАЛА
                </div>
                <h1 className="text-4xl sm:text-7xl md:text-9xl font-black text-gray-900 tracking-tighter leading-none font-heading animate-stagger-reveal delay-100">Команда Мечты</h1>
                <p className="text-gray-500 mt-6 sm:mt-10 text-lg sm:text-2xl md:text-4xl font-medium max-w-3xl mx-auto opacity-95 tracking-tighter leading-tight px-4 animate-stagger-reveal delay-300">Те, кто круглосуточно работает над созданием самого актуального контента для тебя.</p>
            </div>
            <div className="animate-wow delay-500">
              <StaffSection />
            </div>
          </div>
        );
      case AppTab.NEWS:
        return (
          <div key="news">
            <div className="max-w-4xl mx-auto px-6 pt-28 sm:pt-52 pb-12 sm:pb-20 text-center">
                <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-blue-50 text-blue-600 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] px-6 sm:px-10 py-3 sm:py-4 rounded-full mb-8 sm:mb-14 border border-blue-100 shadow-[0_10px_30px_rgba(37,99,235,0.1)] animate-scale-in">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-600 rounded-full animate-ping"></span>
                  <span>В ЦЕНТРЕ СОБЫТИЙ</span>
                </div>
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] font-black text-gray-900 tracking-tighter leading-[0.8] sm:leading-[0.75] font-heading mb-10 sm:mb-16 animate-text-reveal delay-100">
                  Лицейское<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 italic px-2 sm:px-6 drop-shadow-2xl">Обозрение</span>
                </h1>
                <p className="text-gray-500 text-lg sm:text-2xl md:text-4xl font-medium max-w-2xl mx-auto leading-tight opacity-95 tracking-tighter px-4 animate-text-reveal delay-300">
                  Главный голос твоего успеха. Читай о людях, событиях и будущем нашего лицея.
                </p>
            </div>
            <div className="animate-wow delay-500">
              <NewsFeed />
            </div>
          </div>
        );
      case AppTab.FEEDBACK:
        return (
          <div key="feedback" className="pt-28 sm:pt-52 pb-12 sm:pb-20">
            <div className="max-w-4xl mx-auto px-6 text-center mb-16 sm:mb-24">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 tracking-tighter leading-tight font-heading animate-scale-in delay-100">
                Есть идея?<br/>
                <span className="text-indigo-600 italic">Напиши нам!</span>
              </h1>
            </div>
            <div className="animate-wow delay-400">
              <FeedbackSection />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-600 selection:text-white pb-24 lg:pb-0">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1">
        {renderContent()}
      </main>

      <footer className="relative bg-[#08090b] text-white pt-24 sm:pt-56 pb-32 sm:pb-24 mt-20 sm:mt-48 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/10 blur-[200px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/5 blur-[180px] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
          <div className="grid lg:grid-cols-4 gap-16 lg:gap-32 pb-24 sm:pb-40">
            <div className="col-span-1 lg:col-span-2 space-y-10 sm:space-y-14">
              <div className="flex items-center space-x-4 sm:space-x-8 group cursor-pointer" onClick={() => setActiveTab(AppTab.ABOUT)}>
                <FooterLogo />
                <div>
                  <span className="font-black text-3xl sm:text-5xl tracking-tighter leading-none block">Лицейское</span>
                  <span className="font-black text-3xl sm:text-5xl tracking-tighter leading-none text-blue-500 block">Обозрение</span>
                </div>
              </div>
              <p className="text-gray-400 text-lg sm:text-2xl leading-relaxed max-w-md font-medium tracking-tighter opacity-80">
                Независимое цифровое издание Лицея. Рассказываем историю нашего пути, побед и идей с 2020 года.
              </p>
              <div className="flex space-x-6 sm:space-x-10">
                <a href="https://vk.com/lyceumreview" target="_blank" className="w-14 h-14 sm:w-18 sm:h-18 bg-white/5 border border-white/10 rounded-2xl sm:rounded-[1.5rem] flex items-center justify-center hover:bg-blue-600 transition-all duration-500">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M15.011 20c-7.359 0-11.567-5.051-11.742-13.442h3.702c.123 6.16 2.836 8.765 4.986 9.303v-9.303h3.483v5.312c2.131-.228 4.387-2.653 5.145-5.312h3.483c-.561 3.284-3.374 5.709-5.382 6.88 2.008 1.09 5.253 3.195 6.36 6.562h-3.834c-.86-2.684-2.992-4.759-5.757-5.035v5.035h-.645z"/></svg>
                </a>
              </div>
            </div>

            <div className="space-y-10 sm:space-y-14">
              <h4 className="font-black text-[12px] sm:text-[14px] text-gray-500 uppercase tracking-[0.4em] sm:tracking-[0.6em]">КОНТАКТЫ</h4>
              <ul className="space-y-8 sm:space-y-12 text-gray-300 font-bold">
                <li className="flex items-start space-x-6 sm:space-x-8 group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/10 shrink-0">📧</div>
                  <div className="space-y-1 sm:space-y-2 overflow-hidden">
                    <span className="text-[9px] sm:text-[11px] text-gray-500 uppercase block tracking-widest font-black">Арина Малышева</span>
                    <a href="mailto:malyschewa.arina@gmail.com" className="hover:text-blue-400 transition-colors tracking-tighter text-sm sm:text-lg block truncate">malyschewa.arina@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start space-x-6 sm:space-x-8 group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/10 shrink-0">📧</div>
                  <div className="space-y-1 sm:space-y-2 overflow-hidden">
                    <span className="text-[9px] sm:text-[11px] text-gray-500 uppercase block tracking-widest font-black">Ульяна Мананкова</span>
                    <a href="mailto:ulya.m.m@mail.ru" className="hover:text-blue-400 transition-colors tracking-tighter text-sm sm:text-lg block truncate">ulya.m.m@mail.ru</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-10 sm:space-y-14">
              <h4 className="font-black text-[12px] sm:text-[14px] text-gray-500 uppercase tracking-[0.4em] sm:tracking-[0.6em]">РЕДАКЦИЯ</h4>
              <ul className="space-y-6 sm:space-y-8 text-gray-300 font-bold">
                <li><button onClick={() => setActiveTab(AppTab.ABOUT)} className="hover:text-blue-500 transition-all flex items-center space-x-4 sm:space-x-5 group text-lg sm:text-xl">
                  <span className="w-6 sm:w-8 h-[2px] sm:h-[3px] bg-gray-700 group-hover:w-10 sm:group-hover:w-14 group-hover:bg-blue-600 transition-all"></span>
                  <span>О проекте</span>
                </button></li>
                <li><button onClick={() => setActiveTab(AppTab.STAFF)} className="hover:text-blue-500 transition-all flex items-center space-x-4 sm:space-x-5 group text-lg sm:text-xl">
                  <span className="w-6 sm:w-8 h-[2px] sm:h-[3px] bg-gray-700 group-hover:w-10 sm:group-hover:w-14 group-hover:bg-blue-600 transition-all"></span>
                  <span>Команда</span>
                </button></li>
                <li><button onClick={() => setActiveTab(AppTab.NEWS)} className="hover:text-blue-500 transition-all flex items-center space-x-4 sm:space-x-5 group text-lg sm:text-xl">
                  <span className="w-6 sm:w-8 h-[2px] sm:h-[3px] bg-gray-700 group-hover:w-10 sm:group-hover:w-14 group-hover:bg-blue-600 transition-all"></span>
                  <span>События</span>
                </button></li>
                <li><button onClick={() => setActiveTab(AppTab.FEEDBACK)} className="hover:text-blue-500 transition-all flex items-center space-x-4 sm:space-x-5 group text-lg sm:text-xl">
                  <span className="w-6 sm:w-8 h-[2px] sm:h-[3px] bg-gray-700 group-hover:w-10 sm:group-hover:w-14 group-hover:bg-blue-600 transition-all"></span>
                  <span>Контакты</span>
                </button></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 sm:pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left pb-10 lg:pb-0">
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <span className="text-gray-600 font-black text-[10px] sm:text-[12px] uppercase tracking-[0.3em] sm:tracking-[0.5em] italic">POWERED BY LYCEUM PRESS CENTER DIGITAL TEAM</span>
              <p className="text-gray-500 text-[10px] sm:text-[12px] font-black uppercase tracking-[0.5em] sm:tracking-[0.7em]">
                © {currentYear} ЛИЦЕЙСКОЕ ОБОЗРЕНИЕ
              </p>
            </div>
            <div className="flex space-x-8 sm:space-x-16 text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-gray-700">
               <a href="#" className="hover:text-gray-400 transition-all">Конфиденциальность</a>
               <a href="#" className="hover:text-gray-400 transition-all">Правовая информация</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;