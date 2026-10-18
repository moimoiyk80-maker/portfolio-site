import { Link } from "react-router-dom";
import "../../styles/commercial.css";
import Container from "../common/Container";

const cases = [
  { title: "서비스 사이트의 공통 UI와 안내 표현", description: "본사·자회사별 컬러를 구분하고 서비스 4~5개의 버튼·헤더·푸터를 정리했습니다. AS·교정·렌탈의 절차에 맞춰 단계·아이콘·설명을 구성했습니다.", scope: "공통 기준 · 서비스별 차이", anchor: "shared-ui" },
  { title: "공통 버튼 CSS와 색상 변경 대응", description: "주요·보조 버튼 스타일을 공통 클래스로 관리했습니다. 브랜드 색상 변경 요청에 따라 주요 버튼 클래스의 색상을 수정하고 여러 화면에 일괄 반영했습니다.", scope: "공통 CSS · 변경 관리", anchor: "shared-css" },
  { title: "PC·모바일 로그인 UI 통합", description: "따로 운영하던 로그인 화면을 반응형 전환에 맞춰 정리했습니다. 로그인 방법·회원가입·비회원 주문조회 경로를 배치하고 HTML·CSS를 직접 작업했습니다.", scope: "UI 공통화 · 구현", anchor: "login-ui" },
  { title: "상품 선택과 주문 정보의 반응형 구성", description: "옵션을 그룹으로 묶고 PC 표를 모바일 상품 블록으로 재배치했습니다. 주문 정보도 영역별로 구분하고, 세부 동작은 개발자와 조율했습니다.", scope: "정보 구조 · 반응형 구현", anchor: "mobile-ui" },
  { title: "특가 상시 노출과 할인 사유 표시", description: "이벤트로 판매하던 상품의 메인 상시 영역을 제안해 운영에 적용했습니다. 별도 중고판매 서비스에는 할인 사유 표시와 관리자 입력 항목을 제안했습니다.", scope: "운영 개선 · 정보 설계", status: "특가 영역은 운영 중이며, 중고상품 할인 사유 표시는 반영 중입니다.", anchor: "discount-ui" },
  { title: "상담 목적의 원페이지 랜딩", description: "상담 신청을 목적으로 원페이지 구성을 제안하고 디자인·퍼블리싱을 직접 담당했습니다. 실제 운영 후 회사 방침에 따라 다른 상담 경로로 전환했습니다.", scope: "페이지 구성 · 퍼블리싱", anchor: "consulting-ui" },
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
              2014년부터 홈페이지·쇼핑몰·서비스 사이트의 화면 디자인과
              퍼블리싱을 담당했습니다. 회사·사이트명은 비공개이며, 직접 판단하고
              수행한 범위를 정리했습니다.
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
                <h3 className="home-growth__item-title"><Link className="commercial-home-case-link" to={`/work/commercial-ui#${item.anchor}`}>{item.title}<span aria-hidden="true"> ↗</span></Link></h3>
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
