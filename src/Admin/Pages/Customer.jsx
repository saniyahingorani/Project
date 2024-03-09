import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from 'react'

const CustomerTableContainer = styled.div`
  overflow-x: auto;00
  margin: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #2c3e50; /* Dark yellow background */
  color: #ecf0f1; /* Light text color */
  font-family: 'Arial', sans-serif;
`;

const TableHeader = styled.th`
  padding: 15px;
  text-align: left;
  background-color: #f39c12; /* Dark yellow header background */
`;

const TableData = styled.td`
  padding: 15px;
  border-bottom: 1px solid #34495e; /* Dark border color */
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const EditButton = styled.button`
  background-color: #3498db; /* Blue Edit button */
  color: #ecf0f1;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: #e74c3c; /* Red Delete button */
  color: #ecf0f1;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
`;

// const customersData = [
//   { id: 1, name: 'John Doe', email: 'john@example.com', mobile: '123-456-7890', status: 'Active' },
//   { id: 2, name: 'Jane Smith', email: 'jane@example.com', mobile: '987-654-3210', status: 'Inactive' },
//   // Add more customer data as needed
// ];

function Customer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch()
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/customer`);
    console.log(res.data);
    setData(res.data);
  }

  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/customer/${id}`);
    fetch();
  }
  return (
    <CustomerTableContainer>
      <StyledTable>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Mobile No</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody>
          {
            data.map((value, index, arr) => {

              return (
                <tr className="odd gradeX">
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.mobile}</td>
                  <td>{value.status}</td>

                  <td className="center">
                    <button className='btn btn-danger' onClick={() => deleteHandel(value.id)}>Delete</button>
                    <button className='btn btn-primary'>Edit</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </StyledTable>
    </CustomerTableContainer>
  );
}

export default Customer;
