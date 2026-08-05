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
        "UI Foundation · Design Tokens · Components · States · Theme",
    },
    {
      label: "System Structure",
      value:
        "Primitive → Semantic → Component → UI Application",
    },
    {
      label: "Application",
      value:
        "컴포넌트 사용 기준 정리와 SLI Scientific UI 적용",
    },
    {
      label: "Design & Environment",
      value:
        "Figma · HTML/CSS · React 기반 환경 · GitHub · Vercel",
    },
  ];

  const problems = [
    {
      title: "화면마다 달라지는 시각 기준",
      description:
        "컬러, 간격과 타이포그래피 기준을 화면마다 개별적으로 적용하면 수정 과정에서 일관성을 유지하기 어렵습니다.",
    },
    {
      title: "상태 기준이 부족한 컴포넌트",
      description:
        "기본 화면만 정의하면 Hover, Focus, Error와 Disabled 같은 인터랙션 상태가 화면마다 다르게 표현될 수 있습니다.",
    },
    {
      title: "디자인 기준과 실제 화면의 차이",
      description:
        "디자인 속성과 브라우저 화면의 스타일 기준을 별도로 관리하면 같은 UI를 반복해서 확인하고 조정해야 합니다.",
    },
  ];

  const systemFlow = [
    {
      label: "Foundation",
      title: "Primitive Tokens",
      description:
        "컬러, 간격과 크기처럼 반복해서 사용하는 기초 값을 정의했습니다.",
    },
    {
      label: "Meaning",
      title: "Semantic Tokens",
      description:
        "기초 값에 역할과 의미를 부여해 사용 목적에 따라 선택할 수 있도록 구성했습니다.",
    },
    {
      label: "Application",
      title: "Component Tokens",
      description:
        "Button과 Input 등 각 컴포넌트에 필요한 속성과 상태 기준을 연결했습니다.",
    },
    {
      label: "Validation",
      title: "UI Application",
      description:
        "토큰과 상태 기준을 브라우저 화면에 적용하고, 일관되게 표현되는지 검수했습니다.",
    },
  ];

  const systemPrinciples = [
    {
      title: "일관성",
      description:
        "같은 역할의 UI가 화면마다 동일한 시각 기준과 상태 원칙을 사용하도록 했습니다.",
    },
    {
      title: "재사용성",
      description:
        "반복되는 값을 공통 기준으로 정리해 여러 컴포넌트와 화면에서 활용할 수 있도록 했습니다.",
    },
    {
      title: "화면 검증",
      description:
        "Figma에서 정리한 기준이 브라우저 화면에서도 일관되게 표현되는지 확인했습니다.",
    },
  ];

  const foundationFeatures = [
    {
      number: "01",
      eyebrow: "Foundations & Tokens",
      title: "반복되는 시각 기준을 재사용 가능한 토큰으로 체계화했습니다.",
      description:
        "컬러, 타이포그래피, 간격과 반경을 화면마다 개별적으로 지정하지 않고 공통 기준으로 정리했습니다. Primitive와 Semantic 계층을 구분해 각 값을 목적에 맞게 선택할 수 있도록 구성했습니다.",
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
      title: "반복되는 UI를 일관된 컴포넌트 기준으로 정리했습니다.",
      description:
        "토큰을 Button, Input, Badge와 Tag 등에 적용하고, 용도와 크기, 상태에 따라 일관되게 사용할 수 있도록 기준을 정리했습니다.",
      points: [
        "용도와 위계에 따른 컴포넌트 변형",
        "공통 토큰을 활용한 일관된 스타일",
        "실제 화면 조합을 고려한 사용 기준",
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
      eyebrow: "UI Validation",
      title: "디자인 기준을 실제 브라우저 화면에서 검증했습니다.",
      description:
        "디자인 토큰과 컴포넌트 상태를 브라우저 화면에서 확인하고, 설계한 기준이 실제 UI에 일관되게 표현되도록 HTML/CSS와 화면 결과를 검수·조정했습니다.",
      points: [
        "토큰 값을 CSS 변수 기준으로 정리",
        "컴포넌트 변형과 상태별 표현 기준 정의",
        "디자인 기준과 브라우저 화면 비교 및 조정",
      ],
      image: "/images/frame/design-to-code.png",
      imageAlt: "Frame Design System 디자인 기준과 브라우저 UI 비교 화면",
    },
    {
      number: "04",
      eyebrow: "Project Application",
      title: "디자인 시스템 원칙을 SLI Scientific UI에 적용했습니다.",
      description:
        "Frame을 독립된 컴포넌트 예시에 그치지 않고, SLI Scientific의 버튼, 입력 요소, 카드와 주요 화면에 공통된 UI 기준으로 적용했습니다.",
      points: [
        "프로젝트 전반의 컬러와 간격 기준 적용",
        "버튼과 입력 요소의 상태 기준 유지",
        "반복되는 UI 패턴에 공통 원칙 적용",
      ],
      image: "/images/frame/application-sli.png",
      imageAlt: "Frame Design System 원칙을 적용한 SLI Scientific 화면",
    },
  ];

  const roleItems = [
    "디자인 시스템의 범위와 구조 정의",
    "컬러, 타이포그래피, 간격과 반경 토큰 설계",
    "Primitive와 Semantic Token 계층 구성",
    "대표 컴포넌트와 인터랙션 상태 설계",
    "Light·Dark Theme 기준 정리",
    "브라우저 UI 검수와 SLI Scientific 프로젝트 적용",
  ];
  
  const projectTools = [
    "Figma",
    "HTML/CSS",
    "React 기반 환경",
    "Vite",
    "GitHub",
    "Vercel",
  ];
  
  const nextProject = {
    title: "Minimal Ecommerce",
    subtitle: "상태 기반 반응형 커머스 UI",
    category: "Responsive Commerce UI",
    url: "/projects/minimal-ecommerce",
  };

  return (
    <PageLayout>
      <ProjectHero project={project} />

      <ProjectOverview
        title="반복되는 UI 기준을 토큰과 컴포넌트 원칙으로 정리했습니다."
        description="화면마다 반복되는 컬러, 타이포그래피, 간격과 상태 기준을 체계화하고, 컴포넌트와 테마에 일관되게 적용한 개인 디자인 시스템 프로젝트입니다."
        details={overviewDetails}
      />

      <InsightGrid
        eyebrow="Problem"
        title="일관된 화면을 만들기 위해서는 개별 스타일보다 공통된 기준이 필요했습니다."
        description="반복되는 스타일과 인터랙션 상태를 화면마다 따로 정의할 때 발생하는 문제를 세 가지로 정리했습니다."
        items={problems}
        accent="frame"
      />

      <ProcessFlow
        eyebrow="System Goal"
        title="기초 값에서 실제 화면까지 이어지는 기준을 설계했습니다."
        description="단순한 컴포넌트 모음이 아니라, 기초 값에 역할과 의미를 부여하고 컴포넌트와 브라우저 화면까지 연결되는 구조로 구성했습니다."
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
              토큰 기준을 컴포넌트와 실제 화면에 일관되게 적용했습니다.
              </h2>

              <p className="project-section__description">
              기초 값을 정의하는 데 그치지 않고, 실제 인터페이스에서
              반복되는 요소와 상태에 공통된 기준이 적용되도록 정리했습니다.
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
        description="Light와 Dark Theme은 단순히 색상을 반전하지 않고 Semantic Token에 따라 구분했습니다. 또한 각 컴포넌트에 Default, Hover, Focus, Error와 Disabled 상태 기준을 함께 정리했습니다."
        images={themeImages}
        accent="frame"
        wideFirst={false}
      />

      <section className="project-key-ux project-key-ux--frame-application">
        <Container>
          <div className="project-key-ux__header">
            <p className="project-section__eyebrow">UI Application & Validation</p>

            <div>
              <h2 className="project-section__title">
              디자인 시스템의 기준을 브라우저 UI와 프로젝트 화면에 적용했습니다.
              </h2>

              <p className="project-section__description">
              디자인에서 정리한 토큰과 상태 기준이 브라우저 화면에 일관되게 표현되는지 확인하고,
              SLI Scientific UI에도 같은 원칙을 적용했습니다.
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
        title="디자인 기준을 토큰과 컴포넌트 원칙으로 체계화했습니다."
        description="UI Foundation부터 컴포넌트 상태와 테마 기준을 정리하고, 브라우저 화면 검수와 SLI Scientific UI 적용까지 연결했습니다."
        roleItems={roleItems}
        tools={projectTools}
        outcome="반복되는 시각 기준을 디자인 토큰과 컴포넌트 원칙으로 체계화하고, Light·Dark Theme과 프로젝트 화면에 일관되게 적용했습니다."
        reflection="디자인 시스템에서는 컴포넌트의 수보다 토큰, 상태와 사용 기준 사이의 관계를 명확하게 정리하는 것이 중요했습니다. 브라우저 화면에서 각 기준을 비교하며, 일관성을 유지하기 위해 어떤 규칙이 필요한지 구체적으로 확인했습니다."
        liveUrl={project.liveUrl}
        githubUrl={project.githubUrl}
        nextProject={nextProject}
        accent="frame"
      />

    </PageLayout>    
  );
}

export default FrameProjectPage;