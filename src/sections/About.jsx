/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function About({ mainColor, titleStyle }) {
  const majorStyle = css`
    width: 30%;
    padding: 2rem 1rem;
    background-color: #050a13;
    color: #ffffff;
    border-radius: 1rem;
    box-shadow: 3px 3px 0px 0px ${mainColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover .major__icon {
      transform: scale(1.2);
    }
  `;
  const majorIcon = css`
    font-size: 4rem;
    margin: 1rem 0;
    color: ${mainColor};
    transition: all 0.3s ease-in-out;
  `;

  return (
    <section
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 0px",
      }}
    >
      <h2 css={titleStyle}>About Me</h2>
      <ul css={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>
        <p>
          💻 &nbsp; 프론트엔드 개발자이자, 스마트 컨트랙트 개발자가 되고자
          합니다.
        </p>
        <p>💼 &nbsp; 플러터 앱 개발자로 1년 정도 일하다가 퇴사한 상태입니다.</p>
        <p>📚 &nbsp; 현재 전반적인 웹 기술과 블록체인을 공부하고 있습니다.</p>
      </ul>
      <div css={{ width: "100%" }}>
        <ul
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "2.5rem 0",
            gap: "0.5rem",
            padding: "0 3rem",
          }}
        >
          <li className="major" css={majorStyle}>
            <p>
              <i className="fa-solid fa-mobile major__icon" css={majorIcon}></i>
            </p>
            <div>Mobile</div>
            <p>Dart, Flutter</p>
          </li>
          <li className="major" css={majorStyle}>
            <p>
              <i className="fa-brands fa-react major__icon" css={majorIcon}></i>
            </p>
            <div>Front-end</div>
            <p> HTML/CSS, Javascript, React</p>
          </li>
          <li className="major" css={majorStyle}>
            <p>
              <i
                className="fa-brands fa-ethereum major__icon"
                css={majorIcon}
              ></i>
            </p>
            <div>Smart Contract</div>
            <p>Solidity, Hardhat</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
