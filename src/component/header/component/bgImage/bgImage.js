import React, { useState, useEffect } from 'react';
import './bgImage.scss';
import downIcon from '../../../../../static/img/downIcon.svg';

export default function BgImage() {
  const [content, setContent] = useState('都说帅的人说话只说一半，简直是在放 . . . ');
  useEffect(() => {
    if (content.length > 0) {
      startTyping();
    }
  }, [content]);

  function startTyping() {
    let node = document.getElementById('subtitle');
    node.innerText = '';
    let index = 0;
    let tId = null;
    tId = setInterval(function () {
      node.innerText += content.charAt(index);
      if (index++ === content.length) {
        clearInterval(tId);
      }
    }, 80);
  }

  return (
    <div className="bg">
      <div className="mask flex-center rgba-black-light">
        <div className="typing-container">
          <span className="h2" id="subtitle" />
          <span className="blink h2">_</span>
        </div>
        <div className="scroll-down-bar">
          <img src={downIcon} className="scroll-down-bar-icon" />
        </div>
      </div>
    </div>
  );
}
