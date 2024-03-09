import React from 'react';

const ManageEmployees = () => {
  const tableStyle = {
    backgroundColor: 'darkyellow',
    color: 'black',
    borderCollapse: 'collapse',
    width: '100%',
  };

  const thTdStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'center',
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thTdStyle}>ID</th>
          <th style={thTdStyle}>Name</th>
          <th style={thTdStyle}>Specialist/Coordinator</th>
          {/* Add more header columns as needed */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={thTdStyle}>1</td>
          <td style={thTdStyle}>James Smith</td>
          <td style={thTdStyle}>Project Manager</td>
        </tr>
        <tr>
          <td style={thTdStyle}>2</td>
          <td style={thTdStyle}>Emily Johnson</td>
          <td style={thTdStyle}>Color Consultant</td>
          {/* Add more rows with employee data */}
        </tr>
        <tr>
          <td style={thTdStyle}>3</td>
          <td style={thTdStyle}>Olivia Taylor</td>
          <td style={thTdStyle}>Marketing Specialist</td>
          {/* Add more rows with employee data */}
        </tr>
        <tr>
          <td style={thTdStyle}>4</td>
          <td style={thTdStyle}>Matthew Jones</td>
          <td style={thTdStyle}>Safety Officer</td>
          {/* Add more rows with employee data */}
        </tr>
        <tr>
          <td style={thTdStyle}>5</td>
          <td style={thTdStyle}>Isabella Carter</td>
          <td style={thTdStyle}>Quality Control Inspector</td>
          {/* Add more rows with employee data */}
        </tr>
       
      </tbody>
    </table>
  );
};

export default ManageEmployees;
