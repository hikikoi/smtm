import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #fff;
  height: 60px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

// Left

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

// Center

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h2`
  font-weight: 900;
  font-size: 30px;
  ${mobile({ fontSize: "24px" })}
`;

// Right

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>РУ</Language>
          <SearchContainer>
            <Input placeholder="Искать..." />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{color: "black", textDecoration: "none"}}><Logo>SmTm.</Logo></Link>
        </Center>
        <Right>
          <MenuItem>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/auth/register"
            >
              СОЗДАТЬ
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/auth/login"
            >
              ЗАЙТИ
            </Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="info">
              <Link style={{color: "black"}} to="/cart"><ShoppingCartOutlined /></Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
