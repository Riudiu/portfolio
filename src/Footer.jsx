/** @jsxImportSource @emotion/react */

export default function Footer({ mainColor }) {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        flexDirection: "column",
      }}
    >
      <div css={{ fontSize: 32, fontWeight: "bold", padding: "35px 0px 15px" }}>
        Contact Me
      </div>
      <div
        css={{
          padding: "20px 0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div css={{ marginBottom: 16 }}>
          <a
            href="https://github.com/Riudiu"
            css={{
              color: "white",
              ":hover": {
                color: mainColor,
              },
            }}
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jiwoo-yun/"
            css={{
              color: "white",
              marginLeft: 10,
              ":hover": {
                color: mainColor,
              },
            }}
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        <div css={{ fontSize: "20px" }}>lacvert13@gmail.com</div>
      </div>
      <div css={{ padding: "40px 0px", fontSize: "14px" }}>
        Copyright ⓒ Jiwoo Yun All rights reserved.
      </div>
    </div>
  );
}
