import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';

function Filter() {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <form className={s.filter}>
      <label className={s.filterLabel}>
        <span className={s.filterTitle}>Filter</span>
        <input
          type="text"
          placeholder="Whom are you looking for"
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

export default Filter;
