import PropTypes from 'prop-types';
import { Contacts } from './ContactsList.styled';
import { ContactsItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </Contacts>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
