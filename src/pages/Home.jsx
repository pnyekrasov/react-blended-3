import { Container, CountryList, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getCountries()
      .then(setCountries)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Section>
      <Container>
        {!isLoading ? <CountryList countries={countries} /> : <Loader />}
      </Container>
    </Section>
  );
};
