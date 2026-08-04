import PageLayout from "../components/layout/PageLayout";
import ProjectHero from "../components/project/ProjectHero";
import ProjectOverview from "../components/project/ProjectOverview";
import InsightGrid from "../components/project/InsightGrid";
import ProcessFlow from "../components/project/ProcessFlow";
import Container from "../components/common/Container";
import ImageFeature from "../components/project/ImageFeature";
import ProjectGallery from "../components/project/ProjectGallery";
import ResponsiveShowcase from "../components/project/ResponsiveShowcase";
import ProjectClosing from "../components/project/ProjectClosing";
import { projects } from "../data/projects";


function SliProjectPage() {
  const project = projects.find(
    (item) => item.id === "sli-scientific"
  );

  if (!project) {
    return null;
  }

  const overviewDetails = [
    {
      label: "Project Scope",
      value:
       "문제 정의 · 정보구조 재설계 · UI/UX 디자인 · 반응형 UI",
    },
    {
      label: "Core Flow",
      value:
        "제품 탐색 → 상세 검토 → 자료 확인 → 문의",
    },
    {
      label: "Target",
      value:
        "연구장비를 비교하고 기술 정보를 검토하는 B2B 고객",
    },
    {
      label: "Design & Environment",
      value:
        "Figma · HTML/CSS · React 기반 구현 환경 · GitHub · Vercel",
    },
  ];

  const problems = [
    {
      title: "회사소개 중심의 정보구조",
      description:
        "제품을 찾으려는 사용자의 목적보다 회사와 브랜드 소개가 먼저 노출되어 탐색 흐름이 길어졌습니다.",
    },
    {
      title: "분산된 제품 정보",
      description:
        "제품군, 상세 사양과 관련 자료가 여러 위치에 흩어져 비교와 기술 검토가 어렵습니다.",
    },
    {
      title: "문의로 이어지지 않는 흐름",
      description:
        "제품을 검토한 뒤 관련 정보를 유지한 채 문의로 이동할 수 있는 연결 구조가 부족했습니다.",
    },
  ];

  const iaFlow = [
    {
      label: "Discover",
      title: "제품군 탐색",
      description:
        "회사나 브랜드보다 사용 목적과 제품 유형을 기준으로 탐색을 시작하도록 구성했습니다.",
    },
    {
      label: "Compare",
      title: "제품 비교와 상세 검토",
      description:
        "제품 특징, 모델과 핵심 사양을 한 화면에서 검토할 수 있도록 정보의 우선순위를 정리했습니다.",
    },
    {
      label: "Verify",
      title: "기술 자료 확인",
      description:
        "제품과 관련된 카탈로그, 기술 문서와 연구 자료를 상세 화면에서 바로 확인할 수 있도록 연결했습니다.",
    },
    {
      label: "Contact",
      title: "제품 정보가 유지되는 문의",
      description:
        "선택한 제품과 모델 정보가 문의 화면으로 이어져 사용자가 같은 내용을 다시 입력하지 않도록 설계했습니다.",
    },
  ];
  
  const iaPrinciples = [
    {
      title: "제품 우선",
      description:
        "기업 소개보다 사용자가 찾는 제품과 제품군을 먼저 노출했습니다.",
    },
    {
      title: "카테고리 중심",
      description:
        "브랜드 기준이 아니라 장비 유형과 사용 목적을 기준으로 정보를 분류했습니다.",
    },
    {
      title: "검토에서 문의까지",
      description:
        "제품 탐색, 기술 확인과 문의가 끊기지 않도록 하나의 흐름으로 연결했습니다.",
    },
  ];

  const keyUxFeatures = [
    {
      number: "01",
      eyebrow: "Product Discovery",
      title: "검색과 카테고리 탐색을 하나의 흐름으로 연결했습니다.",
      description:
        "사용자가 제품명을 정확히 알지 못해도 제품군과 키워드를 이용해 관련 장비를 찾을 수 있도록 구성했습니다.",
      points: [
        "제품군 중심의 카테고리 구조",
        "검색어와 카테고리가 함께 반영되는 목록",
        "현재 탐색 결과를 확인할 수 있는 결과 수 표시",
      ],
      image: "/images/sli/product-search.png",
      imageAlt: "SLI Scientific 제품 검색과 필터 화면",
    },
    {
      number: "02",
      eyebrow: "Technical Review",
      title: "제품의 특징과 기술 정보를 단계적으로 검토할 수 있습니다.",
      description:
        "대표 제품인 Biological Safety Cabinet을 기준으로 제품 특징, 모델 정보, 상세 이미지와 관련 자료의 우선순위를 정리했습니다.",
      points: [
        "제품 특징과 핵심 정보의 명확한 위계",
        "상세 이미지와 기능 설명의 연결",
        "관련 카탈로그와 기술 자료 제공",
      ],
      image: "/images/sli/product-detail.png",
      imageAlt: "SLI Scientific 생물안전작업대 제품 상세 화면",
    },
    {
      number: "03",
      eyebrow: "Inquiry Conversion",
      title: "검토 중인 제품 정보가 문의 단계까지 유지됩니다.",
      description:
        "제품 상세에서 문의로 이동할 때 제품군, 제품과 모델 정보를 전달해 사용자가 같은 내용을 다시 입력하지 않도록 구성했습니다.",
      points: [
        "문의 유형과 제품 정보 자동 반영",
        "잘못된 URL 값에 대한 기본값 처리",
        "제품 검토와 문의 전환의 맥락 유지",
      ],
      image: "/images/sli/product-inquiry.png",
      imageAlt: "SLI Scientific 제품 문의 화면",
    },
  ];

  const finalUiImages = [
    {
      src: "/images/sli/final-home.png",
      alt: "SLI Scientific 메인 화면",
      caption: "Home · 제품 탐색 중심의 첫 화면",
    },
    {
      src: "/images/sli/final-products.png",
      alt: "SLI Scientific 제품 목록 화면",
      caption: "Products · 검색과 필터",
    },
    {
      src: "/images/sli/final-category.png",
      alt: "SLI Scientific 제품 카테고리 화면",
      caption: "Category · 제품군 중심 탐색",
    },
    {
      src: "/images/sli/final-resources.png",
      alt: "SLI Scientific 자료실 화면",
      caption: "Resources · 기술 자료 확인",
    },
  ];
  
  const responsiveImages = [
    {
      device: "desktop",
      label: "Desktop",
      width: "1440px",
      src: "/images/sli/responsive-desktop.png",
      alt: "SLI Scientific 데스크톱 화면",
    },
    {
      device: "tablet",
      label: "Tablet",
      width: "768px",
      src: "/images/sli/responsive-tablet.png",
      alt: "SLI Scientific 태블릿 화면",
    },
    {
      device: "mobile",
      label: "Mobile",
      width: "390px",
      src: "/images/sli/responsive-mobile.png",
      alt: "SLI Scientific 모바일 화면",
    },
  ];

  const roleItems = [
    "B2B 연구장비 사이트의 문제 정의와 방향 설정",
    "제품 중심 정보구조와 사용자 흐름 설계",
    "전체 페이지 UI/UX와 반응형 화면 설계",
    "페이지별 콘텐츠 구조와 탐색 기준 정의",
    "검색, 필터, 제품 상세와 문의 흐름의 동작 검수",
    "디자인 시스템을 활용한 UI 일관성 정리",
  ];
  
  const projectTools = [
    "Figma",
    "정보구조",
    "UI/UX 디자인",
    "반응형 UI",
    "HTML/CSS",
    "React 기반 환경",
    "GitHub",
    "Vercel",
  ];
  
  const nextProject = {
    title: "Frame Design System",
    subtitle: "디자인 토큰과 컴포넌트 시스템",
    category: "Design System",
    url: "/projects/frame-design-system",
  };

  const processImages = [
    {
      src: "/images/sli/process-low-fi.png",
      alt: "SLI Scientific 홈, 카테고리와 제품 상세 로우파이 와이어프레임",
      caption:
        "Low-fi · 홈에서 제품군을 탐색하고 카테고리와 제품 상세로 이어지는 핵심 구조를 한 화면에서 검토했습니다.",
      wide: true,
    },
    {
      src: "/images/sli/process-mid-home.png",
      alt: "SLI Scientific 홈 미드파이 와이어프레임",
      caption:
        "Mid-fi Home · 제품 탐색을 중심으로 첫 화면의 콘텐츠 우선순위를 구체화했습니다.",
    },
    {
      src: "/images/sli/process-mid-categorydetail.png",
      alt: "SLI Scientific 카테고리 미드파이 와이어프레임",
      caption:
        "Mid-fi Category · 제품군과 하위 카테고리의 탐색 구조를 구체화했습니다.",
    },
  ];

  return (
    <PageLayout>
      <ProjectHero project={project} />

      <ProjectOverview
        title="제품을 찾고 검토하는 흐름을 중심으로 사이트를 재구성했습니다."
        description="SLI Scientific은 회사소개 중심의 연구장비 홈페이지를 제품 탐색 중심의 B2B 플랫폼으로 전환한 개인 프로젝트입니다. 제품군을 기준으로 정보를 구조화하고, 상세 검토와 자료 확인, 문의까지 하나의 흐름으로 연결했습니다."
        details={overviewDetails}
      />

      <InsightGrid
        eyebrow="Problem"
        title="제품을 찾는 사용자의 흐름이 정보구조에 반영되지 않았습니다."
        description="기존 유형의 연구장비 사이트를 분석해 제품 탐색과 기술 검토를 방해하는 핵심 문제를 세 가지로 정리했습니다."
        items={problems}
        accent="sli"
      />

      <ProjectGallery
        eyebrow="Design Process"
        title="전체 탐색 구조를 먼저 확인하고, 주요 화면의 정보 위계를 단계적으로 구체화했습니다."
        description="로우파이에서는 홈에서 제품군, 카테고리와 제품 상세로 이어지는 전체 흐름을 검토했습니다. 이후 미드파이에서는 각 화면의 콘텐츠 우선순위와 기능 배치를 구체화했습니다."
        images={processImages}
        accent="sli"
        wideFirst={false}
        className="project-gallery--process"
      />

      <ProcessFlow
        eyebrow="IA Redesign"
        title="제품 탐색에서 문의까지 하나의 사용자 흐름으로 재구성했습니다."
        description="분산된 정보를 페이지 단위로 나열하는 대신, 사용자가 제품을 찾고 비교하고 기술 자료를 검토한 뒤 문의하는 실제 업무 흐름을 기준으로 정보구조를 설계했습니다."
        items={iaFlow}
        principles={iaPrinciples}
        accent="sli"
      />

      <section className="project-key-ux">
        <Container>
          <div className="project-key-ux__header">
            <p className="project-section__eyebrow">Key UX</p>

            <div>
              <h2 className="project-section__title">
                제품을 찾고 검토한 뒤 문의하는 주요 경험을 설계했습니다.
              </h2>

              <p className="project-section__description">
                전체 화면을 나열하기보다 B2B 제품 탐색 과정에서 중요한
                검색, 기술 검토와 문의 전환을 중심으로 정리했습니다.
              </p>
            </div>
          </div>

          <div className="project-key-ux__list">
            {keyUxFeatures.map((feature, index) => (
              <ImageFeature
                key={feature.number}
                {...feature}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </Container>
      </section>

      <ProjectGallery
        eyebrow="Final UI"
        title="제품 탐색과 기술 검토에 필요한 주요 화면을 일관된 구조로 구현했습니다."
        description="홈, 제품 목록, 카테고리와 자료실은 서로 다른 목적을 가지지만 동일한 탐색 기준과 UI Foundation을 사용하도록 구성했습니다."
        images={finalUiImages}
        accent="sli"
      />

      <ResponsiveShowcase
        title="화면 크기가 달라져도 정보의 우선순위와 사용자 흐름이 유지됩니다."
        description="단순히 요소의 크기를 줄이는 방식이 아니라, 각 화면에서 필요한 정보와 조작 방식에 맞게 레이아웃과 내비게이션을 전환했습니다."
        images={responsiveImages}
        accent="sli"
      />

      <ProjectClosing
        roleItems={roleItems}
        tools={projectTools}
        outcome="회사소개 중심의 사이트를 제품 탐색, 기술 검토와 문의가 연결되는 반응형 B2B 플랫폼으로 구현했습니다."
        reflection="제품이 많고 정보가 복잡한 B2B 환경에서는 시각적인 완성도만큼 정보구조와 탐색 기준이 중요하다는 점을 확인했습니다. 또한 디자인 시스템의 기준을 실제 서비스 화면에 적용하면서 설계와 구현 사이의 일관성을 유지하는 방법을 구체화했습니다."
        liveUrl={project.liveUrl}
        githubUrl={project.githubUrl}
        nextProject={nextProject}
        accent="sli"
      />

    </PageLayout>
  );
}

export default SliProjectPage;