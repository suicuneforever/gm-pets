import React, { FC } from 'react';
import GlobalStyles from '../globalStyles.css';

const App: FC = () => {
  const test = getServerSideProps();

  console.log(test);

  return (
    <>
      <GlobalStyles />
      <div>Hello World</div>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/feed');
  const feed = await res.json();
  return feed;
};

export default App;
