import React, { useEffect, useState } from 'react';
import OrientationType from '../../types/OrientationType';
import './style.css';

interface Props {
  children?: any;
  orientation?: OrientationType;
}

const WidgetGroup = (props: Props) => {
  return (
    <div
      className={`reach-widget-group reach-widget-group--orientation-${props.orientation || OrientationType.default
        }`}
    >{props.children}
    </div>
  );
};

export default WidgetGroup;
