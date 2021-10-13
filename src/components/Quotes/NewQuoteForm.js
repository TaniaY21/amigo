import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewQuoteForm.module.css';

function NewMeetupForm(props) {
  const authorInputRef = useRef();
  const quoteInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredQuote = quoteInputRef.current.value;

    const quoteData = {
      author: enteredAuthor,
      quote: enteredQuote,
      id: Math.random(),
    };

    props.onAddQuote(quoteData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="address">Author</label>
          <input type="text" required id="address" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="quote">Quote</label>
          <textarea id="quote" required rows="5" ref={quoteInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Quote</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
