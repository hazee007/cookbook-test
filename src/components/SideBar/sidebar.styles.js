import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SideDiv = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UList = styled.ul`
  list-style-type: none;
`;

export const List = styled.li`
  padding: 10px;
  font-size: 27px;
`;

export const LinkAdd = styled(Link)`
  color: black;
  &:link {
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonWrapper = styled.div`
  margin-right: 160px;
`;
