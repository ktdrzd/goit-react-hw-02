import { useEffect, useState } from 'react';
import { Description } from './description/Description';
import { Feedback } from './feedback/Feedback';
import { Options } from './options/Options';
import { Notification } from './notification/Notification';
import style from './App.module.css';

const getValues = () => {
  const savedValues = window.localStorage.getItem('saved-values');
  if (savedValues !== null) {
    return JSON.parse(savedValues);
  }

  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

function App() {
  const [values, setValues] = useState(getValues());
  const totalFeedbacks = values.good + values.neutral + values.bad;

  const leaveFeedbacks = option => {
    setValues({
      ...values,
      [option]: values[option] + 1,
    });
  };

  const resetFeedbacks = () => {
    setValues({
      ...values,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('saved-values', JSON.stringify(values));
  }, [values]);

  const hiddenFeedbacks = totalFeedbacks === 0;

  return (
    <div className={style.container}>
      <Description />
      <Options
        onUpdate={leaveFeedbacks}
        hiddenFeedbacks={hiddenFeedbacks}
        resetFeedbacks={resetFeedbacks}
      />
      {hiddenFeedbacks ? (
        <Notification />
      ) : (
        <Feedback
          values={values}
          totalFeedbacks={totalFeedbacks}
        />
      )}
    </div>
  );
}

export default App;
