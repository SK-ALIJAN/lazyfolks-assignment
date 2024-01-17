import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Opps! 404</title>
        <meta name="description" content="page not found" />
      </Helmet>
      <NotFoundContainer>
        <div>
          <NotFoundText>404 - Not Found</NotFoundText>
          <NotFoundDescription>
            Sorry, the page you are looking for might be in another castle.
          </NotFoundDescription>
        </div>
      </NotFoundContainer>
    </React.Fragment>
  );
};

export default NotFoundPage;

const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #080710;
  color: #fff;
  text-align: center;
`;

const NotFoundText = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const NotFoundDescription = styled.p`
  font-size: 18px;
`;
