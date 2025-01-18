import React from "react";
import Header from "../Header";

type CommonLayoutProps = {
  children: React.ReactNode;
};

function CommonLayout({ children }: CommonLayoutProps) {
    const isUser = false
  return (
    <>
      { isUser && <Header />}
      {children}
    </>
  );
}

export default CommonLayout;
