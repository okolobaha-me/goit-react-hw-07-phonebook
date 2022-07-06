import ContactItem from './ContactItem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/contactsSlice';

function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);

  return visibleContacts.length ? (
    <ul className={s.list}>
      {visibleContacts.map(({ name, phone, id }) => (
        <ContactItem name={name} phone={phone} id={id} key={id} />
      ))}
    </ul>
  ) : (
    <p className={s.list}>There is no contact yet</p>
  );
}

export default ContactList;
