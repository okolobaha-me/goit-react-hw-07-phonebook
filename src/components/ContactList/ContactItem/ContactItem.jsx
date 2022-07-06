import s from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../../redux/contactsSlice';

function ContactItem({ name, phone, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li className={s.item} key={id}>
      <span>
        <span>{name}</span>: <span>{phone}</span>
      </span>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
        disabled={isLoading}
      >
        Delete contact
      </button>
    </li>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
