
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Segment } from "semantic-ui-react";

export const NavigationContainer = styled(Segment)`
  height: 70px;
  width: 47%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px auto 15px auto!important;
`;


export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;