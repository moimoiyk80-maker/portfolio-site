import { Link } from "react-router-dom";
import "../../styles/commercial.css";
import Container from "../common/Container";

const cases = [
  {
    title: "서비스 사이트의 공통 UI와 안내 표현",
    description:
      "서비스 4~5개의 컬러·버튼·헤더·푸터를 맞췄습니다. AS·교정·렌탈의 절차를 유지하면서 단계·아이콘·설명에 공통 표현을 적용했습니다.",
    scope: "공통 기준 · 서비스별 차이",
  },
  {
    title: "모바일 옵션과 상품·주문 정보 구성",
    description:
      "옵션을 그룹으로 묶고, PC의 표 정보를 모바일 상품 블록으로 재배치했습니다. 화면 구성과 반응형 HTML·CSS를 직접 작업하고 세부 동작은 개발자와 조율했습니다.",
    scope: "UI 구성 · 반응형 구현",
  },
  {
    title: "중고상품 할인율과 할인 사유 표시",
    description:
      "할인율 강조 요청에 더해 할인 사유도 표시하도록 제안했습니다. 운영자가 사진 등 정보를 바꿀 수 있도록 필요한 관리자 항목을 요청했습니다.",
    scope: "정보 설계 · 운영 협업",
    status: "할인 사유 표시 개선은 운영 반영 중입니다.",
  },
];

export default function CommercialExperience() {
  return (
    <section
      id="experience"
      className="home-growth"
      aria-labelledby="experience-title"
    >
      <Container>
        <div className="home-growth__header">
          <p className="home-growth__eyebrow">Commercial Experience</p>
          <div>
            <h2 id="experience-title" className="home-growth__title">
              실무에서 맡은 UI 기준과 운영 개선
            </h2>
            <p className="home-growth__description">
              2014년부터 홈페이지·쇼핑몰·서비스 사이트의 화면 디자인과 퍼블리싱을 담당했습니다. 
              <br></br>회사·사이트명은 비공개이며, 직접 판단하고 수행한 범위를 정리했습니다.
            </p>
          </div>
        </div>
        <ol className="home-growth__list">
          {cases.map((item, index) => (
            <li className="home-growth__item" key={item.title}>
              <span className="home-growth__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="home-growth__content">
                <h3 className="home-growth__item-title">{item.title}</h3>
                <p className="home-growth__description">{item.description}</p>
                {item.status && (
                  <p className="home-experience__status">{item.status}</p>
                )}
              </div>
              <p className="home-growth__project">{item.scope}</p>
            </li>
          ))}
        </ol>
        <Link className="home-growth__case-link" to="/work/commercial-ui">
          실제 화면과 담당 범위 보기 →
        </Link>
      </Container>
    </section>
  );
}
