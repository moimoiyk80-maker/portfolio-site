import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import PageLayout from "../components/layout/PageLayout";
import "../styles/commercial.css";

function Evidence({ file, alt, caption, className = "" }) {
  return (
    <figure className={`commercial-evidence ${className}`}>
      <img src={`/images/commercial/${file}`} alt={alt} loading="lazy" />
      <figcaption>
        {caption}
        <a className="commercial-evidence-link" href={`/images/commercial/${file}`} target="_blank" rel="noreferrer" aria-label={`${alt} 이미지 크게 보기 (새 탭)`}>이미지 크게 보기 ↗</a>
      </figcaption>
    </figure>
  );
}
export default function CommercialProjectPage() {
  return (
    <PageLayout>
      <article className="commercial-page">
        <Container>
          <header className="commercial-intro">
            <Link className="text-link" to="/#experience">
              실무 사례 목록으로
            </Link>
            <p className="commercial-eyebrow">
              COMMERCIAL WORK / UI DESIGN & IMPLEMENTATION
            </p>
            <h1>
              여러 서비스의 UI 기준과
              <br />
              모바일 정보 구조를 정리한 실무
            </h1>
            <p className="commercial-lead">
              서비스별 차이를 유지하며 반복 UI를 맞추고, 복잡한 상품 정보를
              모바일에 맞게 구성했습니다. 화면 디자인과 HTML·CSS를 직접 작업하고
              개발자와 동작을 조율했습니다.
            </p>
            <dl className="commercial-meta">
              <div>
                <dt>업무 환경</dt>
                <dd>
                  2014년부터 웹 디자인·퍼블리싱 담당
                  <br />
                  개발자와 협업하는 인하우스 환경
                </dd>
              </div>
              <div>
                <dt>직접 담당</dt>
                <dd>
                  화면 구조·UI 디자인·반응형 HTML/CSS
                  <br />
                  개발 반영 후 화면 수정·커밋
                </dd>
              </div>
              <div>
                <dt>협업 범위</dt>
                <dd>
                  동작 세부 구현·백엔드: 개발자 협업
                  <br />
                  운영 콘텐츠: 실무자와 협의
                </dd>
              </div>
            </dl>
            <p className="commercial-note">
              회사·사이트명은 비공개입니다. 이미지는 실제 사이트의 캡처를 바탕으로
              식별 정보를 가린 편집본이며, 사례에 필요한 영역만 제시합니다.
            </p>
            <nav className="commercial-index" aria-label="실무 사례 목차">
              <a href="#shared-ui">01 공통 서비스 UI</a>
              <a href="#mobile-ui">02 모바일 정보 구성</a>
              <a href="#discount-ui">03 할인 사유 표시</a>
            </nav>
          </header>

          <section id="shared-ui" className="commercial-section">
            <p className="commercial-eyebrow">01 / SHARED UI</p>
            <h2>
              같은 서비스군의 표현을 맞추고,
              <br />
              안내 내용에 따라 배치를 달리했습니다
            </h2>
            <div className="commercial-copy-grid">
              <div>
                <h3>반복되는 화면의 기준</h3>
                <p>
                  서비스 사이트 4~5개의 기본 컬러와 버튼, 헤더·푸터를
                  맞췄습니다. 각 서비스의 로고와 실제 업무 절차는 유지했습니다.
                </p>
              </div>
              <div>
                <h3>공통 표현과 필요한 차이</h3>
                <p>
                  AS·렌탈은 아이콘과 화살표로 진행 흐름을 보여주고, 교정은
                  단계별 설명과 신청 버튼을 세로로 배치했습니다. 절차 자체를
                  통일하기보다 안내 표현에 공통 기준을 적용했습니다.
                </p>
              </div>
            </div>
            <div className="commercial-process-grid">
              <div>
                <Evidence
                  file="service-as.jpg"
                  alt="AS의 입고·방문 서비스 절차 안내"
                  caption="AS / 입고·방문 절차를 아이콘과 흐름으로 안내"
                />
                <Evidence
                  file="service-rental.jpg"
                  alt="렌탈 신청에서 계약 종료까지의 단계 안내"
                  caption="렌탈 / 단계명 아래에 설명을 배치"
                />
              </div>
              <Evidence
                file="calibration.png"
                alt="교정 서비스의 단계별 설명과 신청 버튼, 연락처 비공개"
                caption="교정 / 긴 설명과 실행 버튼이 필요한 세로 단계 구성"
              />
            </div>
            <p className="commercial-note">
              위 캡처는 프로세스 안내 표현의 사례입니다. 공통 헤더·푸터와 전체
              버튼 체계는 별도 실무 범위이며, 이 이미지에 모두 포함되지는
              않습니다.
            </p>
          </section>

          <section id="mobile-ui" className="commercial-section">
            <p className="commercial-eyebrow">02 / RESPONSIVE UI</p>
            <h2>
              길게 나열된 옵션을 묶고,
              <br />
              상품 정보를 모바일 블록으로 구성했습니다
            </h2>
            <p className="commercial-lead">
              2015년 모바일 구축 이후, 2025년 말~2026년 초 리뉴얼에서 옵션
              그룹과 상품·주문 정보의 배치를 다시 정리했습니다.
            </p>
            <p className="commercial-constraint">
              <strong>제작 조건</strong> 상품 상세 설명은 카탈로그 이미지를
              그대로 사용하는 방식이었습니다. 해당 영역을 유지하면서 옵션 선택과
              상품·주문 정보의 모바일 배치를 개선했습니다.
            </p>
            <div className="commercial-mobile-grid">
              <div>
                <h3>옵션 전체 구성을 파악할 수 있도록</h3>
                <p>
                  여러 상품의 옵션이 길게 이어져 모바일에서 전체 구성을 파악하기
                  어려웠습니다. 옵션 그룹을 접고 펼쳐 필요한 묶음을 확인하도록
                  제안했습니다.
                </p>
                <h3>직접 구성하고 구현한 화면</h3>
                <p>
                  PC의 가로 표 정보를 모바일의 상품별 세로 블록으로
                  재배치했습니다. 그룹 제목, 상품 정보, 수량 입력과 담기 버튼을
                  구성하고 반응형 HTML·CSS를 직접 작업했습니다.
                </p>
                <h3>동작 설계와 개발 협업</h3>
                <p>
                  첫 그룹만 열고 다른 그룹을 열면 기존 그룹이 닫히도록 동작을
                  정의하고, 세부 구현은 개발자에게 요청했습니다. 현재 운영
                  화면은 그룹이 모두 열린 상태로 시작하며, 접기·펼치기는
                  작동합니다.
                </p>
                <p className="commercial-note">
                  이미지는 옵션 일부를 접은 상태입니다.
                </p>
              </div>
              <Evidence
                file="options.png"
                alt="접힌 옵션 그룹과 펼친 상품 정보 블록"
                caption="현재 모바일 / 접힌 그룹과 열린 그룹의 화면 구성"
                className="commercial-phone"
              />
            </div>
            <div className="commercial-mobile-grid commercial-mobile-grid--checkout">
              <div>
                <h3>상품 정보·주문금액·증빙정보를 구분</h3>
                <p>
                  상품별 정보와 주문 전체의 금액을 서로 다른 영역으로
                  묶었습니다. 금액 영역은 구매액·부가세·배송비·합계를 항목별로
                  정렬하고, 증빙정보는 별도 입력 영역에 배치했습니다.
                </p>
                <p>
                  정보 묶음과 화면 디자인, HTML·CSS를 직접 구성했습니다. 이번
                  사례는 해당 영역의 정보 배치와 반응형 구현을 다룹니다.
                </p>
                <p className="commercial-note">
                  결제수단 선택과 배송문의 영역은 사례 범위에서 제외했습니다.
                </p>
                <h3>구현 환경에서 이어지는 작업</h3>
                <p>
                  퍼블리싱 결과를 개발팀에 전달한 뒤에도 React 파일의 화면
                  구조와 CSS를 수정하고 커밋했습니다.                   
                  <br></br>운영되는 사이트중 그룹홈페이지는 인수인계받은
                  절차에 따라 운영 서버 반영까지 담당합니다.
                </p>
              </div>
              <Evidence
                file="checkout.png"
                alt="상품 정보, 주문금액과 증빙정보를 구분한 모바일 화면"
                caption="현재 모바일 / 상품·주문금액·증빙정보 영역"
                className="commercial-phone commercial-phone--checkout"
              />
            </div>
          </section>

          <section id="discount-ui" className="commercial-section">
            <p className="commercial-eyebrow">03 / PRODUCT INFORMATION</p>
            <h2>
              할인율과 함께
              <br />
              할인 사유도 확인할 수 있도록 제안했습니다
            </h2>
            <div className="commercial-copy-grid">
              <div>
                <h3>실무자 요청에 더한 정보</h3>
                <p>
                  상품마다 할인율이 달라 할인율을 강조해 달라는 요청을
                  받았습니다. 사용자가 차이를 이해할 수 있도록 할인 사유도 함께
                  표시하자고 제안했습니다.
                </p>
              </div>
              <div>
                <h3>서비스 화면의 확장</h3>
                <p>
                  중고판매 서비스에는 상품 상세페이지를 추가하고 서비스 사이트의
                  버튼 스타일을 적용했습니다. 사진 등 자주 바뀌는 항목은
                  관리자가 수정하도록 요청했으며, 관리자 기능은 개발팀이
                  구현했습니다.
                </p>
              </div>
            </div>
            <Evidence
              file="discount.png"
              alt="제품 정보를 가린 할인율과 추천 이유 표시 예시"
              caption="현재 작업 화면 일부 / 할인율·추천 이유 표시 개선은 운영 반영 중"
            />
            <p className="commercial-note">
              진행 중인 사례입니다. 반영 완료 후의 이용 성과나 구매 전환 개선은
              측정하지 않았습니다.
            </p>
          </section>
          <footer className="commercial-end">
            <h2>
              UI의 기준을 정하고
              <br />
              실제 화면에 맞춰 조정해왔습니다
            </h2>
            <p>
              개인 프로젝트에서는 정보구조와 기본 UI 기준을 확장해보고, 구현된
              화면을 검수하며 HTML·CSS를 수정했습니다.
            </p>
            <Link className="text-link" to="/projects/sli-scientific">
              SLI Scientific 사례 보기 →
            </Link>
          </footer>
        </Container>
      </article>
    </PageLayout>
  );
}
