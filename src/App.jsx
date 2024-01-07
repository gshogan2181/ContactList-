import React from 'react';
import ContactList from './assets/ContactList';
import SelectedContact from './assets/SelectedContact';
import { useState, useEffect } from 'react';


export default function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContactId, setSelectedContactId] = useState(null); 
            //changed

  const selectedContact = contacts.find((contact) => contact.id === selectedContactId);

  useEffect(()=> { 
    async function fetchContacts() { 
        try { 
            const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
            const data = await response.json(); 
            setContacts(data);
            } catch(error) { 
        console.error(error);
    }
}
    fetchContacts();
}, []); 

  return (
    <>
      <ContactList contacts={contacts} setSelectedContactId= {setSelectedContactId}/>
      <SelectedContact selectedContact={selectedContact}/>
    
    </>
  );
}
