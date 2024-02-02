import style from './Description.module.css';

export const Description = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Sip Happens Café</h2>
      <p className={style.text}>Please leave your feedback about our service by selecting one of the options below.</p>
    </div>
  );
};
