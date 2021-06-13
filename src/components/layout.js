import React from "react";
import Navbar from "./navbar/navbar";
import { container } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <Navbar />
      <h1>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;
