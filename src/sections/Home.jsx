/** @jsxImportSource @emotion/react */

export default function Home() {
  return (
    <section
      id="home"
      css={{
        height: "100vh",
      }}
    >
      <div
        css={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(https://images.pexels.com/photos/4453153/pexels-photo-4453153.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(45%)",
          position: "absolute",
        }}
      ></div>
      <article
        css={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100vh",
          color: "white",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div css={{ fontSize: 32, fontWeight: "bold" }}>
          안녕하세요! 주니어 프론트엔드 개발자 윤지우입니다.
        </div>
        <p css={{ fontSize: 26, fontWeight: "normal" }}>
          <div>개인적인 성장도 좋지만,</div>
          <div>다양한 동료들과 협업하여 시너지를 내는 </div>
          <div>팀의 성과에 관심이 많습니다.</div>
        </p>
      </article>
    </section>
  );
}
