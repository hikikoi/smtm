import React from 'react';
import styled from 'styled-components';
import not_found from "../images/not-found1.gif"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ff9500;
`;

const Text = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const NotFound = () => {
  return (
    <Container>
      <Text>Ошибка 404</Text>
      <Text>Страница не найдена</Text>
      <img src={not_found} style={{borderRadius:"10px"}} alt="404 GIF"/>
    </Container>
  );
};

export default NotFound;
