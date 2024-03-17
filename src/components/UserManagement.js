import React, { useState, useEffect } from 'react';

const UserManagement = ({ selectedUser, setSelectedUser }) => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error.message);
        }
    };

    // Function to handle user creation
    const createUser = async (userData) => {
        try {
            const response = await fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if (!response.ok) {
                throw new Error('Failed to create user');
            }
            fetchUsers();
        } catch (error) {
            console.error('Error creating user:', error.message);
        }
    };

    // Function to handle user deletion
    const deleteUser = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8080/users/${userId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        console.log('Selected User:', selectedUser);
        console.log('Type:', typeof selectedUser);
    }, [selectedUser]); 

    return (
        <div>
            <h2>User Management</h2>
            <div>
                <h3>Create User</h3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const userData = {
                        username: formData.get('username'),
                    };
                    createUser(userData);
                }}>
                    <input type="text" name="username" placeholder="Username" required />
                    <button type="submit">Create User</button>
                </form>
            </div>
            <div>
                <h3>Delete User</h3>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.username}
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Select User</h3>
                <select value={selectedUser || ''} onChange={(e) => setSelectedUser(e.target.value)}>
                    <option value="">Select User</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.username}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default UserManagement;