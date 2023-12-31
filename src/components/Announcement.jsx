import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #ff9500;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      SmTm: Ваш лучший выбор в мире электроники!
    </Container>
  );
};

export default Announcement;
