import React, { useEffect, useState } from 'react';
import { getNewsIds, getNewsById, getUsers, NewsInterface, UserInterface } from './services';
import { NewsItem, NewsItemInterface } from './NewsItem';

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

            const time = new Date(news.time).toLocaleDateString();
            return {
              storyTitle: news.title,
              storyUrl: news.url,
              storyTime: time,
              storyScore: news.score,
              authorId: user.id.replace(/[^a-zA-Z0-9]/g, ''),
              authorKarma: user.karma
            } as NewsItemInterface;
          } catch (err) {
            console.log(`(i) Something happened trying to get the news by id`, err);
            return;
          }
        })
      );

      const sortedData = data?.sort(
        (a, b) => (a?.storyScore as number) - (b?.storyScore as number)
      );
      setNews(sortedData);
    } catch (err) {
      console.log(`(i) Something went wrong trying to get data`, err);
      return;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      {news && (
        <div className="header">
          <h1>HACKERNEWS</h1>
        </div>
      )}
      {news && news.map((item, index) => <NewsItem key={index} data={item} index={index} />)}
    </div>
  );
};

export default App;
