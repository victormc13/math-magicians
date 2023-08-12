import { useState, useEffect } from 'react';
import './Quotes.css';

function Quotes() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const url = 'https://api.api-ninjas.com/v1/quotes?';

  useEffect(() => {
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'wlX0HgqL8z3SJ11n/DpE0A==azPHOuUP45BKYGuW',
      },
    };

    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(url, fetchOptions);
        const dataAPI = await response.json();
        const firstQuote = dataAPI[0];
        setQuote(firstQuote);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <article className="quote-container">
        <p>
          Sorry, something went wrong. Let&apos;s try again.
        </p>
      </article>
    );
  }

  return (
    <article className="quote-container">
      {loading && (
        <p>
          Loading...
        </p>
      )}
      {quote && (
        <>
          <h4>{quote.category}</h4>
          <blockquote>{quote.quote}</blockquote>
          <span>
            {'- '}
            {quote.author}
            {' -'}
          </span>
        </>
      )}
    </article>
  );
}

export default Quotes;
