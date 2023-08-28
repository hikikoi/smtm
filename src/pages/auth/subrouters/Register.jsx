import React from "react";
import styled from "styled-components";
import regImg from "../../../images/reg_img.gif";
import { mobile } from "../../../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  background-color: #ff9500;
`;

const Image = styled.img`
  width: 300px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: white;
  border: 3px solid #ff9500;
  cursor: pointer;
`;

const Auth = styled.div`
  width: 100%;
  display: flex;
  gap: 0 50px;
`;

const Register = () => {
  return (
    <Container>
      <Image src={regImg} />
      <Wrapper>
        <Title>REGISTER</Title>
        <Form>
          <Input placeholder="Имя" />
          <Input placeholder="Фамилия" />
          <Input placeholder="email" />
          <Input placeholder="Имя пользователя" />
          <Input placeholder="Пароль" />
          <Input placeholder="Подтвердите пароль" />
          <Agreement>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio culpa
            beatae quisquam. <b>PRIVACY POLICY</b>
          </Agreement>
          <Auth>
            <Button>СОЗДАТЬ</Button>
            <Link
              style={{ color: "black", textDecoration: "none", lineHeight:"30px" }}
              to="/auth/login"
            >
              Есть аккаунт?  <br /> <span style={{ color: "blue" }}>ЗАЙТИ</span>
            </Link>
          </Auth>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
