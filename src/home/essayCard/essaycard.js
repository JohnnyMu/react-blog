import React, { useState } from 'react';
import essayImg from '../../../static/img/blog-post5.jpg';
import archiveIcon from '../../../static/img/archiveIcon.svg';
import tagIcon from '../../../static/img/tagIcon.svg';
import timeIcon from '../../../static/img/timeIcon.svg';
import './index.scss';
import '../index.scss';

export default function EssayCard() {
  const [blogContent, setBlogContent] = useState({
    time: '2020-10-2',
    archive: '学习笔记',
    tags: ['实战', 'Vue'],
    img: essayImg,
    title: 'Vue实战：实现一个博客系统',
    content:
      '最近想结合所学写一个项目，最后决定写一个博客系统，使用的技术栈为：\n' +
      '                      前端：Vue Vue-router element-ui\n' +
      '                      后端：express moogose jsonwebtoken\n' +
      '                      使用了vue-cli搭建项目\n' +
      '                      仓库地址： https://github.com/JohnnyMu/vue-blog-master\n' +
      '                      主页：\n' +
      '                      文章详情页：后台管理页面：\n' +
      '                      文章编辑页：\n' +
      '                      markdown实时预览：',
  });
  return (
    <div className="row mx-auto index-card">
      <div className="col-12 col-md-4 m-auto">
        <a href="#">
          <img src={blogContent.img} srcSet={blogContent.img} className="index-img img-fluid" />
        </a>
      </div>
      <div className="col-12 col-md-8 mx-auto index-info">
        <a href="#">
          <p className="h4 index-header">{blogContent.title}</p>
        </a>
        <a href="#">
          <div className="index-excerpt">
            <div className="index-text mb1">{blogContent.content}</div>
          </div>
        </a>
        <div className="index-btm">
          <img src={timeIcon} className="cardIcon" />
          {blogContent.time}
          <img src={archiveIcon} className="cardIcon" />
          <a href="#">{blogContent.archive}</a>
          <img src={tagIcon} className="cardIcon" />

          {blogContent.tags.map((it) => (
            <a href="#">{it}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
