import React from "react";
import Header from "../Header";

type CommonLayoutProps = {
  children: React.ReactNode;
};

function CommonLayout({ children }: CommonLayoutProps) {
    const isUser = true
  return (
    <>
      { isUser && <Header />}
      {children}
    </>
  );
}

export default CommonLayout;
