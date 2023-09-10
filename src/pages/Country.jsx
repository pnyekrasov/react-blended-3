import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCounty] = useState(null);
  const location = useLocation();
  const { countryId } = useParams();

  useEffect(() => {
    if (!countryId) return;
    setIsLoading(true);
    fetchCountry(countryId)
      .then(setCounty)
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [countryId]);
  const backLink = location?.state?.from ?? '/';

  return (
    <Section>
      <Link
        to={backLink}
        style={{
          marginBottom: '60px',
          color: '#f2f2f2',
          letterSpacing: '0.06em',
          textDecoration: 'underline',

          borderColor: 'gray',
        }}
      >
        Go Back
      </Link>
      {isLoading && <Loader />}
      <Container>{country && <CountryInfo {...country} />}</Container>
    </Section>
  );
};
