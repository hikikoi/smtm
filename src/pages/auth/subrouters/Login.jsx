import React from "react";
import styled from "styled-components";
import signImg from "../../../images/sign_img.gif";
import { Link } from "react-router-dom";
import { mobile } from "../../../responsive";

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
  width: 25%;
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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: white;
  border: 3px solid #ff9500;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Privacy = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Auth = styled.div`
  width: 100%;
  display: flex;
  gap: 0 50px;
`;

const Login = () => {
  return (
    <Container>
      <Image src={signImg} />
      <Wrapper>
        <Title>ЗАЙТИ</Title>
        <Form>
          <Input placeholder="Имя" />
          <Input placeholder="пароль" />
          <Auth>
            <Button>ЗАЙТИ</Button>
            <Link
              style={{
                color: "black",
                textDecoration: "none",
                lineHeight: "25px",
              }}
              to="/auth/register"
            >
              Нет аккаунта ? <br /> <span style={{ color: "blue" }}>СОЗДАТЬ</span>
            </Link>
          </Auth>
          <Privacy>Lorem ipsum dolor sit amet consectetur?</Privacy>
          <Privacy>Lorem, ipsum dolor</Privacy>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
