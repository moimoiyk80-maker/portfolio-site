import Container from "../common/Container";

function ProcessFlow({
  eyebrow,
  title,
  description,
  items = [],
  principles = [],
  accent = "sli",
}) {
  return (
    <section className={`process-flow process-flow--${accent}`}>
      <Container>
        <div className="process-flow__header">
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

        <ol className="process-flow__list">
          {items.map((item, index) => (
            <li className="process-flow__item" key={item.title}>
              <div className="process-flow__step">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="process-flow__content">
                <p className="process-flow__label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>

        {principles.length > 0 && (
          <div className="process-flow__principles">
            {principles.map((principle) => (
              <article
                className="process-flow__principle"
                key={principle.title}
              >
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default ProcessFlow;