import Card from '../ui/Card';
import classes from './QuoteItem.module.css';

function MeetupItem(props) {
  return (
    <div className={classes.item}>
      <Card>
        <div className={classes.content}>
          <p>{props.author}</p>
          <h3>{props.quote}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onClickRefresh}>Another quote!</button>
        </div>
      </Card>
    </div>
  );
}

export default MeetupItem;
