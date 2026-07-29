import Container from "../common/Container";

function ResponsiveShowcase({
  eyebrow = "Responsive",
  title,
  description,
  images = [],
  accent = "sli",
}) {
  return (
    <section
      className={`responsive-showcase responsive-showcase--${accent}`}
    >
      <Container>
        <div className="responsive-showcase__header">
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

        <div className="responsive-showcase__grid">
          {images.map((image) => (
            <figure
              className={`responsive-showcase__item responsive-showcase__item--${image.device}`}
              key={image.device}
            >
              <div className="responsive-showcase__visual">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
              </div>

              <figcaption>
                <span>{image.label}</span>
                <span>{image.width}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ResponsiveShowcase;