import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCounty] = useState(null);

  const { countryId } = useParams();

  useEffect(() => {
    if (!countryId) return;
    setIsLoading(true);
    fetchCountry(countryId)
      .then(setCounty)
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [countryId]);

  return (
    <Section>
      {isLoading && <Loader />}
      <Container>{country && <CountryInfo {...country} />}</Container>
    </Section>
  );
};
