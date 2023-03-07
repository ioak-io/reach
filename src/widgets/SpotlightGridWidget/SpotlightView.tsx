import React, { useEffect, useState } from 'react';
import { ArticleCategory } from '../../types/ArticleCategoryType';
import { Comment } from '../../types/CommentType';
import { SpotlightDataType } from '../../types/SpotlightDataType';
import { toUserMap, User, UserMap } from '../../types/UserType';
import './SpotlightView.css';

export type SpotlightViewProps = {
  spotlight: SpotlightDataType;
}

const SpotlightView = (props: SpotlightViewProps) => {
  return (
    <a className="reach-spotlight-grid-widget-category-view">
      {props.spotlight.image && <img src={props.spotlight.image} />}
      {!props.spotlight.image && props.spotlight.text}
      <div className="reach-spotlight-grid-widget-category-view__text">{props.spotlight.text}</div>
    </a>
  );
};

export default SpotlightView;
