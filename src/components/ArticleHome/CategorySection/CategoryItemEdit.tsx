import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faEdit,
  faPencilAlt,
  faPlus,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import './CategoryItemEdit.scss';
import OakClickArea from '../../../oakui/wc/OakClickArea';
import OakInput from '../../../oakui/wc/OakInput';

interface Props {
  item?: any;
  handleClose: any;
  handleUpdate: any;
}

const CategoryItemEdit = (props: Props) => {
  const [state, setState] = useState({
    name: '',
    id: null,
  });

  useEffect(() => {
    if (props.item) {
      setState({ ...props.item });
    }
  }, [props.item]);

  const handleChange = (detail: any) => {
    setState({
      ...state,
      [detail.name]: detail.value,
    });
  };

  const save = () => {
    props.handleUpdate({ id: state.id, name: state.name });
    // addArticleCategory({
    //   variables: {
    //     payload: {
    //       id: state.id,
    //       name: state.name,
    //     },
    //   },
    //   update: (cache: any, { data: { addArticleCategory } }: any) => {
    //     const data: any = cache.readQuery({ query: LIST_ARTICLE_CATEGORIES });
    //     let _data = [...data.articleCategories];
    //     const index = _data.findIndex(
    //       (item) => item.id === addArticleCategory.id
    //     );
    //     if (index >= 0) {
    //       _data[index] = addArticleCategory;
    //     } else {
    //       _data = [..._data, addArticleCategory];
    //     }
    //     cache.writeQuery({
    //       query: LIST_ARTICLE_CATEGORIES,
    //       data: {
    //         articleCategories: _data,
    //       },
    //     });
    //     props.handleClose();
    //   },
    // });
  };

  return (
    <div className="category-item-edit">
      <div className="category-item-edit__form">
        <OakInput
          name="name"
          value={state.name}
          shape="sharp"
          handleInput={handleChange}
        />
        <div className="category-item-edit__form__action__container">
          <OakClickArea handleClick={save}>
            <div className="category-item-edit__form__action">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </OakClickArea>
          <OakClickArea handleClick={props.handleClose}>
            <div className="category-item-edit__form__action">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </OakClickArea>
        </div>
      </div>
    </div>
  );
};

export default CategoryItemEdit;
