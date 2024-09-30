// Vendors
import React from "react";
import { Outlet } from "react-router-dom";

// Styles
import { TitleContainer, Title, StyledLink, OutletContainer } from "./Layout.styles";

const LayoutComponent = (): React.ReactElement => {
  return (
    <>
    <TitleContainer>
      <StyledLink to="/">
        <Title>PODCASTER</Title>
      </StyledLink>
      </TitleContainer>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  );
};

export default LayoutComponent;
