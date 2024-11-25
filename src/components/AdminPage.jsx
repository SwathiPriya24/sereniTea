import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        // Initial data fetch
        fetchAccounts();
    }, []);

    const fetchAccounts = () => {
        axios.get('http://localhost/serenitea/fetchAccounts.php')
            .then(response => {
                setAccounts(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    const deleteAccount = (id) => {
        axios.post('http://localhost/serenitea/deleteUser.php', { id })
            .then(response => {
                if (response.data.success) {
                    alert(response.data.message);
                    // Remove deleted account from the state
                    setAccounts(accounts.filter(account => account.id !== id));
                } else {
                    alert(response.data.message);
                }
            })
            .catch(error => {
                console.error("Error deleting account:", error);
            });
    };

    return (
        <div className=' adminpage'>
            <h2 className='adminpageht text-center'>User List</h2>
            <div className='container d-flex justify-content-center align-items-center mb-4'>
                <table className='tableadmin' border="1" cellPadding="5" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.length > 0 ? (
                            accounts.map((account, index) => (
                                <tr key={index}>
                                    <td>{account.id}</td>
                                    <td>{account.username}</td>
                                    <td>{account.email}</td>
                                    <td className='deletetable d-flex justify-content-center align-items-center'>
                                        <button className='deleteuserbtn ' onClick={() => deleteAccount(account.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No data found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPage;
