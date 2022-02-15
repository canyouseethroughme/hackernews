import { httpClient } from '../utils/httpClient';

export const getNewsIds = async () => {
  const { data } = await httpClient().get<number[]>(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  );
  const firstTenNewsIds = data.slice(0, 10);
  return firstTenNewsIds;
};

export const getNewsById = async (id: number) => {
  const { data } = await httpClient().get<NewsInterface>(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  return data;
};

export interface NewsInterface {
  id: number;
  by: string;
  time: number;
  title: string;
  score: number;
  url: string;
}
