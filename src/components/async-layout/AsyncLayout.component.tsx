// Vendors
import React, { ReactElement } from "react";

// Contexts
import { useAppContext } from "@/contexts/app.context";
import { Spinner, SpinnerContainer } from "./AsyncLayout.styles";

interface AsyncLayoutProps {
  children: ReactElement;
}

const AsyncLayout = ({ children }: AsyncLayoutProps): ReactElement => {
  const { appLoading } = useAppContext();

  return (
    appLoading ? (
      <SpinnerContainer data-testid="spinner-container">
        <Spinner />
      </SpinnerContainer>
    ) : (
      <>{children}</>
    )
  )
};

export default AsyncLayout;
