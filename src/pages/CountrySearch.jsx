import {
  Container,
  SearchForm,
  Section,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get('region');
    if (!query) return;
    setIsLoading(true);
    fetchByRegion(query)
      .then(setCountries)
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const searchRegion = region => {
    setSearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm searchRegion={searchRegion} />
        {isLoading ? <Loader /> : <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
