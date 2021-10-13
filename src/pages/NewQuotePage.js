import { useHistory } from 'react-router-dom';

import NewQuoteForm from '../components/Quotes/NewQuoteForm';

function NewQuotePage() {
  const history = useHistory();

  function addQuoteHandler(meetupData) {
    fetch(
      'https://amigo-55628-default-rtdb.europe-west1.firebasedatabase.app/quotes.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewQuoteForm onAddQuote={addQuoteHandler} />
    </section>
  );
}

export default NewQuotePage;
