import PageLayout from "../components/layout/PageLayout";
import Container from "../components/common/Container";
import ProjectHero from "../components/project/ProjectHero";
import ProjectOverview from "../components/project/ProjectOverview";
import InsightGrid from "../components/project/InsightGrid";
import ProcessFlow from "../components/project/ProcessFlow";
import ImageFeature from "../components/project/ImageFeature";
import ProjectGallery from "../components/project/ProjectGallery";
import ResponsiveShowcase from "../components/project/ResponsiveShowcase";
import ProjectClosing from "../components/project/ProjectClosing";
import { projects } from "../data/projects";

function MinimalProjectPage() {
  const project = projects.find(
    (item) => item.id === "minimal-ecommerce"
  );

  if (!project) {
    return null;
  }

  const overviewDetails = [
    {
      label: "Project Scope",
      value:
        "UI Design · Product Discovery · Interaction Planning · Responsive UI",
    },
    {
      label: "Core Flow",
      value:
        "상품 탐색 → 필터·정렬 → 상세 확인 → 장바구니",
    },
    {
      label: "Interaction",
      value:
        "Filter Chips · Product Options · Empty State · Bottom Sheet",
    },
    {
      label: "Design & Environment",
      value:
        "Figma · HTML/CSS · React 기반 환경 · GitHub · Vercel",
    },
  ];

  const problems = [
    {
      title: "탐색 조건이 분리된 상품 목록",
      description:
        "카테고리, 색상과 정렬 조건이 개별적으로 동작하면 사용자가 현재 적용된 조건과 결과를 이해하기 어렵습니다.",
    },
    {
      title: "상태 변화가 드러나지 않는 UI",
      description:
        "필터 결과 없음, 상품 선택과 장바구니 변경이 화면에 명확히 반영되지 않으면 사용자는 자신의 행동 결과를 확인하기 어렵습니다.",
    },
    {
      title: "데스크톱 기준의 조작 방식",
      description:
        "좁은 화면에서도 동일한 필터와 정렬 UI를 유지하면 필요한 기능을 찾고 조작하기 어려워질 수 있습니다.",
    },
  ];

  const shoppingFlow = [
    {
      label: "Browse",
      title: "상품 탐색",
      description:
        "상품 카드와 핵심 정보를 통해 전체 상품을 빠르게 살펴볼 수 있도록 구성했습니다.",
    },
    {
      label: "Refine",
      title: "필터와 정렬",
      description:
        "카테고리, 색상과 가격 정렬 조건을 조합해 원하는 상품의 범위를 좁힐 수 있도록 구성했습니다.",
    },
    {
      label: "Review",
      title: "상품 상세와 옵션 선택",
      description:
        "상세 페이지에서 상품 이미지와 정보를 확인하고, 컬러, 사이즈와 수량을 선택할 수 있도록 구성했습니다.",
    },
    {
      label: "Action",
      title: "장바구니 추가",
      description:
        "선택한 상품이 장바구니에 반영되고, 수량과 합계의 변화를 바로 확인할 수 있도록 구성했습니다.",
    },
  ];

  const interactionPrinciples = [
    {
      title: "현재 조건 표시",
      description:
        "적용된 필터와 결과 수를 함께 보여줘 현재 탐색 상태를 확인할 수 있도록 했습니다.",
    },
    {
      title: "즉각적인 상태 반영",
      description:
        "필터, 정렬과 장바구니 변경 결과가 별도 페이지 이동 없이 화면에 바로 나타나도록 했습니다.",
    },
    {
      title: "화면별 조작 방식",
      description:
        "데스크톱과 모바일 환경에 맞춰 필터와 정렬의 표현 및 조작 방식을 조정했습니다.",
    },
  ];

  const interactionFeatures = [
    {
      number: "01",
      eyebrow: "Filter & Sort",
      title: "여러 탐색 조건이 하나의 결과에 함께 반영됩니다.",
      description:
        "카테고리와 컬러 필터, 가격 정렬을 함께 적용하고 현재 선택한 조건을 칩과 결과 수로 확인할 수 있도록 구성했습니다.",
      points: [
        "카테고리와 컬러 조건 조합",
        "가격 낮은 순·높은 순 정렬",
        "적용된 조건 칩과 개별 해제",
        "전체 조건 초기화와 결과 수 표시",
      ],
      image: "/images/minimal/filter-sort.png",
      imageAlt: "Minimal Ecommerce 상품 필터와 정렬 화면",
    },
    {
      number: "02",
      eyebrow: "Product Detail",
      title: "상품 정보 확인과 옵션 선택이 장바구니까지 이어집니다.",
      description:
        "상세 페이지에서 상품 이미지와 기본 정보를 확인하고, 컬러, 사이즈와 수량을 선택한 뒤 총금액을 확인할 수 있도록 구성했습니다.",
      points: [
        "상품 이미지와 주요 정보의 명확한 위계",
        "컬러와 사이즈의 선택 상태 표시",
        "수량에 따라 변경되는 총금액",
        "선택한 옵션과 수량이 반영되는 장바구니",
      ],
      image: "/images/minimal/product-detail.png",
      imageAlt: "Minimal Ecommerce 상품 상세",
    },
    {
      number: "03",
      eyebrow: "State Feedback",
      title: "사용자의 선택과 그 결과를 화면에서 명확하게 확인할 수 있도록 했습니다.",
      description:
        "필터와 장바구니 변경 결과를 화면에 바로 반영하고, 조건에 맞는 상품이 없을 때는 다음 행동을 안내하는 Empty State를 구성했습니다.",
      points: [
        "장바구니 수량과 상품 정보의 연결",
        "필터 조건에 따른 결과 수 표시",
        "검색 결과가 없을 때 Empty State 제공",
        "조건을 다시 설정할 수 있는 초기화 안내",
      ],
      image: "/images/minimal/cart-state.png",
      imageAlt: "Minimal Ecommerce 장바구니와 결과 상태 화면",
    },
    {
      number: "04",
      eyebrow: "Responsive Interaction",
      title: "화면 크기와 터치 환경에 맞춰 탐색 방식을 조정했습니다.",
      description:
        "데스크톱의 필터와 정렬 구조를 그대로 축소하지 않고, 모바일에서도 주요 기능을 쉽게 찾고 조작할 수 있도록 다시 구성했습니다.",
      points: [
        "모바일 화면에 맞춘 상품 카드 배열",
        "정렬 옵션을 제공하는 Bottom Sheet",
        "필터 영역과 상품 목록의 우선순위 조정",
        "터치 환경을 고려한 버튼과 선택 영역",
      ],
      image: "/images/minimal/responsive-mobile.png",
      imageAlt: "Minimal Ecommerce 모바일 필터와 정렬 화면",
      imageClass: "image-feature__image--mobile",
    },
  ];

  const finalUiImages = [
    {
      src: "/images/minimal/final-products.png",
      alt: "Minimal Ecommerce 전체 상품 목록 화면",
      caption: "Products · 전체 상품 탐색",
    },
    {
      src: "/images/minimal/final-filtered.png",
      alt: "Minimal Ecommerce 필터와 정렬 적용 화면",
      caption: "Filtered Result · 조건 적용 결과",
    },    
    {
      src: "/images/minimal/final-empty.png",
      alt: "Minimal Ecommerce 검색 결과 없음 화면",
      caption: "Empty State · 결과 없음과 초기화 안내",
    },
  ];
  
  const responsiveImages = [
    {
      device: "desktop",
      label: "Desktop",
      width: "1440px",
      src: "/images/minimal/responsive-desktop.png",
      alt: "Minimal Ecommerce 데스크톱 화면",
    },
    {
      device: "tablet",
      label: "Tablet",
      width: "768px",
      src: "/images/minimal/responsive-tablet.png",
      alt: "Minimal Ecommerce 태블릿 화면",
    },
    {
      device: "mobile",
      label: "Mobile",
      width: "390px",
      src: "/images/minimal/responsive-mobile.png",
      alt: "Minimal Ecommerce 모바일 화면",
    },
  ];

  const roleItems = [
    "상품 탐색 흐름과 화면 구조 설계",
    "카테고리·컬러 필터와 가격 정렬 기준 정의",
    "적용 조건 칩과 전체 초기화 흐름 설계",
    "상품 상세의 옵션 선택과 장바구니 흐름 설계",
    "장바구니와 Empty State 등 상태별 UI 설계",
    "데스크톱·태블릿·모바일 반응형 화면 설계",
    "브라우저 동작 검수와 UI 조정",
  ];
  
  const projectTools = [
    "UI 디자인",
    "인터랙션 설계",
    "반응형 UI",
    "HTML/CSS",
    "React 기반 환경",
    "GitHub",
    "Vercel",
  ];
  
  const nextProject = {
    title: "SLI Scientific",
    subtitle: "제품 탐색 중심 B2B 플랫폼 리디자인",
    category: "B2B UX Redesign",
    url: "/projects/sli-scientific",
  };

  return (
    <PageLayout>
      <ProjectHero project={project} />

      <ProjectOverview
        title="상품 탐색부터 장바구니까지 상태가 이어지는 UI 흐름을 설계했습니다."
        description="상품 목록, 필터와 정렬, 상세 확인과 장바구니가 자연스럽게 이어지도록 화면 구조와 인터랙션을 구성한 개인 프로젝트입니다."
        details={overviewDetails}
      />

      <InsightGrid
        eyebrow="Challenge"
        title="커머스 UI에서는 사용자의 선택과 결과가 명확하게 이어져야 했습니다."
        description="상품 탐색 과정에서 현재 적용된 조건, 변경된 결과와 다음 행동을 쉽게 이해할 수 있도록 핵심 과제를 세 가지로 정리했습니다."
        items={problems}
        accent="minimal"
      />

      <ProcessFlow
        eyebrow="Core Flow"
        title="탐색에서 장바구니까지 상태가 이어지는 흐름을 설계했습니다."
        description="사용자가 상품을 살펴보고 조건을 좁힌 뒤, 상세 정보를 확인하고 장바구니에 추가하는 과정이 하나의 흐름으로 이어지도록 구성했습니다."
        items={shoppingFlow}
        principles={interactionPrinciples}
        accent="minimal"
      />

      <section className="project-key-ux project-key-ux--minimal">
        <Container>
          <div className="project-key-ux__header">
            <p className="project-section__eyebrow">Key Interaction</p>

            <div>
              <h2 className="project-section__title">
              탐색 과정에서 사용자의 선택과 결과가 자연스럽게 이어지도록 설계했습니다.
              </h2>

              <p className="project-section__description">
              필터와 정렬, 상품 상세, 상태 피드백과 모바일 조작 방식을 중심으로
              주요 인터랙션을 정리했습니다.
              </p>
            </div>
          </div>

          <div className="project-key-ux__list">
            {interactionFeatures.map((feature, index) => (
              <ImageFeature
                key={feature.number}
                {...feature}
                reverse={index % 2 === 1}
                accent="minimal"
              />
            ))}
          </div>
        </Container>
      </section>

      <ProjectGallery
        eyebrow="Final UI"
        title="탐색 조건과 상태 변화가 화면에 명확히 드러나도록 구성했습니다."
        description="전체 상품 목록, 필터 결과, 상품 상세와 결과 없음 상태를 동일한 시각 기준 안에서 구성했습니다."
        images={finalUiImages}
        accent="minimal"
      />

      <ResponsiveShowcase
        title="화면 크기에 따라 레이아웃과 탐색 방식을 조정했습니다."
        description="데스크톱에서는 탐색 조건과 상품 목록을 함께 보여주고, 모바일에서는 필터와 정렬을 좁은 화면과 터치 조작에 맞게 재구성했습니다."
        images={responsiveImages}
        accent="minimal"
      />

      <ProjectClosing
        title="상품 탐색과 선택 결과가 자연스럽게 이어지는 반응형 UI를 설계했습니다."
        description="상품 목록, 필터와 정렬, 상세 옵션 선택과 장바구니가 하나의 흐름으로 이어지도록 구성하고, 화면 크기에 맞춰 콘텐츠 배열과 조작 방식을 조정했습니다."
        roleItems={roleItems}
        tools={projectTools}
        outcome="상품 탐색 조건과 옵션 선택 결과가 장바구니까지 명확하게 이어지는 반응형 커머스 UI를 구성했습니다."
        reflection="커머스 UI에서는 사용자의 선택과 그 결과가 화면에 명확하게 이어져야 한다는 점을 확인했습니다. 또한 모바일에서는 데스크톱 화면을 단순히 축소하기보다, 콘텐츠의 우선순위와 조작 방식을 터치 환경에 맞게 다시 설계해야 했습니다."
        liveUrl={project.liveUrl}
        githubUrl={project.githubUrl}
        nextProject={nextProject}
        accent="minimal"
      />

    </PageLayout>
  );
}

export default MinimalProjectPage;