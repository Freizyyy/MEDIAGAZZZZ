
import { VKPost } from '../types';
import { VK_SERVICE_KEY, VK_DOMAIN } from '../constants';

/**
 * VK API requires JSONP for cross-origin requests from the browser.
 */
const jsonpFetch = (url: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const callbackName = `vk_jsonp_callback_${Math.floor(Math.random() * 1000000)}`;
    
    const timeoutId = setTimeout(() => {
      cleanup();
      reject(new Error('VK API request timed out'));
    }, 10000);

    const cleanup = () => {
      clearTimeout(timeoutId);
      delete (window as any)[callbackName];
      const script = document.getElementById(callbackName);
      if (script) document.body.removeChild(script);
    };

    (window as any)[callbackName] = (data: any) => {
      cleanup();
      resolve(data);
    };

    const script = document.createElement('script');
    script.id = callbackName;
    script.src = `${url}&callback=${callbackName}`;
    script.onerror = () => {
      cleanup();
      reject(new Error('VK API script failed to load'));
    };
    document.body.appendChild(script);
  });
};

export const fetchVKPosts = async (count: number = 20): Promise<VKPost[]> => {
  try {
    const url = `https://api.vk.com/method/wall.get?domain=${VK_DOMAIN}&access_token=${VK_SERVICE_KEY}&v=5.131&count=${count}`;
    const data = await jsonpFetch(url);
    
    if (data.error) {
      console.error("VK API Error:", data.error);
      return mockPosts;
    }
    
    // Filter out posts with no text and no photo attachments (empty news)
    return data.response.items.filter((post: VKPost) => {
        const hasText = post.text && post.text.trim().length > 0;
        const hasPhoto = post.attachments?.some(a => a.type === 'photo');
        return hasText || hasPhoto;
    });
  } catch (error) {
    console.error("Error fetching VK posts via JSONP:", error);
    return mockPosts;
  }
};

const mockPosts: VKPost[] = [
  {
    id: 1,
    text: "Добро пожаловать в Лицейское Обозрение! Самые свежие новости и события нашего лицея теперь в новом формате.",
    date: Math.floor(Date.now() / 1000) - 3600,
    likes: { count: 124 },
    views: { count: 1042 }
  },
  {
    id: 2,
    text: "Объявлены результаты регионального этапа ВсОШ. Наши лицеисты показали блестящие результаты по математике и информатике! Гордимся вами! 🏆",
    date: Math.floor(Date.now() / 1000) - 86400,
    likes: { count: 256 },
    views: { count: 3200 }
  }
];
