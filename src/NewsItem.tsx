import React from 'react';
import './newsItem.css';

interface NewsDataInterface {
  data?: NewsItemInterface;
  index?: number;
}

export interface NewsItemInterface {
  storyTitle?: string;
  storyUrl?: string;
  storyTime?: string;
  storyScore?: number;
  authorId?: string;
  authorKarma?: number;
}

export const NewsItem: React.FC<NewsDataInterface> = ({ data, index }) => {
  return (
    <div className={`newsItem newsItem${index}`}>
      <a href={data?.storyUrl} className="contentWrapper" target="_blank" rel="noreferrer">
        <p className="title">{data?.storyTitle}</p>

        <p className="score">score {data?.storyScore}</p>
        <p className="author">by {data?.authorId}</p>
        <p className="karma">karma {data?.authorKarma}</p>
        <p className="time">date {data?.storyTime}</p>
      </a>
    </div>
  );
};
