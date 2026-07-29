import Container from "../common/Container";

function ProjectHero({ project }) {
  const {
    title,
    subtitle,
    category,
    description,
    role,
    duration,
    year,
    accent,
    heroDesktop,
    heroMobile,
    liveUrl,
    githubUrl,
  } = project;

  return (
    <section
      className={`project-hero project-hero--${accent}`}
      aria-labelledby="project-title"
    >
      <Container>
        <div className="project-hero__content">
          <p className="project-hero__category">{category}</p>

          <h1 id="project-title" className="project-hero__title">
            {title}
          </h1>

          <p className="project-hero__subtitle">{subtitle}</p>

          <p className="project-hero__description">{description}</p>
        </div>

        <div className="project-hero__meta">
          <dl className="project-hero__info">
            <div>
              <dt>Role</dt>
              <dd>{role}</dd>
            </div>

            <div>
              <dt>Type</dt>
              <dd>{duration}</dd>
            </div>

            <div>
              <dt>Year</dt>
              <dd>{year}</dd>
            </div>
          </dl>

          <div className="project-hero__links">
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
                className="project-hero__text-link"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <span aria-hidden="true"> ↗</span>
              </a>
            )}
          </div>
        </div>

        <picture className="project-hero__visual">
          {heroMobile && (
            <source
              media="(max-width: 767px)"
              srcSet={heroMobile}
            />
          )}

          <img
            src={heroDesktop}
            alt={`${title} 프로젝트 대표 화면`}
          />
        </picture>
      </Container>
    </section>
  );
}

export default ProjectHero;