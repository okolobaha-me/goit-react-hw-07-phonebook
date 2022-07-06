import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from '../../redux/filterSlice';

function Filter() {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  const value = useSelector(state => getFilter(state));

  return (
    <form className={s.filter}>
      <label className={s.filterLabel}>
        <span className={s.filterTitle}>Filter</span>
        <input
          type="text"
          placeholder="Whom are you looking for"
          onChange={handleChange}
          value={value}
        />
      </label>
    </form>
  );
}

export default Filter;
