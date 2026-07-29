import Container from "../common/Container";

function ProjectOverview({
  eyebrow = "Overview",
  title,
  description,
  details = [],
}) {
  return (
    <section className="project-overview">
      <Container>
        <div className="project-overview__header">
          <p className="project-section__eyebrow">{eyebrow}</p>

          <div>
            <h2 className="project-section__title">{title}</h2>

            {description && (
              <p className="project-section__description">
                {description}
              </p>
            )}
          </div>
        </div>

        {details.length > 0 && (
          <dl className="project-overview__details">
            {details.map((detail) => (
              <div
                className="project-overview__detail"
                key={detail.label}
              >
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </Container>
    </section>
  );
}

export default ProjectOverview;