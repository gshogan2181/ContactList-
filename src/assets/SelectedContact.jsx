import React from "react"

export default function SelectedContact ({ selectedContact }) { 


    return ( 
        <>
        {selectedContact && (
          <div>
            <p>Name: {selectedContact.name}</p>
            <p>Email: {selectedContact.email}</p>
            <p>Phone: {selectedContact.phone}</p>
          </div>
        )}
      </>
    )
}