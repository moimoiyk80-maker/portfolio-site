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
        "UI Design · Product Discovery · State UI · Responsive UI · React",
    },
    {
      label: "Core Flow",
      value:
        "상품 탐색 → 필터·정렬 → 상세 확인 → 장바구니",
    },
    {
      label: "Interaction",
      value:
        "Modal · Filter Chips · Empty State · Bottom Sheet",
    },
    {
      label: "Tools",
      value:
        "React · Vite · JavaScript · HTML · CSS",
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
        "필터 결과 없음, 상품 선택과 장바구니 변경 같은 상태가 화면에 명확히 반영되지 않으면 인터랙션의 흐름이 끊깁니다.",
    },
    {
      title: "데스크톱 기준의 조작 방식",
      description:
        "좁은 화면에서도 동일한 필터와 정렬 UI를 유지하면 정보 밀도와 조작성이 떨어질 수 있습니다.",
    },
  ];

  const shoppingFlow = [
    {
      label: "Browse",
      title: "상품 탐색",
      description:
        "상품 카드와 기본 정보를 통해 전체 상품을 빠르게 살펴볼 수 있도록 구성했습니다.",
    },
    {
      label: "Refine",
      title: "필터와 정렬",
      description:
        "카테고리, 색상과 가격 정렬 조건을 조합해 원하는 상품 범위를 좁힐 수 있도록 구현했습니다.",
    },
    {
      label: "Review",
      title: "상세 확인",
      description:
        "목록의 맥락을 유지한 채 모달에서 상품 이미지와 상세 정보를 확인할 수 있도록 했습니다.",
    },
    {
      label: "Action",
      title: "장바구니 추가",
      description:
        "선택한 상품이 장바구니 상태에 반영되고 수량과 합계를 확인할 수 있도록 연결했습니다.",
    },
  ];

  const interactionPrinciples = [
    {
      title: "현재 조건 표시",
      description:
        "적용된 필터를 칩과 결과 수로 보여줘 탐색 상태를 확인할 수 있도록 했습니다.",
    },
    {
      title: "즉각적인 상태 반영",
      description:
        "필터, 정렬과 장바구니 변경이 별도 페이지 이동 없이 화면에 반영됩니다.",
    },
    {
      title: "화면별 조작 전환",
      description:
        "데스크톱과 모바일 환경에 맞춰 필터와 정렬의 표현 방식을 전환했습니다.",
    },
  ];

  const interactionFeatures = [
    {
      number: "01",
      eyebrow: "Filter & Sort",
      title: "여러 탐색 조건이 하나의 결과 상태에 반영됩니다.",
      description:
        "카테고리와 컬러 필터, 가격 정렬을 함께 적용하고 현재 선택된 조건을 칩과 결과 수로 확인할 수 있도록 구현했습니다.",
      points: [
        "카테고리와 컬러 조건 조합",
        "가격 낮은순·높은순 정렬",
        "적용된 조건 칩과 개별 해제",
        "전체 조건 초기화와 결과 수 표시",
      ],
      image: "/images/minimal/filter-sort.png",
      imageAlt: "Minimal Ecommerce 상품 필터와 정렬 화면",
    },
    {
      number: "02",
      eyebrow: "Product Detail",
      title: "목록의 맥락을 유지한 채 상품 상세를 확인합니다.",
      description:
        "별도 페이지로 이동하지 않고 모달에서 상품 이미지와 정보를 확인하도록 구성해 탐색 흐름이 끊기지 않도록 했습니다.",
      points: [
        "선택한 상품 데이터를 모달에 반영",
        "배경 클릭과 닫기 버튼 지원",
        "ESC 키로 모달 닫기",
        "열림 상태에 따른 화면 제어",
      ],
      image: "/images/minimal/product-modal.png",
      imageAlt: "Minimal Ecommerce 상품 상세 모달",
    },
    {
      number: "03",
      eyebrow: "State Feedback",
      title: "사용자의 선택과 결과 상태를 화면에 명확히 보여줍니다.",
      description:
        "상품 선택과 장바구니 변경이 즉시 화면에 반영되도록 구성하고, 탐색 결과가 없을 때는 별도의 Empty State를 제공했습니다.",
      points: [
        "장바구니 상태와 상품 정보 연결",
        "상태 변경 즉시 화면 반영",
        "검색 결과가 없을 때 Empty State 제공",
        "다음 행동을 안내하는 초기화 기능",
      ],
      image: "/images/minimal/cart-state.png",
      imageAlt: "Minimal Ecommerce 장바구니와 결과 상태 화면",
    },
    {
      number: "04",
      eyebrow: "Responsive Interaction",
      title: "모바일에서는 조작 방식 자체를 화면 환경에 맞게 전환했습니다.",
      description:
        "데스크톱의 필터와 정렬 구조를 그대로 축소하지 않고, 좁은 화면에서 쉽게 조작할 수 있는 방식으로 재구성했습니다.",
      points: [
        "상품 카드 1열 전환",
        "모바일 정렬 Bottom Sheet",
        "필터 영역과 상품 목록의 우선순위 조정",
        "터치 환경을 고려한 조작 크기",
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
    "카테고리·컬러 필터와 가격 정렬 구현",
    "적용 조건 칩과 전체 초기화 기능 구현",
    "상품 상세 모달과 ESC 닫기 인터랙션 구현",
    "장바구니와 Empty State 등 상태 UI 구현",
    "데스크톱·태블릿·모바일 반응형 UI 구현",
  ];
  
  const projectTools = [
    "React",
    "Vite",
    "JavaScript",
    "HTML",
    "CSS",
    "GitHub",
    "Vercel",
  ];
  
  const nextProject = {
    title: "SLI Scientific",
    subtitle: "B2B 연구장비 플랫폼 리디자인",
    category: "B2B UX Redesign",
    url: "/projects/sli-scientific",
  };

  return (
    <PageLayout>
      <ProjectHero project={project} />

      <ProjectOverview
        title="상품 탐색과 상태 변화를 하나의 React UI 흐름으로 구현했습니다."
        description="Minimal Ecommerce는 상품 목록을 보여주는 데 그치지 않고, 필터와 정렬, 상세 보기와 장바구니 상태가 서로 연결되도록 구현한 개인 프로젝트입니다."
        details={overviewDetails}
      />

      <InsightGrid
        eyebrow="Challenge"
        title="커머스 UI에서는 화면보다 상태 간 연결이 중요했습니다."
        description="상품 탐색 과정에서 사용자가 현재 조건과 결과, 다음 행동을 명확히 이해할 수 있도록 핵심 과제를 정리했습니다."
        items={problems}
        accent="minimal"
      />

      <ProcessFlow
        eyebrow="Core Flow"
        title="탐색에서 장바구니까지 상태가 이어지는 흐름을 설계했습니다."
        description="사용자가 상품을 찾고 조건을 좁힌 뒤 상세 정보를 확인하고 장바구니에 추가하는 과정을 하나의 연결된 인터랙션으로 구현했습니다."
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
                화면 전환보다 상태 변화가 자연스럽게 이어지도록 구현했습니다.
              </h2>

              <p className="project-section__description">
                상품 탐색 과정에서 중요한 필터와 정렬, 상세 확인,
                상태 피드백과 모바일 조작 방식을 중심으로 정리했습니다.
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
        title="탐색 조건과 상태 변화가 화면에 명확히 드러나는 UI를 구현했습니다."
        description="전체 상품 목록, 필터 결과, 상품 상세와 결과 없음 상태를 동일한 시각 기준 안에서 구성했습니다."
        images={finalUiImages}
        accent="minimal"
      />

      <ResponsiveShowcase
        title="화면 크기에 따라 레이아웃뿐 아니라 조작 방식도 전환했습니다."
        description="데스크톱에서는 넓은 화면을 활용해 탐색 조건과 상품을 함께 보여주고, 모바일에서는 필터와 정렬 조작을 좁은 화면에 맞게 재구성했습니다."
        images={responsiveImages}
        accent="minimal"
      />

      <ProjectClosing
        title="상품 탐색과 상태 기반 인터랙션을 React UI로 구현했습니다."
        description="목록, 필터, 정렬, 상세 보기와 장바구니 상태를 연결하고 다양한 화면 크기에 맞춰 조작 방식을 전환했습니다."
        roleItems={roleItems}
        tools={projectTools}
        outcome="상품 탐색 조건과 사용자 행동이 즉시 화면에 반영되는 반응형 커머스 UI를 구현했습니다."
        reflection="이 프로젝트를 통해 React UI에서는 개별 화면보다 상태 간 관계와 사용자 행동에 따른 피드백이 중요하다는 점을 구체적으로 확인했습니다. 또한 모바일에서는 레이아웃 축소보다 조작 방식의 전환이 필요하다는 기준을 정리했습니다."
        liveUrl={project.liveUrl}
        githubUrl={project.githubUrl}
        nextProject={nextProject}
        accent="minimal"
      />

    </PageLayout>
  );
}

export default MinimalProjectPage;