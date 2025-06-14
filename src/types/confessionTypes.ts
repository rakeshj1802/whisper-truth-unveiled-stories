
export interface Confession {
  id: string;
  title: string;
  content: string;
  preview: string;
  age: number;
  gender: string;
  timePosted: string;
  audioUrl?: string | null;
  avatarColor: string;
  categorySlug: string; // Added category slug
}
