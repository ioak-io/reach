import React, { useEffect, useState } from 'react';
import Blog, { BlogProps } from '.';
import OrientationType from '../../types/OrientationType';
import ArticleListWidget from '../../widgets/ArticleListWidget';
import WidgetGroup from '../WidgetGroup';
import { articles } from './ArticlesData';

const BlogWrapper = (props: BlogProps) => {
  return (
    <Blog {...props}>
      <WidgetGroup orientation={OrientationType.row}>
        <ArticleListWidget articles={articles} />
      </WidgetGroup>
      </Blog>
  );
};

export default BlogWrapper;
