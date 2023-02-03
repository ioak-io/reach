import React, { useState, useEffect } from 'react';
import { BlockEditor } from 'elements';
import TagEditor from '../../blog/ui/tag/TagEditor';
import OakSelect from '../../oakui/wc/OakSelect';
import OakLabel from '../../oakui/wc/OakLabel';
import { ArticleCategory } from '../../types/ArticleCategoryType';

interface Props {
  article: any;
  categories: ArticleCategory[];
  handleChange: any;
}
const CreateItem = (props: Props) => {
  const [categoryOptions, setCategoryOptions] = useState<any>([]);

  useEffect(() => {
    if (props.categories) {
      setCategoryOptions(
        props.categories.map((item: any) => ({
          id: item.id,
          value: item.name,
        }))
      );
    }
  }, [props.categories]);

  const [view, setView] = useState<any>({
    tags: [],
  });

  useEffect(() => {
    console.log(props.article);
    setView({
      ...view,
      tags: [...props.article.tags, ...props.article.addTags].filter(
        (item) => !props.article.removeTags.includes(item)
      ),
    });
  }, [props.article.addTags, props.article.tags, props.article.removeTags]);

  const handleCategoryChange = (detail: any) => {
    props.handleChange({ [detail.name]: detail.value });
  };

  const handleTitleChange = (_value: any) => {
    props.handleChange({ title: _value });
  };

  const handleEditorChange = (_value: any) => {
    props.handleChange({ description: _value });
  };

  const handleChange = (detail: any) => {
    const _state = { ...props.article };
    _state[detail.name] = detail.value;
    props.handleChange(_state);
  };

  const handleTagAddition = (key: string) => {
    const _state = { ...props.article };
    if (!props.article.tags.includes(key)) {
      _state.addTags = [...props.article.addTags, key];
      _state.removeTags = props.article.removeTags.filter(
        (item: string) => item !== key
      );
    } else {
      _state.removeTags = props.article.removeTags.filter(
        (item: string) => item !== key
      );
    }
    props.handleChange(_state);
  };

  const handleTagRemoval = (key: string) => {
    const _state = { ...props.article };
    if (props.article.tags.includes(key)) {
      _state.removeTags = [...props.article.removeTags, key];
      _state.addTags = props.article.addTags.filter(
        (item: string) => item !== key
      );
    } else {
      _state.addTags = props.article.addTags.filter(
        (item: string) => item !== key
      );
    }
    props.handleChange(_state);
  };

  return (
    <div className="create-article-item two-sided-page">
      <div className="create-article-item__container">
        {/* <OakLabel label="Article title" /> */}
        <BlockEditor
          value={props.article.title}
          handleChange={handleTitleChange}
          fixed
        />
        <BlockEditor
          value={props.article.description}
          handleChange={handleEditorChange}
        />
        {/* <OakEditor
          fixed
          value={props.article.title}
          handleChange={handleTitleChange}
        />
        <OakEditor
          value={props.article.description}
          handleChange={handleEditorChange}
        /> */}
      </div>
      <div className="two-sided-page__right">
        <OakSelect
          name="categoryId"
          label="Category"
          value={props.article.categoryId}
          autocomplete
          shape="sharp"
          gutterBottom
          handleInput={handleCategoryChange}
          optionsAsKeyValue={categoryOptions}
          popupColor="surface"
          color="container"
          fill
        />
        <TagEditor
          tags={view.tags}
          handleRemoval={handleTagRemoval}
          handleAddition={handleTagAddition}
        />
      </div>
    </div>
  );
};
export default CreateItem;
