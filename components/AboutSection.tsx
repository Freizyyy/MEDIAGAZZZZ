import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24">
      {/* Motto Box */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 rounded-[2rem] sm:rounded-[3.5rem] p-8 sm:p-16 text-center text-white shadow-[0_40px_100px_-20px_rgba(37,99,235,0.4)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-white blur-[150px] rounded-full"></div>
        </div>
        <div className="relative z-10 space-y-6 sm:space-y-8">
          <div className="inline-block bg-white/10 backdrop-blur-xl px-5 sm:px-6 py-2 rounded-full text-[10px] sm:text-[12px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] border border-white/20 mb-2">
            НАШ ДЕВИЗ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-none sm:leading-[1.1] font-heading">
            «ЛО» — это летопись каждого из нас. Мы пишем историю лицея вместе.
          </h2>
          <p className="text-blue-100 text-base sm:text-xl font-medium max-w-2xl mx-auto opacity-90 leading-relaxed px-2">
            Голос поколения, которое стремится к вершинам и ценит каждое мгновение школьной жизни.
          </p>
        </div>
      </div>

      {/* History Grid */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
        <div className="bg-white p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-gray-100 shadow-xl shadow-blue-500/5 hover:-translate-y-2 transition-transform duration-700">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-2xl sm:rounded-3xl flex items-center justify-center text-blue-600 text-xl sm:text-2xl font-black mb-6 sm:mb-10 shadow-inner">2022</div>
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tighter mb-4 sm:mb-6">Начало пути</h3>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-medium">
            Все началось с идеи небольшой группы энтузиастов, которые хотели сделать жизнь лицея ярче. Мы начали как проект ВКонтакте и выросли в полноценное цифровое медиа.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-gray-100 shadow-xl shadow-indigo-500/5 hover:-translate-y-2 transition-transform duration-700">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-100 rounded-2xl sm:rounded-3xl flex items-center justify-center text-indigo-600 text-2xl sm:text-3xl mb-6 sm:mb-10 shadow-inner">⚡</div>
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tighter mb-4 sm:mb-6">Энергия роста</h3>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-medium">
            Сегодня мы — это оперативные репортажи, качественная аналитика и площадка для самовыражения каждого лицеиста. Мы постоянно внедряем новые форматы и технологии.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white p-8 sm:p-16 rounded-[2.5rem] sm:rounded-[4rem] border border-gray-100 shadow-2xl text-center space-y-12 sm:space-y-16">
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tighter">Наши ценности</h3>
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-xs">То, во что мы верим</p>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-10 sm:gap-16">
          <div className="space-y-4 sm:space-y-6 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center text-3xl sm:text-4xl mx-auto group-hover:scale-110 transition-all duration-500">🔍</div>
            <h4 className="font-black text-gray-900 text-lg sm:text-xl tracking-tight">Честность</h4>
            <p className="text-gray-500 text-sm font-medium leading-relaxed px-4">Только проверенные факты и объективный взгляд на события.</p>
          </div>
          
          <div className="space-y-4 sm:space-y-6 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-indigo-50 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center text-3xl sm:text-4xl mx-auto group-hover:scale-110 transition-all duration-500">💡</div>
            <h4 className="font-black text-gray-900 text-lg sm:text-xl tracking-tight">Креативность</h4>
            <p className="text-gray-500 text-sm font-medium leading-relaxed px-4">Поиск нестандартных подходов и создание уникального контента.</p>
          </div>
          
          <div className="space-y-4 sm:space-y-6 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-violet-50 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center text-3xl sm:text-4xl mx-auto group-hover:scale-110 transition-all duration-500">🤝</div>
            <h4 className="font-black text-gray-900 text-lg sm:text-xl tracking-tight">Единство</h4>
            <p className="text-gray-500 text-sm font-medium leading-relaxed px-4">Мы работаем как одна команда для блага всего лицейского сообщества.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
