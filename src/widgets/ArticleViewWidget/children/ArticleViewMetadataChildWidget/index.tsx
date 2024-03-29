import React, { useEffect, useState } from 'react';
import Avatar from '../../../../components/Avatar';
import Seperator from '../../../../components/Seperator';
import './style.css';
import { User } from '../../../../types/UserType';

export type ArticleViewMetadataChildWidgetProps = {
  children?: any;
  hideImage?: boolean;
  [key: string]: any;
  // article?: Article;
  // categories?: ArticleCategory[];
  // users?: User[];
  user?: User;
}

const ArticleViewMetadataChildWidget = (props: ArticleViewMetadataChildWidgetProps) => {

  return (
    <div className="reach-article-view-metadata-child-widget">
      <div className="reach-article-view-metadata-child-widget-main">
        {!props.hideImage && <div className="reach-article-view-metadata-child-widget__left">
          <Avatar user={props.user} size="large" />
        </div>}
        <div className="reach-article-view-metadata-child-widget__right">
          <div className="reach-article-view-metadata-child-widget__right__top">
            <span>
              {props.user?.firstName} {props.user?.lastName}
            </span>
          </div>
          <div className="reach-article-view-metadata-child-widget__right__bottom">
            <span>
              Nov 29, 2022
            </span>
            <Seperator />
            <span>
              2 mins read
            </span>
          </div>
        </div>
      </div>
      {props.children && <div className="reach-article-view-metadata-child-widget-child">
        {props.children}
      </div>}
    </div>
  );
};

ArticleViewMetadataChildWidget.displayName = "ArticleViewMetadataChildWidget";

export default ArticleViewMetadataChildWidget;
