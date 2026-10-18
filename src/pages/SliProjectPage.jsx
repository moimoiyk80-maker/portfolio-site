import UiEvidence from "../components/project/UiEvidence";
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
  const project = projects.find((item) => item.id === "sli-scientific");

  if (!project) {
    return null;
  }

  const overviewDetails = [
    {
      label: "Project Scope",
      value:
        "문제 정의 · 정보구조 재설계 · UI/UX 디자인 · 반응형 화면 설계 · UI 검수",
    },
    {
      label: "Core Flow",
      value: "제품 탐색 → 상세 검토 → 자료 확인 → 문의",
    },
    {
      label: "Target",
      value: "제품을 비교하고 상세 정보를 검토하는 B2B 고객",
    },
    {
      label: "Design & Environment",
      value: "Figma · HTML/CSS · React 기반 환경 · GitHub · Vercel",
    },
  ];

  const problems = [
    {
      title: "회사소개 중심의 정보구조",
      description:
        "제품을 찾으려는 사용자의 목적보다 회사와 브랜드 소개가 먼저 노출되어 탐색 과정이 길어졌습니다.",
    },
    {
      title: "분산된 제품 정보",
      description:
        "제품군, 상세 사양과 관련 자료가 여러 위치에 흩어져 제품을 비교하고 검토하기 어려웠습니다.",
    },
    {
      title: "문의로 이어지지 않는 흐름",
      description:
        "제품을 검토한 뒤 선택한 정보를 유지한 채 문의로 이동할 수 있는 연결 구조가 부족했습니다.",
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
        "제품 특징, 모델과 주요 사양을 한 화면에서 확인할 수 있도록 정보의 우선순위를 정리했습니다.",
    },
    {
      label: "Verify",
      title: "관련 자료 확인",
      description:
        "카탈로그, 제품 문서와 참고 자료를 상세 화면에서 바로 확인할 수 있도록 연결했습니다.",
    },
    {
      label: "Contact",
      title: "제품 정보가 이어지는 문의",
      description:
        "선택한 제품과 모델 정보가 문의 화면까지 이어져 같은 내용을 다시 입력하지 않도록 설계했습니다.",
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
        "브랜드가 아니라 제품 유형과 사용 목적을 기준으로 정보를 분류했습니다.",
    },
    {
      title: "검토에서 문의까지",
      description:
        "제품 탐색, 상세 정보와 관련 자료 확인, 문의가 끊기지 않도록 하나의 흐름으로 연결했습니다.",
    },
  ];

  const keyUxFeatures = [
    {
      number: "01",
      eyebrow: "Product Discovery",
      title: "검색과 카테고리 탐색을 하나의 흐름으로 연결했습니다.",
      description:
        "사용자가 정확한 제품명을 알지 못해도 제품군과 키워드를 활용해 관련 제품을 찾을 수 있도록 구성했습니다.",
      points: [
        "제품군 중심의 카테고리 구조",
        "검색어와 카테고리가 함께 반영되는 제품 목록",
        "현재 탐색 결과를 확인할 수 있는 결과 수 표시",
      ],
      image: "/images/sli/product-search.png",
      imageAlt: "SLI Scientific 제품 검색과 필터 화면",
    },
    {
      number: "02",
      eyebrow: "Product Review",
      title:
        "제품의 특징과 상세 정보를 단계적으로 검토할 수 있도록 구성했습니다.",
      description:
        "대표 제품을 기준으로 주요 특징, 모델 정보, 상세 이미지와 관련 자료의 우선순위를 정리했습니다.",
      points: [
        "제품 특징과 핵심 정보의 명확한 위계",
        "모델 정보와 상세 사양의 단계적인 구성",
        "상세 이미지와 기능 설명의 연결",
      ],
      image: "/images/sli/product-detail.png",
      imageAlt: "SLI Scientific 제품 상세 화면",
    },
    {
      number: "03",
      eyebrow: "Inquiry Flow",
      title: "검토 중인 제품 정보가 문의 단계까지 이어집니다.",
      description:
        "제품 상세에서 문의로 이동할 때 제품군, 제품과 모델 정보가 함께 전달되어 같은 내용을 다시 입력하지 않도록 구성했습니다.",
      points: [
        "문의 유형과 제품 정보의 자동 반영",
        "유효하지 않은 정보에 대응하는 기본 문의 상태",
        "제품 검토에서 문의로 이어지는 맥락 유지",
      ],
      image: "/images/sli/product-inquiry.png",
      imageAlt: "SLI Scientific 제품 문의 화면",
    },
  ];

  const finalUiGroups = [
    {
      id: "discovery",
      number: "01",
      title: "제품 탐색",
      description:
        "검색과 카테고리를 주요 진입점으로 배치해 사용자가 필요한 제품군을 빠르게 좁힐 수 있도록 구성했습니다.",
      featured: {
        src: "/images/sli/final-home.png",
        alt: "SLI Scientific 메인 화면",
        caption: "Home · 제품 탐색 중심의 첫 화면",
      },
      secondary: [
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
      ],
    },
    {
      id: "review",
      number: "02",
      title: "제품 검토",
      description:
        "목록에서 제품 상세와 주요 특징으로 이어지는 정보 흐름을 구성해 제품을 단계적으로 검토할 수 있도록 했습니다.",
      reverse: true,
      featured: {
        src: "/images/sli/final-product-detail.png",
        alt: "SLI Scientific 제품 상세 화면",
        caption: "Product Detail · 주요 정보와 문의 연결",
      },
      secondary: [
        {
          src: "/images/sli/final-product-features.png",
          alt: "SLI Scientific 제품 주요 특징 영역",
          caption: "Features · 핵심 특징과 장점",
        },
        {
          src: "/images/sli/final-product-gallery.png",
          alt: "SLI Scientific 제품 이미지 영역",
          caption: "Gallery · 제품 이미지 확인",
        },
      ],
    },
    {
      id: "support",
      number: "03",
      title: "자료 확인과 문의",
      description:
        "관련 자료와 기업 정보를 확인한 뒤, 선택한 제품의 맥락이 문의 단계까지 이어지도록 구성했습니다.",
      featured: {
        src: "/images/sli/final-resources.png",
        alt: "SLI Scientific 자료실 화면",
        caption: "Resources · 관련 자료 확인",
      },
      secondary: [
        {
          src: "/images/sli/final-contact.png",
          alt: "SLI Scientific 문의 화면",
          caption: "Contact · 제품 정보가 연결된 문의",
        },
        {
          src: "/images/sli/final-about.png",
          alt: "SLI Scientific 회사 소개 화면",
          caption: "About · 신뢰 정보를 보완하는 화면",
        },
      ],
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
    "실무에서 관찰한 제품 정보 부족과 개선 방향 제시",
    "제품 탐색·상세 검토·자료·문의 흐름 설계",
    "화면 구성과 기본 Figma 자료 정리",
    "HTML·CSS 수정 및 반응형 화면 확인",
    "검색·필터·상세·문의 흐름의 브라우저 검수",
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
    subtitle: "라이브 UI Foundation과 기본 컴포넌트",
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
        description="SLI Scientific은 실무에서 겪은 제품 정보 부족을 바탕으로 재구성한 개인 프로젝트입니다. 브랜드·제품·화면은 가상으로 구성했습니다. 제품군을 기준으로 정보를 구조화하고, 상세 검토와 자료 확인, 문의까지 하나의 흐름으로 연결했습니다."
        details={overviewDetails}
      />

      <InsightGrid
        eyebrow="Problem"
        title="제품을 찾고 검토하는 흐름이 정보구조에 충분히 반영되지 않았습니다."
        description="실무에서 반복적으로 관찰한 B2B 사이트의 문제를 바탕으로, 제품 탐색을 어렵게 만드는 핵심 요소를 세 가지로 정리했습니다."
        items={problems}
        accent="sli"
      />

      <ProjectGallery
        eyebrow="Design Process"
        title="전체 탐색 구조와 화면별 정보 배치를 정리했습니다."
        description="로우파이는 홈·제품군·카테고리·상세로 이어지는 구조를, 미드파이는 화면별 콘텐츠 우선순위와 기능 배치를 보여주는 작업 자료입니다."
        images={processImages}
        accent="sli"
        wideFirst={false}
        className="project-gallery--process"
      />

      <ProcessFlow
        eyebrow="IA Redesign"
        title="제품 탐색에서 문의까지 하나의 사용자 흐름으로 재구성했습니다."
        description="분산된 정보를 페이지별로 나열하는 대신, 사용자가 제품을 찾고 비교한 뒤 관련 자료를 확인하고 문의하는 순서를 기준으로 정보구조를 설계했습니다."
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
                전체 화면을 나열하기보다 B2B 제품 탐색 과정에서 중요한 검색,
                상세 검토와 문의 흐름을 중심으로 정리했습니다.
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

      <section className="ui-proof" id="component-application">
        <Container>
          <header className="ui-proof__header">
            <p className="project-section__eyebrow">Component Structure & Application</p>
            <h2 className="project-section__title">설계 과정에서 만든 컴포넌트를 화면에 활용했습니다.</h2>
            <p>Frame의 기본 기준을 참고하고, 로우파이·하이파이 화면을 설계하면서 SLI에 필요한 버튼과 카드를 구성했습니다. 컬러는 딥블루로 조정하고 모서리 반경은 8px 기준을 적용했습니다.</p>
          </header>
          <div className="ui-proof__group">
            <h3>버튼 · 역할과 배경, 상태 구분</h3>
            <p>Type은 Primary·Secondary, Theme은 Light·Dark, State는 Default·Disabled로 구분했습니다. 필요한 5개 베리언트 조합을 구성했습니다.</p>
            <div className="ui-proof__grid">
              <UiEvidence file="sli-variants.jpg" alt="SLI Figma 버튼 컴포넌트 세트의 5개 베리언트" caption="Figma · 필요한 버튼 조합" compact />
              <UiEvidence file="sli-button-properties.jpg" alt="버튼 Type Theme State 속성 설정" caption="Figma · 역할·배경·상태 속성" compact />
            </div>
            <p>밝은 배경에서는 딥블루 채움과 외곽선을 사용하고, 어두운 배경에서는 밝은 외곽선과 흰색 채움으로 버튼을 표현했습니다.</p>
            <div className="ui-proof__grid">
              <UiEvidence file="sli-buttons-light.jpg" alt="밝은 SLI 메인 영역의 제품 찾기와 문의 버튼" caption="밝은 배경 · 딥블루 채움과 외곽선" />
              <UiEvidence file="sli-buttons-dark.jpg" alt="어두운 SLI 탐색 영역의 외곽선 버튼" caption="어두운 배경 · 밝은 외곽선" />
            </div>
            <UiEvidence file="sli-buttons-cta.jpg" alt="어두운 문의 안내 영역의 흰색 버튼" caption="어두운 배경 · 문의와 자료 확인 버튼" compact />
          </div>
          <div className="ui-proof__group">
            <h3>카드 · 내용 교체와 버튼 표시 설정</h3>
            <p>이미지·제목·설명·정보 영역·버튼을 묶었습니다. 제목과 설명은 텍스트 속성으로, 이미지는 교체 가능한 인스턴스로 구성하고 버튼 표시 여부는 Boolean 속성으로 조절합니다.</p>
            <div className="ui-proof__grid">
              <UiEvidence file="sli-card-structure.png" alt="이미지 제목 설명 사양 버튼으로 구성한 Figma 카드 레이어" caption="Figma · 카드의 기본 구조" />
              <UiEvidence file="sli-card-properties.jpg" alt="텍스트 이미지 교체 버튼 표시 여부를 조절하는 카드 속성" caption="Figma · 내용과 표시 여부를 조절하는 속성" />
            </div>
            <h3>용도에 맞춘 카드 적용</h3>
            <p>공통 시각 기준을 유지하면서 제품 카드에는 주요 사양과 상세 진입을, 카테고리 카드에는 분류 설명과 탐색 정보를 배치했습니다.</p>
            <div className="ui-proof__grid">
              <UiEvidence file="sli-product-card.jpg" alt="제품 이미지와 주요 사양 상세 진입을 담은 SLI 카드" caption="제품 카드 · 사양과 상세 진입" />
              <UiEvidence file="sli-category-card.jpg" alt="실험기구 카테고리의 설명과 상품군 정보를 담은 SLI 카드" caption="카테고리 카드 · 분류 탐색" />
            </div>
          </div>
        </Container>
      </section>

      <ProjectGallery
        eyebrow="Final UI"
        title="제품 탐색부터 상세 검토와 문의까지 주요 화면을 세 단계로 구성했습니다."
        description="탐색, 검토, 자료 확인과 문의 흐름이 공통된 정보 구조와 UI 기준 안에서 이어지도록 설계했습니다."
        groups={finalUiGroups}
        accent="sli"
      />

      <ResponsiveShowcase
        title="화면 크기가 달라져도 정보의 우선순위와 사용자 흐름이 이어집니다."
        description="데스크톱 화면을 단순히 축소하지 않고, 화면 크기와 조작 환경에 맞춰 콘텐츠 배열과 내비게이션 방식을 조정했습니다."
        images={responsiveImages}
        accent="sli"
      />

      <ProjectClosing
        title="실무 문제를 설계 과제로 발전시킨 개인 프로젝트"
        description="실무에서 관찰한 문제를 바탕으로 정보구조와 UI를 구성하고, 화면 검토와 수정을 진행했습니다."
        roleItems={roleItems}
        tools={projectTools}
        aiSupport={project.aiSupport}
        outcome="회사소개 중심의 구조를 제품 탐색, 상세 검토와 문의가 자연스럽게 이어지는 반응형 B2B 정보 플랫폼으로 재구성했습니다."
        reflection="정보가 많은 B2B 환경에서는 시각적 완성도뿐 아니라, 사용자가 필요한 제품을 찾고 검토할 수 있는 정보구조와 탐색 기준이 중요했습니다. 또한 디자인 시스템의 원칙을 콘텐츠와 사용 맥락에 맞게 조정해 적용했습니다."
        liveUrl={project.liveUrl}
        githubUrl={project.githubUrl}
        nextProject={nextProject}
        accent="sli"
      />
    </PageLayout>
  );
}

export default SliProjectPage;
