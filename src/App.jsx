/** @jsxImportSource @emotion/react */
import Header from "./Header";
import Footer from "./Footer";
import Home from "./sections/Home";
import About from "./sections/About";

import { css } from "@emotion/react";

const greenColor = "#00AB59";
const titleStyle = css`
  font-size: 2.5rem;
  margin: 1rem 0;
`;

export default function App() {
  return (
    <div className="App">
      <Header greenColor={greenColor} />
      <Home />
      <About titleStyle={titleStyle} />
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
      <section
        css={{ display: "flex", justifyContent: "center", padding: "60px 0px" }}
      >
        <h2 css={titleStyle}>Skills</h2>
      </section>
      <Footer greenColor={greenColor} />
    </div>
  );
}
