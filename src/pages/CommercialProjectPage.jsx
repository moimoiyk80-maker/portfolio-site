import UiEvidence from "../components/project/UiEvidence";
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
              공통 UI와 운영 목적에 맞춰
              <br />
              화면을 구성하고 구현한 실무
            </h1>
            <p className="commercial-lead">
              서비스별 차이를 유지하며 반복 UI를 맞추고, 복잡한 상품 정보를
              모바일에 맞게 구성했습니다. 로그인 통합, 상시 특가 영역과 상담 랜딩을 설계하고, 화면 디자인과 HTML·CSS를 직접 작업하며
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
              회사·사이트명은 비공개입니다. 이미지는 업무 캡처를 바탕으로
              식별 정보를 가린 편집본이며, 사례에 필요한 영역만 제시합니다.
            </p>
            <nav className="commercial-index" aria-label="실무 사례 목차">
              <a href="#shared-ui">01 공통 서비스 UI</a>
              <a href="#shared-css">02 공통 버튼 CSS</a>
              <a href="#login-ui">03 로그인 통합</a>
              <a href="#mobile-ui">04 상품·주문 정보</a>
              <a href="#discount-ui">05 할인 상품 운영</a>
              <a href="#consulting-ui">06 상담 랜딩</a>
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
                  본사·자회사별 컬러를 구분하고 서비스 사이트 4~5개의 버튼, 헤더·푸터 표현을 정리했습니다. 각 서비스의 로고와 실제 업무 절차는 유지했습니다.
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

          <section id="shared-css" className="commercial-section ui-proof">
            <p className="commercial-eyebrow">02 / SHARED CSS</p>
            <h2>공통 버튼 클래스로<br />색상 변경을 일괄 반영했습니다</h2>
            <div className="commercial-copy-grid">
              <div><h3>초기 판단 · UI의 색상 사용 절제</h3><p>상품 이미지와 콘텐츠에 브랜드 블루가 많이 사용돼, 주요 버튼에는 다크 컬러 #1F2937을 적용했습니다. 주요·보조 버튼의 스타일을 공통 클래스로 나눠 관리했습니다.</p></div>
              <div><h3>변경 대응 · 브랜드 색상 적용</h3><p>브랜드 색상 적용 요청에 따라 .Abut의 배경색을 #007AC1로 수정했습니다. 해당 클래스를 사용하는 버튼에 변경 사항을 한 번에 반영했습니다. .Bbut는 보조 버튼의 스타일입니다.</p></div>
            </div>
            <div className="ui-proof__grid">
              <UiEvidence file="button-before.jpg" alt="다크 컬러의 기존 담기 버튼" caption="변경 전 · #1F2937" compact />
              <UiEvidence file="button-after.jpg" alt="브랜드 블루를 적용한 담기 버튼" caption="변경 후 · #007AC1" compact />
            </div>
            <h3>직접 작성한 공통 CSS</h3>
            <UiEvidence file="button-css.jpg" alt="Abut와 Bbut로 주요·보조 버튼 스타일을 관리한 실제 CSS" caption="실제 클래스명 유지 · .Abut 주요 버튼 / .Bbut 보조 버튼" compact />
            <h3>다른 화면의 적용 모습</h3>
            <div className="ui-proof__grid ui-proof__grid--three">
              <UiEvidence file="button-more.jpg" alt="목록 더보기 버튼" caption="목록 더보기" compact />
              <UiEvidence file="button-event.jpg" alt="진행 중인 이벤트와 종료된 이벤트 버튼" caption="이벤트 전환" compact />
              <UiEvidence file="button-document.jpg" alt="인증서와 사용설명서 버튼" caption="자료 확인" compact />
            </div>
          </section>

          <section id="login-ui" className="commercial-section">
            <p className="commercial-eyebrow">03 / LOGIN CONSISTENCY</p>
            <h2>분리 운영하던 로그인 화면을<br />공통 구조로 정리했습니다</h2>
            <div className="commercial-copy-grid">
              <div><h3>PC·모바일에서 달랐던 진입 경로</h3>
                <p>데스크톱과 모바일 쇼핑몰을 따로 운영하면서 입력창과 로그인 방법, 회원가입 경로의 배치도 달랐습니다. 반응형 전환에 맞춰 로그인 UI를 공통 구조로 교체했습니다.</p></div>
              <div><h3>로그인 방법과 다음 행동을 명확하게</h3>
                <p>입력창 위에 항목명을 두고, 기본 로그인과 소셜 로그인, 회원가입, 비회원 주문조회를 한 화면에 배치했습니다. 화면 구성과 HTML·CSS를 직접 작업했습니다.</p></div>
            </div>
            <div className="commercial-login-grid">
              <Evidence file="login-desktop-before.png" alt="이전 데스크톱 로그인 화면" caption="이전 데스크톱 / 입력창 옆 로그인 버튼과 하단의 계정·소셜 로그인 경로" />
              <Evidence file="login-mobile-before.png" alt="이전 모바일 로그인 화면" caption="이전 모바일 / 기본 로그인과 계정 찾기·회원가입" />
              <Evidence file="login-current.png" alt="현재 공통 로그인 UI" caption="현재 공통 UI / 로그인 방법·회원가입·비회원 주문조회 경로" />
            </div>
          </section>

          <section id="mobile-ui" className="commercial-section">
            <p className="commercial-eyebrow">04 / RESPONSIVE UI</p>
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
                  이미지는 옵션 일부를 접은 상태입니다. 요청한 초기 상태·그룹 간
                  연동까지 구현됐다는 의미는 아닙니다.
                </p>
              </div>
              <div className="commercial-product-comparison">
                <Evidence file="product-desktop-fields.png" alt="데스크톱 상품 표의 가격·재고·수량·담기 영역" caption="데스크톱 / 회사·상품 식별정보가 있는 열을 제외한 구매 정보" />
                <Evidence file="options.png" alt="접힌 옵션 그룹과 펼친 모바일 상품 정보 블록" caption="모바일 / 일부 그룹을 접은 상태의 비식별 편집본" />
                <p className="commercial-note">서로 다른 상품의 화면이며, 금액이 아닌 정보 배치 방식을 비교합니다. 초기에는 전체 그룹이 열려 있으며 그룹 간 자동 연동은 미반영입니다.</p>
              </div>
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
                  구조와 CSS를 수정하고 커밋했습니다. 홈페이지는 인수인계받은
                  절차에 따라 운영 서버 반영까지 담당합니다.
                </p>
              </div>
              <div className="commercial-order-comparison">
                <Evidence file="order-before.png" alt="이전 모바일 주문 정보 배치" caption="이전 / 표와 행 구분 중심" />
                <Evidence file="order-after.png" alt="현재 모바일 상품·주문금액·증빙정보 구분" caption="현재 / 정보 영역별 구분" />
                <p className="commercial-note">상품과 주문 조건이 다른 화면입니다. 정보 배치를 비교하며, 이전 화면의 쿠폰은 현재 운영 기능이 아닙니다.</p>
              </div>
            </div>
          </section>

          <section id="discount-ui" className="commercial-section">
            <p className="commercial-eyebrow">05 / PRODUCT EXPOSURE & INFORMATION</p>
            <h2>
              할인 상품의 노출 방식과
              <br />
              구매 판단 정보를 개선했습니다
            </h2>
            <div className="commercial-case-part">
              <h3>쇼핑몰 · 이벤트 상품을 메인에서 상시 노출</h3>
              <p className="commercial-status">현재 운영 중</p>
              <div className="commercial-copy-grid">
                <div><h4>기존 운영에서 찾은 개선점</h4><p>영업팀은 장기 재고 상품을 매번 이벤트 방식으로 판매했습니다. 리뉴얼 과정에서 이벤트 배너 공간을 별도로 차지하지 않고 상품을 지속적으로 노출하도록 ‘스페셜가격’ 전용 영역을 제안했습니다.</p></div>
                <div><h4>제안부터 화면 적용까지</h4><p>웹·모바일 UI 구성과 HTML·CSS를 직접 작업했습니다. 제안한 영역은 실제 서비스에 반영되어 현재 운영 중입니다.</p></div>
              </div>
              <Evidence file="special-price.png" alt="메인 스페셜가격 영역의 상품 카드와 할인율, 특가 상품 더보기" caption="메인 특가 영역 / 회사·상품 식별정보를 가린 캡처 기반 편집 이미지" />
            </div>
            <div className="commercial-case-part">
              <h3>중고판매 서비스 · 할인율에 상품별 사유 추가</h3>
              <p className="commercial-status">운영 반영 중</p>
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
            </div>
          </section>
          <section id="consulting-ui" className="commercial-section">
            <p className="commercial-eyebrow">06 / CONSULTATION LANDING</p>
            <h2>상담 신청 목적에 맞춰<br />원페이지 랜딩을 제안했습니다</h2>
            <div className="commercial-copy-grid">
              <div><h3>목적에 맞는 페이지 구성</h3><p>담당자가 구성 방향을 정하기 어려워하던 상황에서, 상담을 받는 목적에 맞춰 원페이지 랜딩을 추천했습니다. 사업 소개와 제품 안내, 컨설팅 절차를 순서대로 구성하고 마지막에 상담 요청 버튼을 배치했습니다.</p></div>
              <div><h3>직접 제작하고 실제 운영</h3><p>페이지 구성·디자인·퍼블리싱을 직접 담당했으며 제안한 형태로 제작해 한동안 운영했습니다. 이후 회사 방침에 따라 다른 상담 경로로 전환해 현재는 해당 페이지를 운영하지 않습니다.</p></div>
            </div>
            <Evidence file="consult-process.png" alt="접수부터 상담·제안·검토·계약·설치·유지보수까지의 컨설팅 절차" caption="페이지 내 컨설팅 절차 안내 / 원본 시안에서 발췌" />
            <Evidence file="consult-cta.png" alt="페이지 하단의 상담 요청하기 버튼" caption="페이지 하단 / 상담 요청으로 연결하는 버튼" className="commercial-consult-cta" />
            <p className="commercial-note">상단 메인과 회사 식별정보는 제외하고 해당 영역만 발췌했습니다. 상담 전환 성과는 측정하지 않았습니다.</p>
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
