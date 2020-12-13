import React, { useState } from 'react';
import love from '../../../static/img/love.svg';
import './index.scss';

export default function MyFooter() {
  return (
    <footer className="footer-container">
      <div className="footer-context">
        <p>
          Theme design by
          <a href="https://github.com/fluid-dev/hexo-theme-fluid" style={{ paddingLeft: 7 }}>
            fluid
          </a>
        </p>
        <img src={love} className="love-style" />
        <p>
          rebuild with react by
          <a href="#" style={{ paddingLeft: 7 }}>
            Johnny
          </a>
        </p>
      </div>
    </footer>
  );
}
