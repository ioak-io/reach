import React, { useEffect, useState } from 'react';
import { ArticleCategory } from '../../types/ArticleCategoryType';
import { Comment } from '../../types/CommentType';
import { SpotlightDataType } from '../../types/SpotlightDataType';
import { toUserMap, User, UserMap } from '../../types/UserType';
import './SpotlightView.css';

export type SpotlightViewProps = {
  spotlight: SpotlightDataType;
  fixedLabel?: boolean;
  onClick?: any;
}

const SpotlightView = (props: SpotlightViewProps) => {
  const onClick = () => {
    if (props.onClick) {
      props.onClick(props.spotlight.id);
    }
  }
  return (
    <a onClick={onClick} href={props.spotlight?.url || undefined} className={`reach-spotlight-grid-widget-category-view ${props.fixedLabel ? "reach-spotlight-grid-widget-category-view--fixed-label" : ""}`}>
      {props.spotlight.image && <img src={props.spotlight.image} />}
      {!props.spotlight.image && props.spotlight.text}
      {props.spotlight.image && <div className="reach-spotlight-grid-widget-category-view__text">{props.spotlight.text}</div>}
    </a>
  );
};

export default SpotlightView;
