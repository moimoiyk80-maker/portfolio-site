import Container from "../common/Container";

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <p className="site-footer__copyright">
            © 2026 황윤경
          </p>

          <div className="site-footer__links">
            <a href="/#projects">프로젝트</a>

            <a href="/#about">소개</a>

            <a
              href="https://github.com/moimoiyk80-maker"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;