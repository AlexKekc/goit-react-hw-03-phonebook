import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactData,
  DeleteButton,
} from './ContactsListItem.styled.js';

export const ContactsItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactItem key={id}>
      <ContactData>{name}:</ContactData>
      <ContactData>{number}</ContactData>
      <DeleteButton type="button" onClick={onDeleteContact}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
