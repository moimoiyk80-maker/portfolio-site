import { Link } from "react-router-dom";
import Container from "../common/Container";

function ProjectClosing({
  title,
  description,
  roleItems = [],
  tools = [],
  outcome,
  reflection,
  liveUrl,
  githubUrl,
  nextProject,
  accent = "sli",
}) {
  return (
    <>
      <section
        className={`project-closing project-closing--${accent}`}
      >
        <Container>
          <div className="project-closing__header">
            <p className="project-section__eyebrow">Role & Outcome</p>

            <div>
            <h2 className="project-section__title">{title}</h2>

            <p className="project-section__description">
              {description}
            </p>
            </div>
          </div>

          <div className="project-closing__body">
            <div className="project-closing__role">
              <h3>My Role</h3>

              <ul>
                {roleItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-closing__tools">
             <h3>Design & Environment</h3>

              <ul>
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="project-closing__result">
            <article>
              <p className="project-closing__label">Outcome</p>
              <h3>{outcome}</h3>
            </article>

            <article>
              <p className="project-closing__label">Reflection</p>
              <p>{reflection}</p>
            </article>
          </div>

          <div className="project-closing__links">
            {liveUrl && (
              <a
                className="button button--project"
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Site
                <span aria-hidden="true"> ↗</span>
              </a>
            )}

            {githubUrl && (
              <a
                className="project-closing__text-link"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repository
                <span aria-hidden="true"> ↗</span>
              </a>
            )}
          </div>
        </Container>
      </section>

      {nextProject && (
        <section className="next-project">
          <Link
            className="next-project__link"
            to={nextProject.url}
          >
            <Container>
              <p className="next-project__eyebrow">
                Next Project
              </p>

              <div className="next-project__content">
                <div>
                  <p className="next-project__category">
                    {nextProject.category}
                  </p>

                  <h2>{nextProject.title}</h2>

                  <p>{nextProject.subtitle}</p>
                </div>

                <span
                  className="next-project__arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </Container>
          </Link>
        </section>
      )}
    </>
  );
}

export default ProjectClosing;