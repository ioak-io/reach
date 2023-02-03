import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { compose as typographyCompose } from '@oakui/core-stage/style-composer/OakTypographyComposer';
import './style.scss';
import OakClickArea from '../../../oakui/wc/OakClickArea';
import CategoryItem from './CategoryItem';
import CategoryItemEdit from './CategoryItemEdit';

interface Props {
  categories: any[];
  handleClick: any;
  saveCategory: any;
}

const CategorySection = (props: Props) => {
  const [showNewCategory, setShowNewCategory] = useState(false);

  return (
    <div className="category-section">
      <h4
        className={`sidepane-section-title category-section__header ${typographyCompose(
          {
            variant: 'h4',
          }
        )}`}
      >
        <div className="category-section__header__container">
          <div>Categories</div>
          {!showNewCategory && (
            <div className="category-section__header__container__action">
              <OakClickArea handleClick={() => setShowNewCategory(true)}>
                <div className="category-section__header__container__action__icon">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </OakClickArea>
            </div>
          )}
        </div>
      </h4>
      <div className="category-section__content">
        {showNewCategory && (
          <CategoryItemEdit
            handleClose={() => setShowNewCategory(false)}
            handleUpdate={props.saveCategory}
          />
        )}
        <ul className="category-section__content__list">
          {props.categories?.map((item: any) => (
            <li className="category-section__content__list__item" key={item.id}>
              <CategoryItem
                item={item}
                handleClick={props.handleClick}
                handleUpdate={props.saveCategory}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategorySection;
