import ContactItem from './ContactItem';
import s from './ContactList.module.css';
import { useGetContactsQuery } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/filterSlice';

function ContactList() {
  const { data: contacts } = useGetContactsQuery();
  const visibleContacts = useSelector(state =>
    getVisibleContacts(state, contacts)
  );

  // console.log();

  return (
    <>
      {visibleContacts && visibleContacts.length ? (
        <ul className={s.list}>
          {visibleContacts.map(({ name, phone, id }) => (
            <ContactItem name={name} phone={phone} id={id} key={id} />
          ))}
        </ul>
      ) : (
        <p className={s.list}>There is no contact yet</p>
      )}
    </>
  );
}

export default ContactList;
