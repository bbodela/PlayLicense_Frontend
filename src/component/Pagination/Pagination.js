import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import { useState } from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate, color }) => {
  const [isFocus, setIsFocus] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <List>
        {pageNumbers.map((number) => (
          <ListItem
            key={number}
            color={color}
            focus={isFocus === number}
            onClick={() => {
              paginate(number);
              setIsFocus(number);
            }}
          >
            <Text color={color}>{number}</Text>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: none;
  padding: 1px;
  text-align: center;
`;

const ListItem = styled.li`
  display: inline-block;
  font-family: "NotoSansCJKkr-Bold";
  font-size: 16px;
  letter-spacing: -0.5px;
  margin: 0 5px;
  width: 21px;
  color: ${(props) => (props.focus ? color.orange : color.black4)};

  ${(props) =>
    props.color &&
    css`
      color: ${(props) => (props.focus ? props.color : color.black4)};
    `};

  &:hover {
    cursor: pointer;
    color: ${(props) => (props.color ? props.color : color.orange)};
  }
`;

const Text = styled.span`
  &:hover {
    border: none;
    color: ${(props) => (props.color ? props.color : color.orange)};
  }
`;
export default Pagination;
