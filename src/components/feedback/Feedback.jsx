import style from './Feedback.module.css';

export const Feedback = ({ values: { good, neutral, bad }, totalFeedbacks }) => {
  const positiveFeedbacks = Math.round(((good + neutral) / totalFeedbacks) * 100);

  return (
    <div className={style.list}>
      <p className={style.item}>Good: {good}</p>
      <p className={style.item}>Neutral: {neutral}</p>
      <p className={style.item}>Bad: {bad}</p>
      <p className={style.item}>Total: {totalFeedbacks}</p>
      <p className={style.item}>Positive: {positiveFeedbacks}%</p>
    </div>
  );
};
