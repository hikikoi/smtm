import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newslatter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h2`
  margin: 20px;
  font-size: 40px;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0 25px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px " })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  console.log(location)
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Все товары</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Сортировка товаров:</FilterText>
          <Select>
            <Option disabled selected>
              Все
            </Option>
            <Option>Бренд</Option>
            <Option>Модель</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Фильтр товаров:</FilterText>
          <Select>
            <Option disabled selected>
              Цена (по возрастанию)
            </Option>
            <Option>Цена (по убывания)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newslatter />
      <Footer />
    </Container>
  );
};

export default ProductList;
