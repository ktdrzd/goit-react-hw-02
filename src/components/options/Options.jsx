import style from './Options.module.css';

export const Options = ({ onUpdate, hiddenFeedbacks, resetFeedbacks }) => {
  return (
    <div className={style.list}>
      <button onClick={() => onUpdate('good')} className={style.item}>
        Good
      </button>
      <button onClick={() => onUpdate('neutral')} className={style.item}>
        Neutral
      </button>
      <button onClick={() => onUpdate('bad')} className={style.item}>
        Bad
      </button>
      {!hiddenFeedbacks && <button onClick={resetFeedbacks} className={style.item}>Reset</button>}
    </div>
  );
};
