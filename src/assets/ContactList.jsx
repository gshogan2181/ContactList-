import ContactRow from "./ContactRow";
import {useState, useEffect} from "react"; 
const API_URL = https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com

const ContactList =() => {

    const [contacts, setContacts]= useState ([]);
    const [name,setName]= useState ("")


    useEffect(() => {
        const handleContacts = async () => {
            try {
                const reponse = await fetch (API_URL);
                const contacts = await response.json ();
                setContacts(contacts);
            } catch (error) {
                console.error(error);
            }
        }
     handleContacts();
    } , []);

    return(
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <body>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
        
                {contacts.map((contacts) => <ContactRow key={contacts.id}contact={contact}/>)}
            </body>
        </table>




    )

}

export default ContactList;