import { Field, Form, Formik } from 'formik';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from '../../redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import shortID from 'shortid';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const isEmptyString = str => {
    return str.length === 0;
  };

  const isAlreadyExist = name => {
    return contacts.some(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleSubmit = ({ name, phone }, actions) => {
    if (isEmptyString(name) || isEmptyString(phone)) {
      Notify.failure("U can't add empty contact");
      return;
    }
    if (isAlreadyExist(name)) {
      Notify.failure(
        'Contact with same name is already exist please entre new name'
      );
      return;
    }

    dispatch(addContact({ name, phone, id: shortID.generate() }));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: '', phone: '' }} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label className={s.formLabel}>
          <span className={s.formTitle}>Name</span>
          <Field
            className={s.fromInput}
            type="text"
            placeholder="Please enter contact name"
            name="name"
          />
        </label>

        <label className={s.formLabel}>
          <span className={s.formTitle}>Phone number</span>
          <Field
            className={s.fromInput}
            type="tel"
            placeholder="Please enter contact phone number"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            s
          />
        </label>

        <button className={s.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
