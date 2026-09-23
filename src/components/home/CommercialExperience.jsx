import Container from "../common/Container";

const cases = [
  {
    title: "서비스 사이트 4~5개의 공통 UI 적용",
    description: "서비스별 로고와 절차는 유지하면서 컬러, 버튼, 헤더와 푸터를 맞췄습니다. 프로세스 설명은 단계별 번호·아이콘·설명 배치에 공통 기준을 적용했습니다.",
    scope: "공통 UI · 안내 표현",
  },
  {
    title: "중고판매 상세페이지와 할인 정보 구성",
    description: "중고판매 서비스에 상품 상세페이지를 추가하고 기존 서비스 사이트의 버튼 스타일을 적용했습니다. 실무자의 할인율 강조 요청에 더해, 전시상품 여부 등 할인 사유도 함께 표시하도록 제안했습니다.",
    scope: "정보 구성 · 화면 확장",
    status: "할인율·할인 사유 표시 개선은 운영 반영 중입니다.",
  },
  {
    title: "자주 바뀌는 정보의 관리자 수정 기능 요청",
    description: "수시로 바뀌는 내용은 관리자·실무자가 직접 수정할 수 있도록 개발팀에 요청했습니다. 중고상품 사진 등록 등 운영에 필요한 항목을 전달했으며, 관리자 페이지와 기능 구현은 개발팀이 담당했습니다.",
    scope: "운영 요구사항 · 개발 협업",
  },
  {
    title: "개발 반영 이후 UI 수정과 홈페이지 운영 반영",
    description: "HTML·CSS 퍼블리싱 결과를 개발팀에 전달한 뒤에도 React 파일의 화면 구조와 CSS를 직접 수정하고 커밋했습니다. 홈페이지는 인수인계받은 배포 절차에 따라 운영 서버 반영까지 담당하고 있습니다.",
    scope: "퍼블리싱 · 구현 후 수정",
  },
];

export default function CommercialExperience() {
  return (
    <section id="experience" className="home-growth" aria-labelledby="experience-title">
      <Container>
        <div className="home-growth__header">
          <p className="home-growth__eyebrow">Commercial Experience</p>
          <div>
            <h2 id="experience-title" className="home-growth__title">실무에서 맡은 UI 기준과 운영 개선</h2>
            <p className="home-growth__description">2014년부터 홈페이지·쇼핑몰·서비스 사이트의 화면 디자인과 퍼블리싱을 담당했습니다. 회사·사이트명은 비공개이며, 직접 판단하고 수행한 범위를 정리했습니다.</p>
          </div>
        </div>
        <ol className="home-growth__list">
          {cases.map((item, index) => (
            <li className="home-growth__item" key={item.title}>
              <span className="home-growth__number">{String(index + 1).padStart(2, "0")}</span>
              <div className="home-growth__content">
                <h3 className="home-growth__item-title">{item.title}</h3>
                <p className="home-growth__description">{item.description}</p>
                {item.status && <p className="home-experience__status">{item.status}</p>}
              </div>
              <p className="home-growth__project">{item.scope}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
