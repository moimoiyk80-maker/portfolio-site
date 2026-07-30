import { Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import Container from "../components/common/Container";
import "../styles/not-found.css";

function NotFoundPage() {
  return (
    <PageLayout>
      <section className="not-found">
        <Container>
          <p className="not-found__code">404</p>

          <h1>페이지를 찾을 수 없습니다.</h1>

          <p>
            주소가 변경되었거나 존재하지 않는 페이지입니다.
          </p>

          <Link className="button button--primary" to="/">
            홈으로 돌아가기
          </Link>
        </Container>
      </section>
    </PageLayout>
  );
}

export default NotFoundPage;