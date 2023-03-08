import React, { useEffect, useState } from 'react';
import { ArticleCategory } from '../../types/ArticleCategoryType';
import { SpotlightDataType } from '../../types/SpotlightDataType';
import SpotlightView from './SpotlightView';
import './style.css';

export type SpotlightGridWidgetProps = {
  data: SpotlightDataType[];
  fixedLabel?: boolean;
}

const SpotlightGridWidget = (props: SpotlightGridWidgetProps) => {

  return (
    <div className="reach-spotlight-grid-widget">
      {props.data.map((spotlight) => <SpotlightView key={spotlight.id} spotlight={spotlight} fixedLabel={props.fixedLabel} />)}
    </div>
  );
};

export default SpotlightGridWidget;
