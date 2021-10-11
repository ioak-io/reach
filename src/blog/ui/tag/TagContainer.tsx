import React from 'react';
import Tag from './Tag';

interface Props {
  tags: any;
}

const TagContainer = (props: Props) => {
  return (
    <div className="tag-container">
      {props.tags.map((item: any) => (
        <div key={item?.id}>{item && <Tag tag={item.name || ''} />}</div>
      ))}
    </div>
  );
};

export default TagContainer;
