export interface Movie {
    id: number;
    name: string;
    year: number;
    image_url: string;
    overview?: string;
    user_rating?: number;
    vote_count?: number;
  }
  