import React, { useEffect, useState } from 'react';
import { isEmptyOrSpaces } from '../../utils/Utils';
import './InfoSection.scss';

interface Props {
  criteria: any;
}

const InfoSection = (props: Props) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!isEmptyOrSpaces(props.criteria.text)) {
      setMessage(`Showing Articles matching "${props.criteria.text}"`);
    } else if (!isEmptyOrSpaces(props.criteria.tag)) {
      setMessage(`Showing Articles for tag "${props.criteria.tag}"`);
    }
    // else if (
    //   !isEmptyOrSpaces(props.criteria.categoryId) &&
    //   data?.listArticleCategories
    // ) {
    //   setMessage(
    //     `Showing Articles for category "${
    //       data?.listArticleCategories.find(
    //         (item: any) => item.id === props.criteria.categoryId
    //       )?.name
    //     }"`
    //   );
    // }
    else {
      setMessage('Showing all Articles');
    }
  }, [props.criteria]);

  return (
    <>
      <div className="info-section">
        {/* <OakSection paddingHorizontal={2} paddingVertical={5}> */}
        <div className="info-section__container">
          <div className="info-section__container__message">{message}</div>
        </div>
        {/* </OakSection> */}
      </div>
    </>
  );
};

export default InfoSection;
