import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [region, setRegion] = useState('');
  const [_, setSearchParams] = useSearchParams();
  const handleChange = e => {
    setRegion(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!region) return;
    setSearchParams({ region });
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        defaultValue="default"
        name="region"
        required
        onChange={handleChange}
      >
        <option disabled value="default">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
