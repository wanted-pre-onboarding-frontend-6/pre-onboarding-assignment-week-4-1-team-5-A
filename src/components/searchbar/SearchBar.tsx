import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faSearch);

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>('');
  const navigate = useNavigate();

  const searchValueHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`?q=${searchValue}`);
  };

  return (
    <form onSubmit={searchValueHandler}>
      <Input
        type="text"
        placeholder="검색어를 입력해주세요"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <FontAwesomeIcon icon={['fas', 'search']} />
    </form>
  );
}

export default SearchBar;

const Input = styled.input`
  border: 1px solid;
  border-radius: 10px;
`;
