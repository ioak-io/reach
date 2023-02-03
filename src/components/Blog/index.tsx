import React, { useEffect, useState } from 'react';
// import { useHistory, useLocation } from 'react-router';
import './style.css';
import { ReachConfig } from '../../types/ReachConfigType';
import { Article } from '../../types/ArticleType';
import { ReachArticleDataPageType } from '../../types/ReachArticleDataPageType';

export interface BlogProps {
  children?: any;
}

const Blog = (props: BlogProps) => {
  return (
    <div className="reach-blog">
      {props.children}
    </div>
  );
};

export default Blog;
