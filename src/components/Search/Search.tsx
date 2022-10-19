import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './Style';

library.add(faSearch);

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const navigate = useNavigate();

  const searchValueHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`?q=${searchValue}`);
  };

  return (
    <Styled.Form onSubmit={searchValueHandler}>
      <Styled.Input
        type="text"
        placeholder="검색어를 입력해주세요"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Styled.Submit>
        <FontAwesomeIcon icon={['fas', 'search']} />
      </Styled.Submit>
    </Styled.Form>
  );
};
export default Search;
