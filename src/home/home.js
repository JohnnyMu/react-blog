import React, { useState } from 'react';
import MyHeader from '../component/header/header';
import EssayCard from './essayCard/essaycard';
import MyFooter from '../component/footer/footer';
// import '../component/header/component/nav/nav.scss'
import './index.scss';

export default function Home() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  return (
    <>
      <MyHeader />
      <main>
        <div className="container no-pad">
          <div id="board" className=" z-depth-3 pad-tb3">
            <div className="container">
              <div className="row">
                <div className="col-12 m-auto col-10">
                  <EssayCard />
                  <EssayCard />
                  <EssayCard />
                  <EssayCard />
                  <EssayCard />
                  <EssayCard />
                  <EssayCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <MyFooter />
    </>
  );
}
