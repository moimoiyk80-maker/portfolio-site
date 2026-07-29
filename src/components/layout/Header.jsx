import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link
          to="/"
          className="site-header__brand"
          onClick={closeMenu}
        >
          황윤경
        </Link>

        <button
          type="button"
          className="site-header__menu-button"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? "닫기" : "메뉴"}
        </button>

        <nav
          id="site-navigation"
          className={`site-header__nav ${
            isMenuOpen ? "site-header__nav--open" : ""
          }`}
          aria-label="주요 메뉴"
        >
          <a href="/#projects" onClick={closeMenu}>
            프로젝트
          </a>

          <a href="/#about" onClick={closeMenu}>
            소개
          </a>

          <a href="/#contact" onClick={closeMenu}>
            연락처
          </a>

          <a
            href="/resume/resume.pdf"
            className="site-header__resume"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            이력서
          </a>
        </nav>
      </Container>
    </header>
  );
}

export default Header;