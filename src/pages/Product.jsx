/* eslint-disable react/jsx-pascal-case */
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h2`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #ff9500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #ff9500;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://imgholder.ru/600x600/9500aa/adb9ca&text=PRODUCT&font=kelson" />
        </ImgContainer>
        <InfoContainer>
          <Title>Harmony FM</Title>
          <Desc>
            Harmony FM - твоя музыкальная гармония! <br />
            Harmony FM - это радиостанция, которая создана для того, чтобы
            принести в твою жизнь истинную музыкальную радость и гармонию. Мы
            стремимся предложить нашим слушателям незабываемый опыт, погружая их
            в удивительный мир музыки.
            <br />
            Наши диджеи тщательно отбирают самые лучшие композиции из различных
            жанров и эпох, чтобы создать непрерывный поток прекрасных мелодий.
            Независимо от того, любите ли вы популярные хиты, классическую
            музыку, джаз, рок или электронную музыку, вы обязательно найдете
            что-то, что вас вдохновит и поднимет настроение.
            <br />
            Harmony FM также является площадкой для талантливых и молодых
            исполнителей, которые хотят поделиться своей музыкой с миром. Мы
            поддерживаем музыкальные новаторы и стараемся предоставить им
            платформу для раскрытия своего творчества.
            <br />
            Наши ведущие передач предлагают интересные интервью с известными
            музыкантами, а также обсуждают последние музыкальные тренды и
            события. Мы стараемся быть в курсе всех актуальных новостей из мира
            музыки и поделиться этой информацией с нашими слушателями.
            <br />
            Так что настройся на "Harmony FM" и окунись в удивительный мир
            звуков и мелодий, который принесет гармонию в твою жизнь.
          </Desc>
          <Price>$20</Price>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
