// Vendors
import React, { ReactElement } from "react";

// Contexts
import { Spinner, SpinnerContainer } from "./AsyncLayout.styles";

interface AsyncLayoutProps {
  children: ReactElement;
  loading: boolean;
}

const AsyncLayout = ({ children, loading }: AsyncLayoutProps): ReactElement => {
  return (

    loading ? (
      <SpinnerContainer data-testid="spinner-container">
        <Spinner />
      </SpinnerContainer>
    ) : (
      <>{children}</>
    )
  )
};

export default AsyncLayout;
