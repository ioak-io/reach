import React from 'react';
import { compose as typographyCompose } from '@oakui/core-stage/style-composer/OakTypographyComposer';
import './style.scss';
import Tag from '../../../blog/ui/tag/Tag';

interface Props {
  handleClick: any;
  tags: string[];
}

const TagSection = (props: Props) => {
  return (
    <>
      <h4
        className={`sidepane-section-title ${typographyCompose({
          variant: 'h4',
        })}`}
      >
        Labels
      </h4>
      <div className="tag-section">
        {props.tags?.map((item: any) => (
          <Tag
            key={item}
            tag={item}
            handleClick={() => props.handleClick(item)}
          />
        ))}
      </div>
    </>
  );
};

export default TagSection;
