import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-templte-column : repeat(4, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    axios.get('http://localhost:8080/books')
    .then(res =>{
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */
          
          }
      </Grid>
    </>
  );
};
export default Books;
