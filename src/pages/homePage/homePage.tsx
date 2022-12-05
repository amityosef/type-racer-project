import React from "react";
import { TypingComponent } from "../../components/typingComponent/typingComponent";
import "./homePage.css"

interface HomePageProps {}

export const HomePage = ({}: HomePageProps) => {
  return (
    <div className="homepage">
      <TypingComponent />
    </div>
  );
};
