import { Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";

function NotFoundPage() {
  return (
    <PageLayout>
      <main>
        <h1>페이지를 찾을 수 없습니다.</h1>
        <Link to="/">홈으로 돌아가기</Link>
      </main>
    </PageLayout>
  );
}

export default NotFoundPage;