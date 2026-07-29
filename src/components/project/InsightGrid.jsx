import Container from "../common/Container";

function InsightGrid({
  eyebrow,
  title,
  description,
  items = [],
  accent = "sli",
}) {
  return (
    <section
      className={`project-insights project-insights--${accent}`}
    >
      <Container>
        <div className="project-insights__header">
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

        <div className="project-insights__grid">
          {items.map((item, index) => (
            <article
              className="project-insights__item"
              key={item.title}
            >
              <p className="project-insights__number">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default InsightGrid;