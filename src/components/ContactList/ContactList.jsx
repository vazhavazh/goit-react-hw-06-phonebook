import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { Li, Ul, Span, DeleteButton } from './ContactListStyled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.contacts);
  const getFilteredContacts = () => {
    const normalizedFilter = filter.trim().toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <Ul>
      {filteredContacts.map(contact => (
        <Li key={contact.id}>
          <Span>
            {contact.name} {contact.number}
          </Span>
          <DeleteButton
            type="button"
            onClick={() => {
              dispatch(deleteContact(contact.id));
            }}
          >
            Delete
          </DeleteButton>
        </Li>
      ))}
    </Ul>
  );
};
