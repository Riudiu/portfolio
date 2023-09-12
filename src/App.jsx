/** @jsxImportSource @emotion/react */
import Header from "./Header";
import Footer from "./Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Skill from "./sections/Skill";

import { css } from "@emotion/react";

const mainColor = "#00AAFF";
const titleStyle = css`
  font-size: 2.5rem;
  margin: 1rem 0;
`;

export default function App() {
  return (
    <div className="App">
      <Header mainColor={mainColor} />
      <Home />
      <About mainColor={mainColor} titleStyle={titleStyle} />
      <section
        css={{
          display: "flex",
          justifyContent: "center",
          padding: "60px 0px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <h2 css={titleStyle}>Experiences</h2>
      </section>
      <Skill mainColor={mainColor} titleStyle={titleStyle} />
      <Footer mainColor={mainColor} />
    </div>
  );
}
