import { httpClient } from '../utils/httpClient';

export const getUsers = async (id: string) => {
  const { data } = await httpClient().get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
  return data;
};
