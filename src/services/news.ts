import { httpClient } from '../utils/httpClient';
import { getUsers } from './users';

export const getNewsIds = async () => {
  const { data } = await httpClient().get('https://hacker-news.firebaseio.com/v0/topstories.json');
  const firstTenNewsIds = data.slice(0, 10);
  console.log(firstTenNewsIds);
  getNewsById(30347719);
  getUsers('dbrereton');
  return firstTenNewsIds;
};

export const getNewsById = async (id: number) => {
  const { data } = await httpClient().get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  return data;
};
