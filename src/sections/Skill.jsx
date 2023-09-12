/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Skill({ mainColor, titleStyle }) {
  const skill_title = css`
    color: ${mainColor};
    font-size: 1.2rem;
    margin: 1rem 0;
  `;
  const barStyle = css`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
  `;
  const bar_metadata = css`
    display: flex;
    justify-content: space-between;
  `;
  const bar_bg = css`
    width: 100%;
    height: 3px;
    background-color: #1b1e26;
  `;
  const bar_value = css`
    background-color: ${mainColor};
    height: 3px;
  `;

  return (
    <section
      id="skill"
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 3rem",
      }}
    >
      <h2 css={titleStyle}>Skills</h2>
      <div
        css={{
          width: "100%",
          margin: "2rem 0",
          display: "grid",
          gridTemplateColumns: "6fr 4fr",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: `${mainColor} 0px 0px 20px`,
          color: "white",
        }}
      >
        <section
          css={{
            backgroundColor: "#050a13",
            gridRow: "span 2",
            padding: "1rem",
          }}
        >
          <h3 css={skill_title} style={{ textAlign: "center" }}>
            Coding Skill
          </h3>
          <ul>
            <li css={barStyle}>
              <div css={bar_metadata}>
                <span>Javascript/Typescript</span>
                <span>77%</span>
              </div>
              <div css={bar_bg}>
                <div css={bar_value} style={{ width: "77%" }}></div>
              </div>
            </li>
            <li css={barStyle}>
              <div css={bar_metadata}>
                <span>HTML/CSS</span>
                <span>75%</span>
              </div>
              <div css={bar_bg}>
                <div css={bar_value} style={{ width: "75%" }}></div>
              </div>
            </li>
            <li css={barStyle}>
              <div css={bar_metadata}>
                <span>React</span>
                <span>70%</span>
              </div>
              <div css={bar_bg}>
                <div css={bar_value} style={{ width: "70%" }}></div>
              </div>
            </li>
            <li css={barStyle}>
              <div css={bar_metadata}>
                <span>Solidity</span>
                <span>10%</span>
              </div>
              <div css={bar_bg}>
                <div css={bar_value} style={{ width: "10%" }}></div>
              </div>
            </li>
          </ul>
        </section>
        <section
          css={{
            padding: "1rem",
            backgroundColor: "#050a13",
            filter: "brightness(180%)",
          }}
        >
          <h3 css={skill_title}>Tools</h3>
          <ul>
            <li>Git & Github</li>
            <li>Github Actions</li>
            <li>AWS</li>
          </ul>
        </section>
        <section
          css={{
            padding: "1rem",
            backgroundColor: "#050a13",
            filter: "brightness(140%)",
          }}
        >
          <h3 css={skill_title}>Interest</h3>
          <ul>
            <li>Tokenomics</li>
            <li>DApp</li>
            <li>NFT</li>
            <li>DeFi </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
