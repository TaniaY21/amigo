import { useEffect, useState } from 'react';
import QuoteItem from '../components/Quotes/QuoteItem';

function AllMeetupsPage() {
  const [loadedQuote, setLoadedQuote] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://amigo-55628-default-rtdb.europe-west1.firebasedatabase.app/quotes.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const quotesArray = [];
        for (const key in data) {
          const quote = {
            id: key,
            ...data[key],
          };
          quotesArray.push(quote);
        }

        let randomQuote =
          quotesArray[Math.floor(Math.random() * quotesArray.length)];

        console.log('RANDOM QUOTE', randomQuote);
        console.log('RANDOM QUOTE AUTHOR', randomQuote.author);

        setLoadedQuote(randomQuote);
        setIsLoading(false);
      });
  }, []);

  function handleRefresh() {
    window.location.reload(true);

    console.log('refreshed');
  }

  if (!isLoading) {
    return (
      <section>
        <h1>Your inspirational quote</h1>
        <QuoteItem
          key={loadedQuote.id}
          author={loadedQuote.author}
          quote={loadedQuote.quote}
          onClickRefresh={handleRefresh}
        />
      </section>
    );
  } else {
    return <h2>Loading from firebase 🔥</h2>;
  }
}

export default AllMeetupsPage;
