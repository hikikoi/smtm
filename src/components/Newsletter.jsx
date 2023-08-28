import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  outline: none;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #ff9500;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Обратная связь</Title>
      <Desc>Если есть вопросы, отправьте нам письмо !</Desc>
      <InputContainer>
        <Input placeholder="Ваша эл. почта" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
