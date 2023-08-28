import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h2`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  border: 1px solid lightgrey;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
   ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.div``;

const ProductID = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  margin: 10px 0;
  height: 1px;
`;

const ProdAmountCont = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
   ${mobile({ margin: "5px 15px" })}
`;

const ProdAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const SummaryTitle = styled.h2`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  border: none;
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Lorem, ipsum.</Title>
        <Top>
          <TopButton>Lorem, ipsum.</TopButton>
          <TopTexts>
            <TopText>Lorem, ipsum.(2)</TopText>
            <TopText>Lorem, ipsum.(0)</TopText>
          </TopTexts>
          <TopButton type="filled">Lorem, ipsum dolor.</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://imgholder.ru/400x400/8493a8/adb9ca&text=IMAGE&font=kelson" />
                <Details>
                  <ProductName>
                    <b>Product:</b>Lorem ipsum dolor sit.
                  </ProductName>
                  <ProductID>
                    <b>ID:</b> 90012
                  </ProductID>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProdAmountCont>
                  <Add />
                  <ProdAmount>2</ProdAmount>
                  <Remove />
                </ProdAmountCont>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://imgholder.ru/400x400/8493a8/adb9ca&text=IMAGE&font=kelson" />
                <Details>
                  <ProductName>
                    <b>Product:</b>Lorem ipsum dolor sit.
                  </ProductName>
                  <ProductID>
                    <b>ID:</b> 90012
                  </ProductID>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProdAmountCont>
                  <Add />
                  <ProdAmount>2</ProdAmount>
                  <Remove />
                </ProdAmountCont>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ЦЕНА ТОВАРОВ</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Промежуточный итог</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Цена доставки</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Скидки</SummaryItemText>
              <SummaryItemPrice>$ 0.08</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Итого</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>Купить</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
