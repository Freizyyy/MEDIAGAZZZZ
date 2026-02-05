
import React from 'react';

const staffData = {
  grade11: [
    { name: "Мананкова Ульяна", role: "Редактор статей" },
    { name: "Малышева Арина", role: "Глава пресс-центра / Визуал" },
    { name: "Деймунд Рафаэль", role: "Технический администратор" },
    { name: "Лазарева Алёна", role: "Статьи и обзоры" },
    { name: "Рубаник Елизавета", role: "Редакция" },
    { name: "Лосева Дарья", role: "Связи с общественностью" },
    { name: "Окрестина Анастасия", role: "Фото и видео" },
    { name: "Титов Виктор", role: "Интервьюер" }
  ],
  grade8: [
    { name: "Крюковский Егор", role: "Статьи и новости" },
    { name: "Меркаленко Алексей", role: "Глава визуал-отдела" },
    { name: "Балашова Анастасия", role: "Фото и видео" },
    { name: "Брильц Лилия", role: "Визуальный контент" },
    { name: "Камышев Алексей", role: "Продакшн" },
    { name: "Батыгина Валерия", role: "Статьи" },
    { name: "Пойда Вера", role: "Редактор" },
    { name: "Защихина Анастасия", role: "Цифровая фотография" },
    { name: "Иванова Валерия", role: "Журналистика" }
  ]
};

const StaffSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4 space-y-40">
      <section>
        <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-8 font-heading tracking-tighter">Выпускники 2025</h2>
            <div className="w-32 h-2.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-600 rounded-full shadow-lg shadow-blue-200"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffData.grade11.map((member, i) => (
            <div key={i} className="group bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-3 transition-all duration-700 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-blue-50 rounded-full mb-8 flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                {member.role.toLowerCase().includes('администратор') || member.role.toLowerCase().includes('тех') ? '🛠️' : '👤'}
              </div>
              <h4 className="font-black text-gray-900 text-2xl tracking-tight">{member.name}</h4>
              <div className="mt-5 px-6 py-2 bg-blue-600/5 text-blue-600 text-[11px] font-black uppercase tracking-[0.25em] rounded-full border border-blue-600/10">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-8 font-heading tracking-tighter">Восьмой Класс</h2>
            <div className="w-32 h-2.5 bg-gradient-to-r from-indigo-600 via-violet-500 to-violet-600 rounded-full shadow-lg shadow-indigo-200"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffData.grade8.map((member, i) => (
            <div key={i} className="group bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-3 transition-all duration-700 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-indigo-50 rounded-full mb-8 flex items-center justify-center text-4xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-inner">👤</div>
              <h4 className="font-black text-gray-900 text-2xl tracking-tight">{member.name}</h4>
              <div className="mt-5 px-6 py-2 bg-indigo-600/5 text-indigo-600 text-[11px] font-black uppercase tracking-[0.25em] rounded-full border border-indigo-600/10">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StaffSection;
