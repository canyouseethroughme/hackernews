import React from 'react';

interface NewsDataInterface {
  data?: NewsItemInterface;
}

export interface NewsItemInterface {
  storyTitle?: string;
  storyUrl?: string;
  storyTime?: number;
  storyScore?: number;
  authorId?: string;
  authorKarma?: number;
}

export const NewsItem: React.FC<NewsDataInterface> = ({ data }) => {
  return (
    <div style={{ display: 'flex' }}>
      <p>storyTitle: {data?.storyTitle}</p>
      <p>story url: {data?.storyUrl}</p>
      <p>storyTime: {data?.storyTime}</p>
      <p>storyScore: {data?.storyScore}</p>
      <p>authorId: {data?.authorId}</p>
      <p>authorKarma: {data?.authorKarma}</p>
    </div>
  );
};
