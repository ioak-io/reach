import React, { useState, useEffect } from 'react';
import { Article } from '../../types/ArticleType';

interface Props {
  article: Article;
}

const FeedbackView = (props: Props) => {
  const [providedFeedbacks, setProvidedFeedbacks] = useState<any[]>([]);

  const feedback = (type: any) => {
    if (providedFeedbacks.includes(type)) {
      // removeArticleFeedback({
      //   variables: {
      //     articleId: props.article.id,
      //     type,
      //   },
      // }).then(() => {
      //   sendMessage('notification', true, {
      //     type: 'success',
      //     message: 'You have withdrawn your feedback',
      //   });
      // });
    } else {
      // addArticleFeedback({
      //   variables: {
      //     articleId: props.article.id,
      //     type,
      //   },
      // }).then(() => {
      //   sendMessage('notification', true, {
      //     type: 'success',
      //     message: 'Thank you for sharing your feedback',
      //   });
      // });
    }
  };

  // useEffect(() => {
  //   if (props.article?.feedback) {
  //     setProvidedFeedbacks(
  //       props.article.feedback.map((item: any) => item.type)
  //     );
  //   } else {
  //     setProvidedFeedbacks([]);
  //   }
  // }, [props.article.feedback]);

  return (
    <div className="action-footer position-left post-feedback align-horizontal">
      <div className="align-horizontal">
        <i
          className={`material-icons helpful ${
            providedFeedbacks.includes('helpful') ? ' active' : ''
          }`}
          onClick={() => feedback('helpful')}
        >
          thumb_up
        </i>
        <div className="typography-5">{props.article.helpful}</div>
      </div>
      <div className="align-horizontal">
        <i
          className={`material-icons not-helpful ${
            providedFeedbacks.includes('notHelpful') ? ' active' : ''
          }`}
          onClick={() => feedback('notHelpful')}
        >
          thumb_down
        </i>
        <div className="typography-5">{props.article.notHelpful}</div>
      </div>
    </div>
  );
};

export default FeedbackView;
