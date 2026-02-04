
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ImageSize } from '../types';
import { Icons } from '../constants';

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<ImageSize>('1K');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    const checkKey = async () => {
      // Correct usage of AI Studio internal method to check key presence
      const selected = await (window as any).aistudio.hasSelectedApiKey();
      setHasKey(selected);
    };
    checkKey();
  }, []);

  const handleOpenKey = async () => {
    // Open dialog for user to select paid API key
    await (window as any).aistudio.openSelectKey();
    // Proceed immediately as per race condition guidelines
    setHasKey(true);
  };

  const generateImage = async () => {
    if (!prompt.trim() || loading) return;

    setLoading(true);
    setResult(null);

    try {
      // Creating instance inside the method to use the most up-to-date key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        // Model for high-quality images, requires user-provided key
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: prompt }]
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            imageSize: size
          }
        }
      });

      // Nano banana models can return multiple parts, iterating to find inlineData
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            setResult(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      }
    } catch (error: any) {
      console.error(error);
      // Handling model/key mismatch as per guidelines
      if (error.message?.includes("Requested entity was not found")) {
        setHasKey(false);
        alert("Пожалуйста, выберите корректный платный API ключ для работы с этой моделью.");
      } else {
        alert("Ошибка генерации. Пожалуйста, проверьте API ключ.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!hasKey) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl space-y-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
             <Icons.Image />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Высококачественная Генерация Изображений</h2>
          <p className="text-gray-500 max-w-sm mx-auto">
            Для использования Gemini 3 Pro Image необходимо выбрать платный API ключ. 
            Ознакомьтесь с <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="text-blue-600 underline">документацией по биллингу</a>.
          </p>
          <button 
            onClick={handleOpenKey}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
          >
            Выбрать API Ключ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Что создадим?</h3>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Опишите ваше изображение (например: 'Футуристичный лицей в стиле киберпанк, яркое освещение, реализм')..."
              className="w-full h-32 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
            />
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">Разрешение изображения</label>
              <div className="grid grid-cols-3 gap-2">
                {(['1K', '2K', '4K'] as ImageSize[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`py-2 rounded-lg border transition-all ${
                      size === s 
                        ? 'bg-blue-600 text-white border-blue-600 font-bold' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={generateImage}
              disabled={loading || !prompt.trim()}
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 transition-all flex items-center justify-center space-x-2"
            >
              {loading ? <Icons.Loading /> : <Icons.Image />}
              <span>{loading ? 'Создаю шедевр...' : 'Сгенерировать'}</span>
            </button>
          </div>
        </div>

        <div className="bg-gray-200 rounded-2xl min-h-[400px] flex items-center justify-center overflow-hidden border-2 border-dashed border-gray-300 relative">
          {result ? (
            <img src={result} alt="Generated" className="w-full h-full object-cover" />
          ) : (
            <div className="text-center px-6">
              <div className="text-gray-400 mb-2">
                <Icons.Image />
              </div>
              <p className="text-gray-400 font-medium italic">Ваше изображение появится здесь</p>
            </div>
          )}
          {loading && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin h-10 w-10 text-blue-600"><Icons.Loading /></div>
                <p className="font-bold text-blue-600 animate-pulse text-lg">Нейросеть рисует...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
