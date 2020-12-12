import React, { useState } from 'react';
import MyNav from './component/nav/nav';
import BgImage from "./component/bgImage/bgImage";
import './index.scss';


export default function MyHeader() {
  return (
    <header className="header">
      <MyNav />
      <BgImage />
    </header>
  );
}
