import Container from "../components/common/Container";
import PageLayout from "../components/layout/PageLayout";
import "../styles/home.css";

function HomePage() {
  return (
    <PageLayout>
      <section className="home-hero">
        <Container>
          <div className="home-hero__content">
            <p className="home-hero__eyebrow">
              UI/UX · 디자인 시스템 · React UI
            </p>

            <h1 className="home-hero__title">
              복잡한 정보를 명확한 인터페이스로 설계하고,
              <br />
              디자인 시스템과 React UI로 구현합니다.
            </h1>

            <p className="home-hero__description">
              18년 이상의 웹디자인, UI/UX와 반응형 퍼블리싱 경험을
              바탕으로 디자인과 개발 사이를 연결합니다.
            </p>

            <div className="home-hero__actions">
              <a className="button button--primary" href="#projects">
                프로젝트 보기
              </a>

              <a className="text-link" href="#about">
                소개 보기
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="projects" className="home-placeholder">
        <Container>
          <h2>주요 프로젝트</h2>
        </Container>
      </section>

      <section id="about" className="home-placeholder">
        <Container>
          <h2>소개</h2>
        </Container>
      </section>

      <section id="contact" className="home-placeholder">
        <Container>
          <h2>연락처</h2>
        </Container>
      </section>
    </PageLayout>
  );
}

export default HomePage;