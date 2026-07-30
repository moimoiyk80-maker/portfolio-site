import PageLayout from "../components/layout/PageLayout";
import Container from "../components/common/Container";
import ProjectHero from "../components/project/ProjectHero";
import ProjectOverview from "../components/project/ProjectOverview";
import InsightGrid from "../components/project/InsightGrid";
import ProcessFlow from "../components/project/ProcessFlow";
import ImageFeature from "../components/project/ImageFeature";
import ProjectGallery from "../components/project/ProjectGallery";
import ProjectClosing from "../components/project/ProjectClosing";
import { projects } from "../data/projects";

function FrameProjectPage() {
  const project = projects.find(
    (item) => item.id === "frame-design-system"
  );

  if (!project) {
    return null;
  }

  const overviewDetails = [
    {
      label: "Project Scope",
      value:
        "UI Foundation · Design Tokens · Components · Theme · React UI",
    },
    {
      label: "System Structure",
      value:
        "Primitive → Semantic → Component → React UI",
    },
    {
      label: "Application",
      value:
        "독립적인 컴포넌트 설계와 SLI Scientific 화면 적용",
    },
    {
      label: "Tools",
      value:
        "Figma · React · Vite · JavaScript · CSS",
    },
  ];

  const problems = [
    {
      title: "화면마다 달라지는 시각 기준",
      description:
        "컬러, 간격과 타이포그래피 기준이 개별 화면에 직접 적용되면 수정과 확장 과정에서 일관성을 유지하기 어렵습니다.",
    },
    {
      title: "상태 정의가 부족한 컴포넌트",
      description:
        "기본 화면만 설계하면 Hover, Focus, Error와 Disabled 같은 실제 인터랙션 상태가 구현 단계에서 달라질 수 있습니다.",
    },
    {
      title: "디자인과 코드 사이의 단절",
      description:
        "디자인 속성과 코드의 스타일 값이 별도로 관리되면 같은 UI를 반복해서 해석하고 수정해야 합니다.",
    },
  ];

  const systemFlow = [
    {
      label: "Foundation",
      title: "Primitive Tokens",
      description:
        "컬러, 간격과 크기처럼 재사용 가능한 기초 값을 정의했습니다.",
    },
    {
      label: "Meaning",
      title: "Semantic Tokens",
      description:
        "기초 값에 역할과 의미를 부여해 화면 목적에 따라 사용할 수 있도록 구성했습니다.",
    },
    {
      label: "Application",
      title: "Component Tokens",
      description:
        "Button과 Input 등 컴포넌트에 필요한 속성과 상태를 연결했습니다.",
    },
    {
      label: "Implementation",
      title: "React UI",
      description:
        "토큰과 상태 기준을 실제 React 컴포넌트와 테마에 적용했습니다.",
    },
  ];

  const systemPrinciples = [
    {
      title: "일관성",
      description:
        "같은 역할의 UI가 화면마다 동일한 시각 기준과 상태를 사용합니다.",
    },
    {
      title: "확장성",
      description:
        "기초 값을 직접 수정하지 않고 의미와 역할을 중심으로 확장합니다.",
    },
    {
      title: "디자인과 구현 연결",
      description:
        "Figma의 설계 기준을 실제 React UI에서 확인할 수 있도록 구성했습니다.",
    },
  ];

  const foundationFeatures = [
    {
      number: "01",
      eyebrow: "Foundations & Tokens",
      title: "시각적 기준을 재사용 가능한 토큰으로 구조화했습니다.",
      description:
        "컬러, 타이포그래피, 간격과 반경을 개별 화면에 직접 입력하지 않고 공통 기준으로 정의했습니다. 실제 프로젝트에서 사용한 토큰 이름과 계층을 기준으로 디자인과 코드가 같은 의미를 공유하도록 구성했습니다.",
      points: [
        "Primitive 값과 Semantic 역할 분리",
        "텍스트, 배경, 테두리와 인터랙션 색상 정의",
        "타이포그래피, 간격과 반경 기준 체계화",
      ],
      image: "/images/frame/foundations-tokens.png",
      imageAlt: "Frame Design System 디자인 토큰 구조",
    },
    {
      number: "02",
      eyebrow: "Component System",
      title: "반복되는 UI를 일관된 컴포넌트 구조로 확장했습니다.",
      description:
        "토큰을 Button, Input, Badge와 Tag 등 실제 인터페이스 요소에 적용하고, 크기와 용도에 따라 재사용할 수 있도록 구성했습니다.",
      points: [
        "용도와 위계에 따른 컴포넌트 변형",
        "공통 토큰을 사용하는 일관된 스타일",
        "실제 화면 조합을 고려한 구성",
      ],
      image: "/images/frame/component-system.png",
      imageAlt: "Frame Design System 컴포넌트 구성",
    },
  ];
  
  const themeImages = [
    {
      src: "/images/frame/theme-light.png",
      alt: "Frame Design System Light Theme",
      caption: "Light Theme · 밝은 화면 환경",
    },
    {
      src: "/images/frame/theme-dark.png",
      alt: "Frame Design System Dark Theme",
      caption: "Dark Theme · 어두운 화면 환경",
    },
    {
      src: "/images/frame/component-states.png",
      alt: "Frame Design System 컴포넌트 상태",
      caption: "Component States · Default, Hover, Focus, Error, Disabled",
      wide: true,
    },
  ];

  const implementationFeatures = [
    {
      number: "03",
      eyebrow: "Design to Code",
      title: "디자인 기준을 실제 React UI에서 확인할 수 있도록 구현했습니다.",
      description:
        "디자인 토큰과 컴포넌트 상태를 CSS 변수와 React 컴포넌트 구조에 반영해 디자인과 구현이 같은 기준을 사용하도록 정리했습니다.",
      points: [
        "토큰 값을 CSS 변수로 구성",
        "컴포넌트의 변형과 상태를 React UI로 구현",
        "디자인 결과와 브라우저 화면을 함께 검토",
      ],
      image: "/images/frame/design-to-code.png",
      imageAlt: "Frame Design System 디자인과 React UI 연결 화면",
    },
    {
      number: "04",
      eyebrow: "Application",
      title: "디자인 시스템을 실제 B2B 화면에 적용했습니다.",
      description:
        "Frame을 독립적인 컴포넌트 예시에 그치지 않고 SLI Scientific의 버튼, 입력 요소, 카드와 화면 전반의 UI 기준으로 활용했습니다.",
      points: [
        "프로젝트 전반의 컬러와 간격 기준 적용",
        "버튼과 입력 요소의 상태 일관성 유지",
        "반복되는 UI 패턴을 공통 기준으로 정리",
      ],
      image: "/images/frame/application-sli.png",
      imageAlt: "Frame Design System이 적용된 SLI Scientific 화면",
    },
  ];

  const roleItems = [
    "디자인 시스템의 범위와 구조 정의",
    "컬러, 타이포그래피, 간격과 반경 토큰 설계",
    "Primitive와 Semantic Token 계층 구성",
    "대표 컴포넌트와 인터랙션 상태 설계",
    "Light·Dark Theme 구성",
    "React UI 구현과 실제 프로젝트 적용",
  ];
  
  const projectTools = [
    "Figma",
    "React",
    "Vite",
    "JavaScript",
    "CSS",
    "GitHub",
    "Vercel",
  ];
  
  const nextProject = {
    title: "Minimal Ecommerce",
    subtitle: "상태 기반 반응형 커머스 UI",
    category: "React UI Implementation",
    url: "/projects/minimal-ecommerce",
  };

  return (
    <PageLayout>
      <ProjectHero project={project} />

      <ProjectOverview
        title="반복되는 UI 기준을 토큰과 컴포넌트 구조로 정리했습니다."
        description="Frame Design System은 화면별로 반복되는 컬러, 타이포그래피, 간격과 상태 기준을 체계화하고 실제 React UI로 구현한 개인 프로젝트입니다."
        details={overviewDetails}
      />

      <InsightGrid
        eyebrow="Problem"
        title="일관된 화면을 만들기 위해서는 개별 스타일보다 공통 기준이 필요했습니다."
        description="화면 수가 늘어날수록 반복되는 스타일과 상태를 개별적으로 관리하기 어려워지는 문제를 세 가지로 정리했습니다."
        items={problems}
        accent="frame"
      />

      <ProcessFlow
        eyebrow="System Goal"
        title="기초 값에서 실제 UI까지 연결되는 구조를 설계했습니다."
        description="단순한 컴포넌트 모음이 아니라, 기초 값에 의미를 부여하고 컴포넌트와 React UI까지 이어지는 계층 구조로 구성했습니다."
        items={systemFlow}
        principles={systemPrinciples}
        accent="frame"
      />

      <section className="project-key-ux project-key-ux--frame">
        <Container>
          <div className="project-key-ux__header">
            <p className="project-section__eyebrow">System Detail</p>

            <div>
              <h2 className="project-section__title">
                토큰 기준을 실제 컴포넌트와 화면 구성으로 확장했습니다.
              </h2>

              <p className="project-section__description">
                기초 값을 정의하는 데 그치지 않고, 실제 인터페이스에서
                반복해서 사용할 수 있는 컴포넌트 구조로 연결했습니다.
              </p>
            </div>
          </div>

          <div className="project-key-ux__list">
            {foundationFeatures.map((feature, index) => (
              <ImageFeature
                key={feature.number}
                {...feature}
                reverse={index % 2 === 1}
                accent="frame"
              />
            ))}
          </div>
        </Container>
      </section>

      <ProjectGallery
        eyebrow="Theme & States"
        title="테마가 달라져도 컴포넌트의 역할과 상태가 유지되도록 설계했습니다."
        description="Light와 Dark Theme은 단순한 색상 반전이 아니라 Semantic Token을 기준으로 전환되며, 각 컴포넌트는 기본 상태뿐 아니라 Hover, Focus, Error와 Disabled 상태까지 함께 정의했습니다."
        images={themeImages}
        accent="frame"
        wideFirst={false}
      />

      <section className="project-key-ux project-key-ux--frame-application">
        <Container>
          <div className="project-key-ux__header">
            <p className="project-section__eyebrow">Design to Code</p>

            <div>
              <h2 className="project-section__title">
                디자인 시스템의 기준을 React UI와 실제 프로젝트에 연결했습니다.
              </h2>

              <p className="project-section__description">
                디자인에서 정의한 토큰과 상태를 코드로 구현하고,
                SLI Scientific 화면에 적용해 실제 사용 가능성을 확인했습니다.
              </p>
            </div>
          </div>

          <div className="project-key-ux__list">
            {implementationFeatures.map((feature, index) => (
              <ImageFeature
                key={feature.number}
                {...feature}
                reverse={index % 2 === 1}
                accent="frame"
              />
            ))}
          </div>
        </Container>
      </section>

      <ProjectClosing
        title="디자인 기준을 토큰과 컴포넌트로 설계하고 React UI로 구현했습니다."
        description="UI Foundation 정의부터 컴포넌트 상태, 테마와 실제 프로젝트 적용까지 전체 과정을 진행했습니다."
        roleItems={roleItems}
        tools={projectTools}
        outcome="반복되는 시각 기준을 디자인 토큰과 컴포넌트로 구조화하고, Light·Dark Theme과 React UI로 구현했습니다."
        reflection="디자인 시스템은 컴포넌트의 수보다 기준의 관계를 명확하게 정리하는 것이 중요하다는 점을 확인했습니다. 또한 토큰과 상태를 실제 서비스 화면에 적용하면서 디자인과 구현이 같은 언어를 사용할 수 있는 구조를 구체화했습니다."
        liveUrl={project.liveUrl}
        githubUrl={project.githubUrl}
        nextProject={nextProject}
        accent="frame"
      />

    </PageLayout>    
  );
}

export default FrameProjectPage;