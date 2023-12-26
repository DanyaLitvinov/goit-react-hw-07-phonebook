import React from 'react';
import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { actionFilter } from '../../redux/Filters/FilterSlice';
import { setFilter } from '../../redux/Contacts/ContactsSelectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(setFilter);


  const handleChange = e => {
    dispatch(actionFilter(e.target.value));
  };


  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleChange}
      />
    </Label>
  );
};

export default Filter;