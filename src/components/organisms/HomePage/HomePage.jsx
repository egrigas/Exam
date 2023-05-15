import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { StyledHomePage, StyledContainer } from './styles'
import UserList from '../../molecules/UserList/UserList'
import Form from '../../molecules/Form/Form'
import Box from '../../atoms/Box'

const HomePage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users')
      setUsers(response.data)
    } catch (error) {
      console.log('Error fetching users: ', error);
    }
  }

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user])
  }

  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter(user => user._id !== userId))
  }

  return (
    <StyledHomePage>
      <StyledContainer>
        <Box>
          <Form addUser={addUser} />
        </Box>
        <Box>
          <UserList users={users} deleteUser={deleteUser} />
        </Box>
      </StyledContainer>
    </StyledHomePage>
  )
}

export default HomePage
