import styles from './Form.module.scss';

const Form = () => {
  return (
    <div className="container">
      <section className={styles.sectionForm}>
        <h1>Form</h1>
        <div className={styles.wrapper}>
          <form>
            <label className={styles.labelLastName} htmlFor="lastName">
              Last Name
            </label>
            <input type="text" name="lastName" id="lastName" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;
