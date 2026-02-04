
import React, { useEffect, useState, useRef } from 'react';
import { VKPost } from '../types';
import { fetchVKPosts } from '../services/vkService';
import { Logo } from './Navbar';

const NewsFeed: React.FC = () => {
  const [posts, setPosts] = useState<VKPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [userLikes, setUserLikes] = useState<Record<number, boolean>>(() => {
    // Инициализация лайков из localStorage
    const saved = localStorage.getItem('lyceum_user_likes');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    const load = async () => {
      const data = await fetchVKPosts();
      setPosts(data);
      setLoading(false);
    };
    load();
  }, []);

  // Сохранение лайков при изменении
  useEffect(() => {
    localStorage.setItem('lyceum_user_likes', JSON.stringify(userLikes));
  }, [userLikes]);

  const toggleLike = (postId: number) => {
    setUserLikes(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const Gallery = ({ photos }: { photos: string[] }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth } = scrollRef.current;
        const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
        scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
    };

    return (
      <div className="relative group/gallery">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar rounded-[1.5rem] sm:rounded-[2.5rem] bg-gray-50 border border-gray-100 p-1 sm:p-2 scroll-smooth"
        >
          {photos.map((url, i) => (
            <div key={i} className="flex-none w-full snap-center rounded-[1.2rem] sm:rounded-[2rem] overflow-hidden bg-gray-200">
              <img 
                src={url} 
                alt={`Фото ${i + 1}`} 
                className="w-full h-[300px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        {photos.length > 1 && (
          <>
            <button 
              onClick={() => scroll('left')}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur rounded-full shadow-2xl flex items-center justify-center text-gray-900 font-black hover:bg-blue-600 hover:text-white transition-all transform active:scale-95 z-10 lg:opacity-0 lg:group-hover/gallery:opacity-100"
            >
              ←
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur rounded-full shadow-2xl flex items-center justify-center text-gray-900 font-black hover:bg-blue-600 hover:text-white transition-all transform active:scale-95 z-10 lg:opacity-0 lg:group-hover/gallery:opacity-100"
            >
              →
            </button>
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 bg-black/40 backdrop-blur-xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
              {photos.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white opacity-40 group-hover/gallery:opacity-100 transition-opacity"></div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-40 sm:py-60 space-y-8 sm:space-y-10">
        <div className="relative">
          <div className="w-20 h-20 sm:w-28 sm:h-28 border-[4px] border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center font-black text-blue-600 text-lg sm:text-xl tracking-tighter">ЛО</div>
        </div>
        <div className="text-center space-y-2 sm:space-y-3 px-4">
          <h2 className="text-gray-900 font-black text-2xl sm:text-3xl tracking-tighter animate-pulse">Синхронизация ленты...</h2>
          <p className="text-gray-400 font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[9px] sm:text-[10px]">Лицейское Обозрение Digital</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16 sm:space-y-40 max-w-3xl mx-auto py-10 sm:py-20 px-4 mb-20">
      {posts.map((post) => {
        const photos = post.attachments?.filter(a => a.type === 'photo').map(att => {
          const photo = att.photo;
          return photo.sizes.reduce((prev: any, current: any) => (prev.width > current.width) ? prev : current).url;
        }) || [];

        const isLiked = userLikes[post.id] || false;
        const displayLikes = (post.likes?.count || 0) + (isLiked ? 1 : 0);

        return (
          <article key={post.id} className="group relative animate-wow">
            <div className="absolute -left-16 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-indigo-400 to-transparent hidden xl:block opacity-20">
               <div className="absolute top-10 -left-1.5 w-4 h-4 rounded-full border-4 border-white bg-blue-600 shadow-2xl shadow-blue-500 animate-bounce"></div>
            </div>

            <div className="bg-white rounded-[2.5rem] sm:rounded-[3.5rem] border border-gray-100 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_80px_150px_-30px_rgba(37,99,235,0.18)] sm:hover:-translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden">
              <div className="p-6 sm:p-14">
                <header className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 sm:mb-12 space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="relative shrink-0">
                      <Logo className="w-14 h-14 sm:w-20 sm:h-20" />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-7 sm:h-7 bg-green-500 border-[3px] sm:border-4 border-white rounded-full shadow-lg"></div>
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 text-xl sm:text-3xl tracking-tighter group-hover:text-blue-600 transition-colors">Пресс-центр</h3>
                      <div className="flex items-center space-x-2 mt-1 sm:mt-2">
                        <time className="text-[10px] sm:text-xs text-gray-400 font-black uppercase tracking-[0.2em]">
                          {new Date(post.date * 1000).toLocaleDateString('ru-RU', { 
                              day: 'numeric', 
                              month: 'long',
                              year: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex self-start sm:self-auto bg-blue-600/10 text-blue-600 px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-[9px] sm:text-[11px] font-black uppercase tracking-[0.3em] border border-blue-600/10">
                    АКТУАЛЬНО
                  </div>
                </header>
                
                <div className="text-gray-800 whitespace-pre-wrap leading-[1.6] text-lg sm:text-xl mb-8 sm:mb-12 font-medium tracking-tight">
                  {post.text}
                </div>

                {photos.length > 0 && <Gallery photos={photos} />}

                <footer className="flex flex-col sm:flex-row sm:items-center justify-between mt-10 sm:mt-14 pt-8 sm:pt-12 border-t border-gray-100 space-y-6 sm:space-y-0">
                    <div className="flex items-center justify-around sm:justify-start sm:space-x-12">
                      <button 
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center space-x-3 sm:space-x-4 group/stat transition-all duration-300 transform active:scale-90 ${isLiked ? 'scale-110' : 'hover:scale-110'}`}
                      >
                          <span className={`text-3xl sm:text-4xl filter drop-shadow-xl transition-all duration-500 ${isLiked ? 'grayscale-0 scale-125' : 'grayscale opacity-60 group-hover/stat:grayscale-0 group-hover/stat:opacity-100'}`}>
                            {isLiked ? '❤️' : '🤍'}
                          </span>
                          <span className={`font-black text-xl sm:text-2xl tracking-tighter transition-colors ${isLiked ? 'text-red-500' : 'text-gray-900'}`}>
                            {displayLikes}
                          </span>
                      </button>
                      <div className="flex items-center space-x-3 sm:space-x-4 text-gray-400 group/stat">
                          <span className="text-3xl sm:text-4xl">👁️</span>
                          <span className="font-black text-gray-900 text-xl sm:text-2xl tracking-tighter">{post.views?.count || 0}</span>
                      </div>
                    </div>
                    
                    <a 
                      href={`https://vk.com/wall-217865231_${post.id}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center px-10 py-4 sm:py-5 bg-gray-900 text-white rounded-[1.2rem] sm:rounded-[1.5rem] font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] overflow-hidden hover:bg-blue-600 hover:scale-[1.05] active:scale-[0.98] transition-all duration-500 shadow-xl shadow-gray-400/20"
                    >
                      ПОДРОБНЕЕ
                    </a>
                </footer>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default NewsFeed;
