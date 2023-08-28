import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h2`
  font-size: 30px;
`;
const Desc = styled.p`
  margin: 20px 0;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin-bottom: 10px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SmTm.</Logo>
        <Desc>
          © 2023 Все права защищены. SMTM - ваш надежный партнер в мире
          электроники. Мы предлагаем широкий ассортимент качественной
          электроники по конкурентным ценам. Все товары сертифицированы и
          гарантируют высокое качество.
        </Desc>
      </Left>
      <Center>
        <Title>Ссылки</Title>
        <List>
          <ListItem>
            <Link
              to="/policy"
              style={{ color: "black", textDecoration: "none" }}
            >
              Политика сайта
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/products/all"
              style={{ color: "black", textDecoration: "none" }}
            >
              Каталог товаров
            </Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Контакты</Title>
        <ContactItem>
          <LocationOnIcon />
          Город: Ташкент, Район: Чиланзарский, кв-л Чиланзар-Е, 1
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon />
          +998 (97) 721-79-66
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
