import { Link } from "react-router-dom";

function ProjectCard({ project, featured = false }) {
  const {
    title,
    subtitle,
    category,
    summary,
    role,
    accent,
    coverImage,
    projectUrl,
  } = project;

  return (
    <article
      className={[
        "project-card",
        `project-card--${accent}`,
        featured ? "project-card--featured" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="project-card__content">
        <p className="project-card__category">{category}</p>

        <h3 className="project-card__title">{title}</h3>

        <p className="project-card__subtitle">{subtitle}</p>

        <p className="project-card__summary">{summary}</p>

        <p className="project-card__role">{role}</p>

        <Link className="project-card__link" to={projectUrl}>
          프로젝트 보기
          <span aria-hidden="true"> →</span>
        </Link>
      </div>

      <Link
        className="project-card__image-link"
        to={projectUrl}
        aria-label={`${title} 프로젝트 상세 보기`}
      >
        <img
          className="project-card__image"
          src={coverImage}
          alt={`${title} 대표 화면`}
        />
      </Link>
    </article>
  );
}

export default ProjectCard;