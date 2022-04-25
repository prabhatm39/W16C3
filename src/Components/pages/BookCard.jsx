import React from "react";
import { Link } from "react-router-dom";
import styled  from "styled-components";

export const Flex = styled.div`
margin-top: 10px;
margin-left: 10px;
`;
export const BookCard = (props) => {
  const { id, title, isbn, pageCount, thumbnailUrl } = props;
  return (
    <>
    <Link to = {`http://localhost:8080/books/${id}`}>
      <Flex >
        <img src={thumbnailUrl} alt={title} height = "200px" width={"200px"} />
        <h3>{title}</h3>
        <h4>{isbn}</h4>
      </Flex>
    </Link>
    </>
  );
};
