import Container from "../components/common/Container";
import PageLayout from "../components/layout/PageLayout";
import { projects } from "../data/projects";
import ProjectCard from "../components/home/ProjectCard";
import CommercialExperience from "../components/home/CommercialExperience";
import "../styles/home.css";

export default function HomePage() {
  return (
    <PageLayout>
      <section className="home-hero">
        <Container>
          <div className="home-hero__content">
            <p className="home-hero__eyebrow">웹·UI 설계 · 반응형 퍼블리싱 · 구현 검수</p>
            <h1 className="home-hero__title">
              화면 구조와 공통 UI 기준을 정리하고,<br />
              디자인과 구현 사이의 품질을 맞춥니다.
            </h1>
            <p className="home-hero__description">
              18년 이상의 디자인 경력을 바탕으로, 2014년부터 웹·UI 설계와 HTML·CSS 퍼블리싱을 수행해왔습니다.
              개발 이후에도 화면 구조와 스타일을 직접 수정하며 구현 품질을 맞춰왔습니다.
            </p>
            <div className="home-hero__actions">
              <a className="button button--primary" href="#projects">프로젝트 보기</a>
              <a className="text-link" href="#experience">실무 경험 보기<span aria-hidden="true"> →</span></a>
            </div>
          </div>
        </Container>
      </section>

      <section id="projects" className="home-projects">
        <Container>
          <div className="home-projects__header">
            <h2 className="home-projects__title">개인 프로젝트</h2>
            <p className="home-projects__description">
              실무에서 관심을 가져온 정보구조와 UI 기준을 탐구한 세 프로젝트입니다.
              AI의 구현 지원을 활용하며 화면 구성 검토, HTML·CSS 수정과 브라우저 검수를 진행했습니다.
            </p>
          </div>
          <div className="home-projects__list">
            <ProjectCard project={projects[0]} featured />
            <div className="home-projects__grid">
              {projects.slice(1).map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
          </div>
        </Container>
      </section>

      <CommercialExperience />

      <section id="about" className="home-about">
        <Container>
          <div className="home-about__header">
            <p className="home-about__eyebrow">About</p>
            <h2 className="home-about__title">디자인 경험 위에 쌓아온 웹·UI 실무</h2>
          </div>
          <div className="home-about__body">
            <div className="home-about__introduction">
              <p className="home-about__lead">18년 이상의 디자인 경력과, 2014년부터 이어온 웹·UI 설계 및 퍼블리싱 경험이 있습니다.</p>
              <p className="home-about__description">2014년 이전에는 콘텐츠·그래픽·일러스트·애니메이션 등 디자인 업무를 수행했습니다. 이후 홈페이지·쇼핑몰·서비스 사이트의 화면 구성과 HTML·CSS 퍼블리싱을 맡고 개발자와 협업해왔습니다.</p>
              <p className="home-about__description">개인 프로젝트에서는 AI와 설계안 및 UI 기준을 논의하고, 구현된 화면을 검토하며 HTML·CSS를 수정했습니다. 화면의 구조와 흐름을 설계하고 공통 기준과 구현 품질을 맞추는 역할을 지향합니다.</p>
            </div>
            <dl className="home-about__summary">
              <div className="home-about__summary-item"><dt>Design Experience</dt><dd>18년 이상의 디자인 실무</dd></div>
              <div className="home-about__summary-item"><dt>Web & UI</dt><dd>2014년부터 웹·UI 설계 및 퍼블리싱</dd></div>
              <div className="home-about__summary-item"><dt>Publishing</dt><dd>HTML·CSS · 반응형 화면 구성</dd></div>
              <div className="home-about__summary-item"><dt>Collaboration</dt><dd>개발 이후 UI 수정 · 브라우저 검수 · 개발자 협업</dd></div>
            </dl>
          </div>
        </Container>
      </section>

      <section id="contact" className="home-contact">
        <Container>
          <div className="home-contact__inner">
            <div className="home-contact__content">
              <p className="home-contact__eyebrow">Contact</p>
              <h2 className="home-contact__title">화면 구조와 구현 품질을 함께 다듬는 일을 하고 싶습니다.</h2>
              <p className="home-contact__description">웹·UI 설계, 퍼블리싱과 개발 협업 경험을 바탕으로 공통 UI 기준을 정리하고 실제 화면에 적용하는 역할을 찾고 있습니다.</p>
            </div>
            <div className="home-contact__actions">
              <a className="home-contact__email" href="mailto:hyoonkyung@naver.com">이메일로 연락하기<span aria-hidden="true"> ↗</span></a>
              <a className="home-contact__github" href="https://github.com/moimoiyk80-maker" target="_blank" rel="noreferrer">GitHub 보기<span aria-hidden="true"> ↗</span></a>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
