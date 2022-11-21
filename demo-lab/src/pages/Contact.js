import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import List from './List';

function Contact(){
    
      const contacts = [
        {
            id: 1,
            name: "Manish",
            contact: 8573761355
        },
        {
            id: 2,
            name: "Hardik",
            contact:8572009265 
        },
        {
            id: 3,
            name: "Pramod",
            contact: 8573761359
        }
        
    ];

    return(
      <div>
      <Navbar/>
      <Content title="Contact" content="This is the contact Page"/>
      {contacts.map(contact => (<List
        id = {contact.id}
        name = {contact.name}
        contact = {contact.contact}
      />))}
      </div>
    )
}

export default Contact