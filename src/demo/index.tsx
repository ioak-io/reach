import React, { useState } from 'react';
import './style.scss';

interface Props {
  history?: any;
}

const Reach = (props: Props) => {
  const [richTextEditorValue, setRichTextEditorValue] = useState('Test');

  return <div className="demo">demo </div>;
};

export default Reach;
