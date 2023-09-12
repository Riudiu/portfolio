/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import profile from "./assets/riudiu_profile.png";

export default function Header({ greenColor }) {
  const navStyle = css`
    font-size: 16px;
    padding: 22px 30px;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      color: ${greenColor};
    }
  `;

  return (
    <div
      css={{
        width: "100%",
        padding: "10px 50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        backgroundColor: "white",
        zIndex: "100",
      }}
    >
      <div
        css={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={profile}
          alt="profile"
          css={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "50%",
          }}
        />
        <div
          css={{
            fontSize: "22px",
            fontWeight: "bold",
            marginLeft: 12,
            lineHeight: "90%",
          }}
        >
          RIUDIU
        </div>
      </div>
      <div css={{ display: "flex", flexDirection: "row" }}>
        <div css={navStyle}>HOME</div>
        <div css={navStyle}>ABOUT</div>
        <div css={navStyle}>EXPERIENCE</div>
        <div css={navStyle}>SKILL</div>
      </div>
    </div>
  );
}
