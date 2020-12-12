import React, { useState } from 'react';
import MyHeader from '../component/header/header';

export default function Home() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  return (
    <>
      <MyHeader />
      <div>jaldfjklaj</div>
    </>
  );
}
