import React, { useEffect, useState } from 'react';
import { getNewsIds, getNewsById, getUsers, NewsInterface, UserInterface } from './services';
import { NewsItem, NewsItemInterface } from './NewsItem';
import './App.css';

const App: React.FC = () => {
  const [news, setNews] = useState<(NewsItemInterface | undefined)[]>();
  const getData = async () => {
    try {
      const ids: number[] = await getNewsIds();
      const data: (NewsItemInterface | undefined)[] = await Promise.all(
        ids.map(async (item: number) => {
          try {
            const news = (await getNewsById(item)) as NewsInterface;
            const user = (await getUsers(news.by)) as UserInterface;
            return {
              storyTitle: news.title,
              storyUrl: news.url,
              storyTime: news.time,
              storyScore: news.score,
              authorId: user.id,
              authorKarma: user.karma
            } as NewsItemInterface;
          } catch (err) {
            console.log(`(i) Something happened trying to get the news by id`, err);
            return;
          }
        })
      );
      setNews(data);
    } catch (err) {
      console.log(`Something went wrong trying to get data`, err);
      return;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(news);
  }, [news]);

  return (
    <div className="App">
      {news && news.map((item, index) => <NewsItem key={index} data={item} />)}
    </div>
  );
};

export default App;
