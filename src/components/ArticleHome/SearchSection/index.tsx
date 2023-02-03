import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import OakForm from '../../../oakui/wc/OakForm';
import OakInput from '../../../oakui/wc/OakInput';

interface Props {
  handleSubmit: any;
  text: string;
}

const SearchSection = (props: Props) => {
  const formId = uuidv4();
  const [searchText, setSearchText] = useState('');

  const handleChange = (detail: any) => {
    setSearchText(detail.value);
  };

  const handleSubmit = () => {
    props.handleSubmit(searchText);
  };

  useEffect(() => {
    setSearchText(props.text || '');
  }, [props.text]);

  return (
    <div className="search-section">
      <OakForm handleSubmit={handleSubmit} formGroupName={formId}>
        <OakInput
          shape="sharp"
          formGroupName={formId}
          value={searchText}
          name="searchText"
          handleInput={handleChange}
          placeholder="Search"
        />
      </OakForm>
    </div>
  );
};

export default SearchSection;
