import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteUserButton from '../DeleteUserButton/DeleteUserButton';
import UpdateUserButton from '../UpdateUserButton';
import EditUser from '../EditUser/EditUser';
import {
  StyledUserListContainer,
  StyledUserCard,
  StyledUserNumber,
  StyledUserName,
  StyledUserEmail,
  StyledUserAge,
  StyledUserCardButtons,
} from './styles';
import Pagination from '../../atoms/Pagination/Pagination';

const UserList = ({ users, deleteUser, updateUser, usersPerPage = 10 }) => {
  const [usersData, setUsersData] = useState(users);
  const [editingUserId, setEditingUserId] = useState(null);
  const [displayData, setDisplayData] = useState(1);

  useEffect(() => {
    setUsersData(users);
  }, [users]);

  // Handles delete function for the DeleteUserButton
  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/users/${userId}`
      );
      if (response.status === 200) {
        console.log('User deleted: ', response.data);
        deleteUser(userId);
      }
    } catch (error) {
      console.log('Error deleting user: ', error);
    }
  };

  // Handles update function for the EditUser component and UpdateUserButton
  const handleUpdate = (updatedUser) => {
    setUsersData(
      usersData.map((user) =>
        user._id === updatedUser._id ? updatedUser : user
      )
    );
    setEditingUserId(null);
  };

  const indexOfLastUser = displayData * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <StyledUserListContainer>
      <h2>Registered Users</h2>
      <div>
        {currentUsers.map((user, index) => (
          <StyledUserCard key={user._id}>
            {editingUserId === user._id ? (
              <EditUser user={user} handleUpdate={handleUpdate} />
            ) : (
              <>
                <StyledUserNumber>
                  {indexOfFirstUser + index + 1}.
                </StyledUserNumber>
                <StyledUserName>
                  {user.name} {user.surname}
                </StyledUserName>
                <StyledUserEmail>{user.email}</StyledUserEmail>
                <StyledUserAge>Age: {user.age}</StyledUserAge>
                <StyledUserCardButtons>
                  <UpdateUserButton
                    onClick={() => setEditingUserId(user._id)}
                  />
                  <DeleteUserButton
                    userId={user._id}
                    handleDelete={handleDelete}
                  />
                </StyledUserCardButtons>
              </>
            )}
          </StyledUserCard>
        ))}
      </div>
      <Pagination
        usersData={usersData}
        usersPerPage={usersPerPage}
        setCurrentPage={setDisplayData}
      />
    </StyledUserListContainer>
  );
};

export default UserList;
