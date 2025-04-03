import ContactRow from "./ContactRow"; 
import { useState, useEffect } from 'react';

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

function ContactList() {
  const [contacts, setContacts] = useState(dummyContacts);
  console.log("Contacts: ", contacts);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        console.log("Fetched data:", result); 
        setContacts(result); 
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }
    fetchContacts();
  }, []);
  return (
    <div>
      <h2>Contact List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Phone</th><th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <ContactRow key={contact.id} contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;