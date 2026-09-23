import PageLayout from "../components/layout/PageLayout";
import Container from "../components/common/Container";
import ProjectHero from "../components/project/ProjectHero";
import ProjectOverview from "../components/project/ProjectOverview";
import ProcessFlow from "../components/project/ProcessFlow";
import ImageFeature from "../components/project/ImageFeature";
import ProjectGallery from "../components/project/ProjectGallery";
import ProjectClosing from "../components/project/ProjectClosing";
import { projects } from "../data/projects";

const workFlow = [
  { label: "Frame", title: "라이브 UI Foundation", description: "AI와 컬러·타이포그래피·간격 및 기본 컴포넌트 상태를 정리하고 웹 화면으로 구성했습니다." },
  { label: "SLI", title: "프로젝트에 맞춰 적용·변경", description: "후속 SLI 작업에서 Frame의 기준을 참고하고, 브랜드 컬러와 기본 UI를 서비스 맥락에 맞게 변경했습니다." },
  { label: "Figma", title: "SLI의 기본 작업 자료 정리", description: "SLI 제작 과정에서 필요한 Foundation과 버튼·입력창·검색 영역·제품 카드 등 기본 컴포넌트를 Figma에 정리했습니다." },
];
const features = [
  { number: "01", eyebrow: "Foundation", title: "기본 스타일을 한곳에서 확인하도록 정리했습니다.", description: "AI와 컬러, 타이포그래피, 간격과 반경 등 반복되는 UI 값을 논의하고 라이브 사이트에 정리했습니다.", points: ["컬러와 타이포그래피", "간격·반경 등 기본 스타일"], image: "/images/frame/foundations-tokens.png", imageAlt: "Frame 라이브 사이트의 기본 스타일과 토큰" },
  { number: "02", eyebrow: "Components", title: "버튼과 입력창의 기본 상태를 구성했습니다.", description: "Button, Input, Badge와 Tag 등 반복되는 요소와 상태를 정리하고 브라우저에서 확인했습니다.", points: ["버튼과 입력창의 기본 구성", "컴포넌트별 상태 표현"], image: "/images/frame/component-system.png", imageAlt: "Frame 라이브 사이트의 기본 컴포넌트" },
];

export default function FrameProjectPage() {
  const project = projects.find((item) => item.id === "frame-design-system");
  if (!project) return null;
  return (
    <PageLayout>
      <ProjectHero project={project} />
      <ProjectOverview
        title="웹에서 정리한 기본 UI Foundation"
        description="Frame은 라이브 사이트로 구성한 개인 작업입니다. AI와 기본 스타일과 컴포넌트 기준을 정리하고, AI 보조 구현과 화면 검수를 진행했습니다. 이후 SLI 작업에 필요한 기준을 참고·변경했습니다."
        details={[
          { label: "Scope", value: "UI Foundation · 기본 컴포넌트와 상태 · Light/Dark Theme" },
          { label: "Deliverable", value: "Frame 라이브 사이트" },
          { label: "Application", value: "SLI UI 적용·변경 및 SLI의 기본 Figma 자료 정리" },
          { label: "Environment", value: "HTML/CSS · React 기반 환경 · AI 보조 구현" },
        ]}
      />
      <ProjectOverview
        eyebrow="Design Decision"
        title="Primary 컬러로 경쾌한 인상을 주고자 했습니다."
        description="Minimal Ecommerce와 SLI의 차분한 인상과 구분해, Frame에는 경쾌한 리듬이 필요하다고 판단했습니다. 이 방향을 Primary 컬러 선택에 반영했습니다."
      />
      <ProcessFlow eyebrow="Work Process" title="Frame 작업에서 SLI 적용까지" description="Frame의 라이브 작업을 먼저 진행하고, 후속 SLI 제작 과정에서 기본 UI를 적용·변경하며 Figma 자료를 정리했습니다." items={workFlow} accent="frame" />
      <section className="project-key-ux project-key-ux--frame">
        <Container>
          <div className="project-key-ux__header">
            <p className="project-section__eyebrow">Foundation & Components</p>
            <div><h2 className="project-section__title">라이브 사이트의 기본 스타일과 반복 UI</h2><p className="project-section__description">기본값과 컴포넌트 상태를 웹 화면에서 확인할 수 있도록 구성했습니다.</p></div>
          </div>
          <div className="project-key-ux__list">{features.map((feature, index) => <ImageFeature key={feature.number} {...feature} reverse={index % 2 === 1} accent="frame" />)}</div>
        </Container>
      </section>
      <ProjectGallery eyebrow="Theme & States" title="라이트·다크 테마와 컴포넌트 상태" description="라이브 사이트에 라이트·다크 테마와 컴포넌트별 기본·포커스·오류·비활성 등의 상태를 정리했습니다." images={[
        { src: "/images/frame/theme-light.png", alt: "Frame 라이트 테마", caption: "Light Theme" },
        { src: "/images/frame/theme-dark.png", alt: "Frame 다크 테마", caption: "Dark Theme" },
        { src: "/images/frame/component-states.png", alt: "Frame 컴포넌트 상태", caption: "컴포넌트별 상태 표현", wide: true },
      ]} accent="frame" wideFirst={false} />
      <section className="project-key-ux project-key-ux--frame-application">
        <Container>
          <div className="project-key-ux__list">
            <ImageFeature number="03" eyebrow="SLI Application" title="SLI의 기본 UI에 맞춰 적용·변경했습니다." description="SLI에는 딥블루를 사용하고, Frame을 참고해 버튼·입력창과 검색 영역 등 기본 UI를 정리했습니다. 이 과정에서 SLI에 필요한 Foundation과 기본 컴포넌트를 Figma에 정리했습니다." points={["SLI에 맞춘 브랜드 컬러 변경", "버튼·입력창·검색 영역의 기본 구성", "SLI의 기본 Figma 자료 정리"]} image="/images/frame/application-sli.png" imageAlt="Frame의 기준을 참고하고 변경한 SLI 화면" accent="frame" />
          </div>
        </Container>
      </section>
      <ProjectClosing title="직접 정한 시각적 방향과 AI를 활용한 작업 범위" description="컬러 방향을 제시하고 AI와 기본 UI 기준을 논의했습니다. 구현된 화면을 검토하고 후속 SLI 작업에 적용·변경했습니다." roleItems={["경쾌한 인상을 위한 Primary 컬러 방향 제시", "AI와 기본 스타일·컴포넌트 상태 기준 논의", "화면 구성 검토와 HTML·CSS 수정", "SLI에 맞춘 기본 UI 적용·변경"]} tools={["HTML/CSS", "React 기반 환경", "AI 보조 구현", "Figma: 후속 SLI의 기본 자료 정리"]} aiSupport={project.aiSupport} outcome="라이브 UI Foundation을 구성하고, SLI 제작 과정에서 기본 기준을 참고·변경했습니다." reflection="Frame을 단순한 기본 UI 정리 작업으로 시작한 뒤, SLI에 적용하면서 프로젝트에 맞게 유지하거나 변경할 부분을 구체화했습니다." liveUrl={project.liveUrl} githubUrl={project.githubUrl} nextProject={{ title: "Minimal Ecommerce", subtitle: "상태 기반 반응형 커머스 UI", category: "Responsive Commerce UI", url: "/projects/minimal-ecommerce" }} accent="frame" />
    </PageLayout>
  );
}
