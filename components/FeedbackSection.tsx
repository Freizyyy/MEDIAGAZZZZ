
import React, { useState } from 'react';

const FeedbackSection: React.FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-12 px-4 space-y-12 sm:space-y-16">
      <div className="grid lg:grid-cols-5 gap-10 sm:gap-16">
        <div className="lg:col-span-2 space-y-8 sm:space-y-12">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter leading-tight">Свяжитесь с нами</h2>
            <p className="text-gray-500 text-lg sm:text-xl font-medium leading-relaxed opacity-80">
              У вас есть идея для крутого материала или вы хотите стать частью нашей команды? Мы открыты для любых предложений!
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6">
            <div className="group flex items-center space-x-4 sm:space-x-6 p-5 sm:p-6 bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shrink-0 group-hover:scale-110 transition-transform">📧</div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] sm:text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1">Арина Малышева</p>
                <a href="mailto:malyschewa.arina@gmail.com" className="text-sm sm:text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors block truncate">malyschewa.arina@gmail.com</a>
              </div>
            </div>

            <div className="group flex items-center space-x-4 sm:space-x-6 p-5 sm:p-6 bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shrink-0 group-hover:scale-110 transition-transform">📩</div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] sm:text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1">Ульяна Мананкова</p>
                <a href="mailto:ulya.m.m@mail.ru" className="text-sm sm:text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors block truncate">ulya.m.m@mail.ru</a>
              </div>
            </div>
            
            <div className="group flex items-center space-x-4 sm:space-x-6 p-5 sm:p-6 bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shrink-0 group-hover:scale-110 transition-transform">📞</div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] sm:text-[10px] font-black text-green-600 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1">Телефон Редакции</p>
                <a href="tel:+79139303008" className="text-sm sm:text-lg font-bold text-gray-900 hover:text-green-600 transition-colors">+7 913 930 30 08</a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-white p-6 sm:p-14 rounded-[2rem] sm:rounded-[4rem] border border-gray-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          {sent ? (
            <div className="h-full min-h-[300px] sm:min-h-[400px] flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-700">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl sm:text-5xl shadow-inner animate-bounce">✓</div>
              <div className="space-y-2 px-4">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tighter">Сообщение улетело!</h3>
                <p className="text-gray-500 text-base sm:text-lg font-medium">Спасибо за ваше предложение. Мы вернемся с ответом очень скоро.</p>
              </div>
              <button 
                onClick={() => setSent(false)}
                className="px-10 py-4 bg-gray-900 text-white rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-blue-600 transition-all"
              >
                ОТПРАВИТЬ ЕЩЕ ОДНО
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6 sm:space-y-8">
              <div className="space-y-2 sm:space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tighter text-center lg:text-left">Напишите нам</h3>
                <p className="text-gray-400 font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] text-center lg:text-left">Форма обратной связи</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">Как вас зовут?</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Ваше имя"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl sm:rounded-[1.5rem] px-5 sm:px-6 py-4 sm:py-5 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all text-base sm:text-lg font-medium"
                  />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">Ваш Email</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="example@mail.ru"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl sm:rounded-[1.5rem] px-5 sm:px-6 py-4 sm:py-5 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all text-base sm:text-lg font-medium"
                  />
                </div>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">Текст сообщения</label>
                <textarea 
                  required 
                  rows={4}
                  placeholder="Расскажите о вашей идее или вопросе подробнее..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl sm:rounded-[1.5rem] px-5 sm:px-6 py-4 sm:py-5 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white resize-none transition-all text-base sm:text-lg font-medium leading-relaxed"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 sm:py-6 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white rounded-xl sm:rounded-[1.5rem] font-black text-base sm:text-lg uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-500"
              >
                Отправить
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
