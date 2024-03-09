// ContactTable.js

import React from 'react';

const ManageContact = ({ contacts }) => {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    backgroundColor: 'darkyellow',
  };

  const thTdStyle = {
    border: '1px solid black',
    padding: '10px',
    textAlign: 'left',
    backgroundColor: 'black',
    color: 'white',
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Contact Information</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Email</th>
            <th style={thTdStyle}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td style={thTdStyle}>{contact.name}</td>
              <td style={thTdStyle}>{contact.email}</td>
              <td style={thTdStyle}>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageContact;
