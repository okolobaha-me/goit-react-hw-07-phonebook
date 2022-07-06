import s from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contactsSlice';

function ContactItem({ name, phone, id }) {
  const dispatch = useDispatch();
  return (
    <li className={s.item} key={id}>
      <span>
        <span>{name}</span>: <span>{phone}</span>
      </span>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
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
