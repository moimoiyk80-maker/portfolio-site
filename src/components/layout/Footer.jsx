import Container from "../common/Container";

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <div>
            <p className="site-footer__name">황윤경</p>
            <p className="site-footer__role">
              UI/UX · 디자인 시스템 · React UI
            </p>
          </div>

          <div className="site-footer__links">
            <a href="mailto:이메일주소">이메일</a>

            <a
              href="https://github.com/moimoiyk80-maker"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <p className="site-footer__copyright">
          © 2026 황윤경
        </p>
      </Container>
    </footer>
  );
}

export default Footer;