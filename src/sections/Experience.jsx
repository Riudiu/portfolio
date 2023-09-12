/** @jsxImportSource @emotion/react */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import valley from "../assets/blockchain_valley_logo.png";
import jungle from "../assets/jungle_logo.png";
import pood from "../assets/pood_logo.png";

export default function Experience({ titleStyle }) {
  return (
    <section
      id="experience"
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 0px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h2 css={titleStyle} style={{ marginBottom: 45 }}>
        Experiences
      </h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#580b1c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #580b1c" }}
          date="2023.09 - present"
          iconStyle={{
            background: "#fff",
            color: "#fff",
            textAlign: "center",
            alignItems: "center",
          }}
          icon={
            <img
              src={valley}
              alt="valley"
              width={50}
              style={{ marginTop: 2, marginLeft: 2 }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            블록체인 밸리 4기 학회원
          </h3>
          <h4 className="vertical-timeline-element-subtitle">개발팀</h4>
          <p>고려대학교를 기반으로 활동하는 블록체인 학회</p>
          <div>Web3 및 DAO 거버넌스, 디지털 월렛 등 블록체인 심화지식 탐구</div>
          <p>블록체인의 작동원리, 메인넷, NFT, Defi, EVM, Solidity</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#114b35", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #114b35" }}
          date="2023.04 - 2023.08"
          iconStyle={{
            background: "#fff",
            color: "#fff",
            textAlign: "center",
            alignItems: "center",
          }}
          icon={
            <img
              src={jungle}
              alt="jungle"
              width={50}
              style={{ marginTop: 5.5 }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">크래프톤 정글 4기</h3>
          <h4 className="vertical-timeline-element-subtitle">수료</h4>
          <p>탄탄한 기본기를 바탕으로 평생 성장할 수 있는 개발자 양성 과정</p>
          <div>CS 위주의 커리큘럼, 미션 기반의 팀 프로젝트 중심</div>
          <p>자료구조, 알고리즘, C언어, 운영체제, PintOS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#003af1", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #003af1" }}
          date="2021.12 - 2023.03"
          iconStyle={{
            background: "#fff",
            color: "#fff",
            textAlign: "center",
            alignItems: "center",
          }}
          icon={
            <img src={pood} alt="pood" width={55} style={{ marginTop: 6 }} />
          }
        >
          <h3 className="vertical-timeline-element-title">(주)지앤원</h3>
          <h4 className="vertical-timeline-element-subtitle">
            맞춤솔루션 기반 반려동물 e커머스 플랫폼 'Pood' 앱 개발
          </h4>
          <p>Flutter 프로젝트 개발 및 운영</p>
          <div>출시 6개월 만에 누적 회원 수 1만명 돌파, Series A 투자 유치</div>
          <p>Dart, Flutter, GetX, Dio, Firebase</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
