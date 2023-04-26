
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Segment } from "semantic-ui-react";

export const NavigationContainer = styled(Segment)`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;


export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;