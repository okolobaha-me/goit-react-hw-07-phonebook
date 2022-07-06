import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const App = () => {
  return (
    <div>
      <h1 className={'mainTitle'}>Phonebook</h1>
      <ContactForm />
      <h2 className={'title'}>Contacts</h2>
      <Filter />
      <ContactList o />
    </div>
  );
};

export default App;
