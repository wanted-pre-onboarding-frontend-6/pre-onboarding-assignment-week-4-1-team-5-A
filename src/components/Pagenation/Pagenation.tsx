import useQueryString from 'hooks/useQureyString';
import { FC, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Style';

type Page = {
  page: number;
  active: boolean;
};

type PageNationType = {
  index: number;
  startPage: number;
  endPage: number;
  page: Array<Page | undefined>;
};

interface PageNationProps {
  page: number;
  totalPage: number;
  limit: number;
}

const PageNation: FC<PageNationProps> = ({ page, totalPage, limit }) => {
  const qs = useQueryString();

  // page State
  const [pageList, setPageList] = useState<PageNationType[]>([]);
  const LIMIT_PAGE: number = limit;
  const totalIndex = useMemo(() => Math.ceil(totalPage / LIMIT_PAGE), [totalPage]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const navigate = useNavigate();
  // page qurey setIndex
  useEffect(() => {
    if (!page) return;
    if (page % LIMIT_PAGE === 0) {
      setCurrentIndex(page / LIMIT_PAGE - 1);
    } else {
      setCurrentIndex(Math.floor(page / LIMIT_PAGE));
    }
  }, []);

  // page List
  useEffect(() => {
    setPageList([]);
    setCurrentIndex(0);
    for (let i = 0; i < totalIndex; i++) {
      setPageList((prev) => [
        ...prev,
        {
          index: i,
          startPage: i * LIMIT_PAGE + 1,
          endPage: i * LIMIT_PAGE + LIMIT_PAGE,
          page: Array(LIMIT_PAGE)
            .fill(LIMIT_PAGE)
            .map((_, index) => {
              if (i * LIMIT_PAGE + index + 1 > totalPage) {
                return;
              }
              return { page: i * LIMIT_PAGE + index + 1, active: false };
            }),
        },
      ]);
    }
  }, [totalPage]);

  // page active
  useEffect(() => {
    if (!pageList[currentIndex]) return;
    const newPageList = [...pageList];
    newPageList[currentIndex]?.page.forEach((item) => {
      if (item) {
        item.active = item.page === page;
      }
    });
    setPageList(newPageList);
  }, [page]);

  // page click
  const onClickPage = (page: number) => {
    qs.set('page', String(page));
    navigate(`?${qs.toString()}`);
  };

  // onClickPrev
  const onClickPrev = () => {
    if (currentIndex === 0) return;
    qs.set('page', String(pageList[currentIndex - 1].startPage));
    navigate(`?${qs.toString()}`);
    setCurrentIndex(currentIndex - 1);
  };

  // onCLickNextPage
  const onClickNext = () => {
    if (currentIndex === totalIndex - 1) return;
    qs.set('page', String(pageList[currentIndex + 1].startPage));
    navigate(`?${qs.toString()}`);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <Styled.Wrapper>
      <button
        onClick={() => {
          qs.set('page', '1');
          navigate(`?${qs.toString()}`);
          setCurrentIndex(0);
        }}
      >
        &lt; &lt;
      </button>
      <button disabled={currentIndex === 0} onClick={onClickPrev}>
        &lt;
      </button>
      {pageList.length > 0 &&
        pageList[currentIndex].page.map((list) => {
          if (list)
            return (
              <Styled.Page
                active={page === list.page}
                key={list?.page}
                onClick={() => onClickPage(list.page)}
              >
                {list.page}
              </Styled.Page>
            );
        })}
      <button disabled={currentIndex === totalIndex - 1} onClick={onClickNext}>
        &gt;
      </button>
      <button
        onClick={() => {
          qs.set('page', String(totalPage));
          navigate(`?${qs.toString()}`);
          setCurrentIndex(totalIndex - 1);
        }}
      >
        &gt; &gt;
      </button>
    </Styled.Wrapper>
  );
};
export default PageNation;
