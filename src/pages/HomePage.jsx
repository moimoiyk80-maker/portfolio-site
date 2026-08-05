import Container from "../components/common/Container";
import PageLayout from "../components/layout/PageLayout";
import { projects } from "../data/projects";
import ProjectCard from "../components/home/ProjectCard";
import "../styles/home.css";

function HomePage() {
  return (
    <PageLayout>
      <section className="home-hero">
        <Container>
          <div className="home-hero__content">
            <p className="home-hero__eyebrow">
             UI/UX · 반응형 UI · 디자인 시스템
            </p>

            <h1 className="home-hero__title">
              복잡한 정보를 명확한 인터페이스로 설계하고,
              <br />
              디자인과 구현 사이의 기준을 연결합니다.
            </h1>

            <p className="home-hero__description">
             18년 이상의 웹디자인, UI/UX와 반응형 퍼블리싱 경험을 바탕으로
             디자인 의도가 실제 화면까지 일관되게 이어지도록 작업해 왔습니다.
            </p>

            <div className="home-hero__actions">
              <a className="button button--primary" href="#projects">
                Projects
              </a>

              <a className="text-link" href="#about">
                About
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="projects" className="home-projects">
        <Container>
          <div className="home-projects__header">
            <h2 className="home-projects__title">주요 프로젝트</h2>

            <p className="home-projects__description">
              반응형 UI, 디자인 시스템과
              <br />
              실무형 B2B UX 리디자인으로 확장한 세 프로젝트입니다.
            </p>
          </div>

          <div className="home-projects__list">
            <ProjectCard project={projects[0]} featured />

            <div className="home-projects__grid">
              {projects.slice(1).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="home-growth">
        <Container>
          <div className="home-growth__header">
            <p className="home-growth__eyebrow">Professional Direction</p>

            <h2 className="home-growth__title">
              오랜 실무 경험을
              시스템과 구조의 관점으로 확장했습니다.
            </h2>
          </div>

          <ol className="home-growth__list">
            <li className="home-growth__item">
              <div className="home-growth__number">01</div>

              <div className="home-growth__content">
                <p className="home-growth__label">UI Design & Publishing</p>

                <h3 className="home-growth__item-title">
                  웹디자인과 HTML/CSS 기반 반응형 퍼블리싱
                </h3>

                <p className="home-growth__description">
                 상품 탐색, 필터, 정렬과 장바구니 흐름을 설계하고
                 반응형 환경에서 동작과 화면 결과를 검수했습니다.
                </p>
              </div>

              <p className="home-growth__project">Minimal Ecommerce</p>
            </li>

            <li className="home-growth__item">
              <div className="home-growth__number">02</div>

              <div className="home-growth__content">
                <p className="home-growth__label">System Thinking</p>

                <h3 className="home-growth__item-title">
                  반복되는 UI 기준을 토큰과 컴포넌트 구조로 정리
                </h3>

                <p className="home-growth__description">
                  반복되는 시각 기준을 디자인 토큰과 컴포넌트 상태로 정리하고,
                  Light·Dark Theme과 UI 사용 원칙으로 확장했습니다.
                </p>
              </div>

              <p className="home-growth__project">Frame Design System</p>
            </li>

            <li className="home-growth__item">
              <div className="home-growth__number">03</div>

              <div className="home-growth__content">
                <p className="home-growth__label">UX Structure</p>

                <h3 className="home-growth__item-title">
                  제품 탐색과 검토 흐름을 중심으로 B2B 정보구조 재설계
                </h3>

                <p className="home-growth__description">
                  회사소개 중심의 사이트를 제품 탐색, 기술 검토와 문의가
                  연결되는 B2B 플랫폼으로 재설계했습니다.
                </p>
              </div>

              <p className="home-growth__project">SLI Scientific</p>
            </li>
          </ol>
        </Container>
      </section>

      <section id="about" className="home-about">
        <Container>
          <div className="home-about__header">
            <p className="home-about__eyebrow">About</p>

            <h2 className="home-about__title">
              디자인 의도를 구현 가능한 구조로 연결합니다.
            </h2>
          </div>

          <div className="home-about__body">
            <div className="home-about__introduction">
              <p className="home-about__lead">
                웹디자인과 UI/UX, 반응형 퍼블리싱을 중심으로
                18년 이상 실무를 경험했습니다.
              </p>

              <p className="home-about__description">
                초기에는 시각 디자인과 웹사이트 제작을 담당했고, 이후에는
                다양한 서비스와 콘텐츠의 UI/UX 설계, 반응형 화면 구현,
                개발자와의 협업까지 업무 범위를 확장했습니다.
              </p>

              <p className="home-about__description">
                최근에는 디자인 시스템과 컴포넌트 기반 UI 프로젝트를 통해
                반복되는 기준의 구조화를 깊이있게 파악했습니다. 
                더불어 React 기반 개발 환경에서
                디자인과 구현 사이의 협업 이해를 넓히고 있습니다.
              </p>
            </div>

            <dl className="home-about__summary">
              <div className="home-about__summary-item">
                <dt>Experience</dt>
                <dd>18년 이상의 웹디자인·UI/UX 실무 경험</dd>
              </div>

              <div className="home-about__summary-item">
                <dt>Focus</dt>
                <dd>UI/UX · 디자인 시스템 · 반응형 UI</dd>
              </div>

              <div className="home-about__summary-item">
                <dt>Implementation</dt>
                <dd>HTML · CSS · 반응형 퍼블리싱</dd>
              </div>

              <div className="home-about__summary-item">
                <dt>Collaboration</dt>
                <dd>디자인과 개발 사이의 기준 정리 및 협업</dd>
              </div>
            </dl>
          </div>

          <div className="home-about__capabilities">
            <article className="home-about__capability">
              <p className="home-about__capability-number">01</p>

              <h3>UI/UX Design</h3>

              <p>
                정보의 우선순위와 사용자 흐름을 정리하고, 복잡한 내용을
                명확한 화면 구조로 설계합니다.
              </p>
            </article>

            <article className="home-about__capability">
              <p className="home-about__capability-number">02</p>

              <h3>Design System</h3>

              <p>
                반복되는 시각 기준을 토큰과 컴포넌트로 구조화해 일관성과
                확장성을 높입니다.
              </p>
            </article>

            <article className="home-about__capability">
              <p className="home-about__capability-number">03</p>

              <h3>Responsive UI</h3>

              <p>
                다양한 화면 크기에서 정보와 기능이 자연스럽게 이어지도록
                반응형 인터페이스를 구현합니다.
              </p>
            </article>

            <article className="home-about__capability">
              <p className="home-about__capability-number">04</p>

              <h3>Design to Code</h3>

              <p>
                디자인 결과물을 실제 구현 조건과 연결하고, 개발자와 공유할 수
                있는 명확한 기준으로 정리합니다.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section id="contact" className="home-contact">
        <Container>
          <div className="home-contact__inner">
            <div className="home-contact__content">
              <p className="home-contact__eyebrow">Contact</p>

              <h2 className="home-contact__title">
                디자인과 구현 사이의 품질을 함께 높일 기회를 찾고 있습니다.
              </h2>

              <p className="home-contact__description">
                디자인 시스템, UI/UX 디자인, 반응형 UI와 디자인–개발 협업 역할에 관심이 있습니다.
              </p>
            </div>

            <div className="home-contact__actions">
            {/*<a
              className="home-contact__github"
              href="/resume/hwang-yoonkyung-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              이력서 보기
              <span aria-hidden="true"> ↗</span>
            </a>*/}
            
              <a
                className="home-contact__email"
                href="mailto:hyoonkyung@naver.com"
              >
                hyoonkyung@naver.com
                <span aria-hidden="true"> ↗</span>
              </a>

              <a
                className="home-contact__github"
                href="https://github.com/moimoiyk80-maker"
                target="_blank"
                rel="noreferrer"
              >
                GitHub 보기
                <span aria-hidden="true"> ↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}

export default HomePage;