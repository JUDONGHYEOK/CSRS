import React from 'react';
import ArtItem from '.';

export default {
  title: 'Molecules / ArtItem'
};

export const Item = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <div style={{ width: '340px' }}>
        <ArtItem
          src={'assets/img/collages.png'}
          category={'Painting'}
          artist={'홍길동'}
          name={'가을과 해지는 노을'}
          price={'3,550,000'}
          dueDate={'D-15'}
        ></ArtItem>
      </div>

      <div style={{ width: '340px' }}>
        <ArtItem
          src={'assets/img/logo.png'}
          category={'Painting'}
          artist={'홍동건'}
          name={'WeArt 로고'}
          price={'1,000'}
          dueDate={'D-3'}
        ></ArtItem>
      </div>
    </div>
  );
};
