import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './PageNav.scss';

interface Props {
  pageNo: number;
  totalPages?: number;
  handlePageChange: any;
}

const PageNav = (props: Props) => {
  const [range, setRange] = useState<number[]>([]);

  useEffect(() => {
    if (!props.totalPages || props.totalPages === 0) {
      setRange([]);
    } else {
      let start = Math.floor(props.pageNo / 3) * 3 + 1;
      if (props.pageNo % 3 === 0) {
        start -= 3;
      }
      let end = start + 2;
      if (end > props.totalPages) {
        end = props.totalPages;
      }

      let i = start;
      const _range = [];
      while (i <= end) {
        _range.push(i);
        i += 1;
      }
      setRange(_range);
    }
  }, [props.pageNo, props.totalPages]);

  const handlePageChange = (pageNo: number) => {
    props.handlePageChange(pageNo);
  };

  const previousPage = () => {
    props.handlePageChange(props.pageNo - 1);
  };

  const nextPage = () => {
    props.handlePageChange(props.pageNo + 1);
  };

  return (
    <div className="page-nav">
      {props.pageNo > 1 && (
        <button className="page-nav__button" onClick={previousPage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      {range.map((pageNo) => (
        <button
          key={pageNo}
          className={`page-nav__button ${
            pageNo === props.pageNo ? 'page-nav__button--active' : ''
          }`}
          onClick={() => handlePageChange(pageNo)}
        >
          {pageNo}
        </button>
      ))}
      {(!props.totalPages || props.pageNo < props.totalPages) && (
        <button className="page-nav__button" onClick={nextPage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </div>
  );
};

export default PageNav;
