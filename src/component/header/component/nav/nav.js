import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { tool } from '../../../../../utils/tool';
import './nav.scss';

export default function MyNav() {
  const [scrollTop, setScrollTop] = useState(true);
  const [openButton, setOpenButton] = useState(false);
  const blogName = "Johnny's Blog";
  const navMenu = [
    { content: '首页', ref: '/' },
    { content: '归档', ref: '/archives' },
    { content: '分类', ref: '/categories' },
    { content: '标签', ref: '/tags' },
    { content: '关于', ref: '/about' },
  ];

  useEffect(() => {
    window.addEventListener('scroll', tool(navOnScroll, 200));
  }, []);

  function navOnScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop > 0) {
      setScrollTop(false);
    } else {
      setScrollTop(true);
    }
  }

  function onOpenButton() {
    setOpenButton(!openButton);
  }

  return (
    <nav
      id="navbar"
      className={classnames('navbar', 'scrolling-navbar', { 'top-nav-collapse': !scrollTop || openButton })}
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          {blogName}
        </Link>
        <button onClick={onOpenButton} className="navbar-button navbar-button-display">
          <div className={classnames('animated-icon', { open: openButton })}>
            <span />
            <span />
            <span />
          </div>
        </button>

        <div className={classnames('navbar-collapse navbar-display', { show: openButton })}>
          <ul className="navbar-nav">
            {navMenu.map((it) => (
              <li className="nav-item" key={it.content}>
                <Link className="nav-link" to={it.ref}>
                  {it.content}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
