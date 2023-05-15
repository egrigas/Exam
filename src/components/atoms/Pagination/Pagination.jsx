import React from 'react';
import { StyledPaginationContainer, StyledPaginationButton } from './styles';

const Pagination = ({ usersData, usersPerPage, setCurrentPage }) => {
  const totalPages = Math.ceil(usersData.length / usersPerPage);

  const generatePagination = () => {
    return Array.from({ length: totalPages }, (_, i) => (
      <StyledPaginationButton
        key={i + 1}
        onClick={() => setCurrentPage(i + 1)}
      >
        {i + 1}
      </StyledPaginationButton>
    ));
  };

  return <StyledPaginationContainer>{generatePagination()}</StyledPaginationContainer>;
};

export default Pagination;
