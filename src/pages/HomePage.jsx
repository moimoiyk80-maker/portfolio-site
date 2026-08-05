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
                 웹디자인과 HTML/CSS 퍼블리싱을 바탕으로,
                 디자인 의도가 다양한 화면 크기에서도 일관되게 이어지도록 작업해 왔습니다.
                </p>
              </div>

              <p className="home-growth__project">Minimal Ecommerce</p>
            </li>

            <li className="home-growth__item">
              <div className="home-growth__number">02</div>

              <div className="home-growth__content">
                <p className="home-growth__label">System Thinking</p>

                <h3 className="home-growth__item-title">
                 반복되는 UI 기준을 토큰과 컴포넌트 원칙으로 정리
                </h3>

                <p className="home-growth__description">
                 반복되는 컬러, 간격과 상태 기준을 토큰과 컴포넌트 원칙으로 정리해,
                 일관된 UI를 유지할 수 있는 체계로 구체화했습니다.
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
                 회사소개 중심의 구조를 제품 탐색, 상세 정보 검토와 문의가
                 자연스럽게 이어지는 B2B 사용자 흐름으로 재구성했습니다.
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
             정보구조부터 실제 화면까지 일관된 UI 기준을 만듭니다.
            </h2>
          </div>

          <div className="home-about__body">
            <div className="home-about__introduction">
              <p className="home-about__lead">
               웹디자인, UI/UX와 반응형 퍼블리싱을 중심으로
               18년 이상 실무를 이어왔습니다.
              </p>

              <p className="home-about__description">
              초기에는 시각 디자인과 웹사이트 제작을 담당했으며,
              이후 UI/UX 설계, HTML/CSS 기반 반응형 퍼블리싱과
              개발자 협업까지 업무 범위를 확장했습니다.
              </p>

              <p className="home-about__description">
              최근에는 개인 프로젝트를 통해 반복되는 UI 기준을
              디자인 토큰과 컴포넌트 원칙으로 체계화했습니다.
              React 기반 결과물을 브라우저에서 확인하며,
              디자인 기준과 실제 화면 사이의 차이를 검수하고 조정했습니다.
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
                <dt>Publishing</dt>
                <dd>HTML · CSS · 반응형 퍼블리싱</dd>
              </div>

              <div className="home-about__summary-item">
                <dt>Collaboration</dt>
                <dd>UI 기준 전달 · 브라우저 화면 검수 · 개발자 협업</dd>
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
              반복되는 컬러, 간격과 상태 기준을
              디자인 토큰과 컴포넌트 원칙으로 체계화합니다.
              </p>
            </article>

            <article className="home-about__capability">
              <p className="home-about__capability-number">03</p>

              <h3>Responsive UI</h3>

              <p>
              화면 크기에 따라 콘텐츠의 우선순위와 배열을 조정하고,
              HTML/CSS 기반의 반응형 화면으로 구체화합니다.
              </p>
            </article>

            <article className="home-about__capability">
              <p className="home-about__capability-number">04</p>

              <h3>UI Collaboration</h3>

              <p>
              디자인 기준과 상태별 요구사항을 명확하게 전달하고,
              구현된 화면이 의도한 사용자 경험과 일치하는지 검수합니다.
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
              일관된 UI 기준과 더 나은 사용자 흐름을 함께 만들고 싶습니다.
              </h2>

              <p className="home-contact__description">
              UI/UX, 디자인 시스템과 반응형 퍼블리싱 경험을 바탕으로
              정보구조와 실제 화면을 함께 다듬는 역할을 찾고 있습니다.
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
                이메일로 연락하기
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