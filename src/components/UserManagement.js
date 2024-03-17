import React, { useState, useEffect } from 'react';

const UserManagement = () => {
    // State variables to manage user data
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    // Function to fetch list of users from backend
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
            // Refresh user list after successful creation
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
            // Refresh user list after successful deletion
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []); // Fetch users on component mount

    return (
        <div>
            <h2>User Management</h2>
            <div>
                <h3>Create User</h3>
                {/* Form to create new user */}
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const userData = {
                        username: formData.get('username'),
                        // Add other user data fields as needed
                    };
                    createUser(userData);
                }}>
                    <input type="text" name="username" placeholder="Username" required />
                    {/* Add other input fields for user data */}
                    <button type="submit">Create User</button>
                </form>
            </div>
            <div>
                <h3>Delete User</h3>
                {/* Display list of users and provide option to delete */}
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
                {/* Provide option to select user */}
                <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                    <option value="">Select User</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.username}</option>
                    ))}
                </select>
                {/* You can perform actions based on selected user */}
            </div>
        </div>
    );
};

export default UserManagement;