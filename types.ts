
export interface VKPost {
  id: number;
  text: string;
  date: number;
  attachments?: any[];
  likes?: { count: number };
  reposts?: { count: number };
  views?: { count: number };
}

export enum AppTab {
  NEWS = 'news',
  STAFF = 'staff',
  ABOUT = 'about',
  FEEDBACK = 'feedback'
}

export type ImageSize = '1K' | '2K' | '4K';
