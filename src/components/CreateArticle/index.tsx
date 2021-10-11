import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ArticleCategory } from '../../types/ArticleCategoryType';
import OakButton from '../../oakui/wc/OakButton';
import CreateItem from '../CreateArticle/CreateItem';
import { Article } from '../../types/ArticleType';

interface Props {
  categories: ArticleCategory[];
  saveArticleSync: any;
}

const CreateArticle = (props: Props) => {
  const [state, setState] = useState<any>({
    title: [
      {
        type: 'HEADING',
        data: {
          level: 1,
          text: '',
        },
      },
    ],
    description: [],
    helpful: 0,
    notHelpful: 0,
    views: 0,
    categoryId: '',
    tags: [],
    addTags: [],
    removeTags: [],
  });

  const history = useHistory();

  const handleChange = (_state: any) => {
    setState({ ...state, ..._state });
  };

  const goBack = () => {
    history.goBack();
  };

  const submit = () => {
    const payload: any = {
      id: state.id,
      title: state.title,
      categoryId: state.categoryId,
      description: state.description,
      addTags: state.addTags,
      removeTags: state.removeTags,
    };
    props.saveArticleSync(payload).then((response: any) => {
      history.goBack();
    });
  };

  return (
    <>
      {state && (
        <CreateItem
          article={state}
          categories={props.categories}
          handleChange={handleChange}
        />
      )}
      <div className="view-article__footer oak-bg-global">
        <div className="view-article__footer__left">Creating new article</div>
        <div className="view-article__footer__right">
          <OakButton
            shape="sharp"
            theme="default"
            variant="outline"
            handleClick={goBack}
          >
            Cancel
          </OakButton>
          <OakButton shape="sharp" theme="default" handleClick={submit}>
            Save
          </OakButton>
        </div>
      </div>
    </>
  );
};

export default CreateArticle;
