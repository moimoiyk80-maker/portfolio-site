import Container from "../common/Container";

function ProjectGallery({
  eyebrow,
  title,
  description,
  images = [],
  accent = "sli",
  wideFirst = true,
}) {
  return (
    <section
      className={`project-gallery project-gallery--${accent}`}
    >
      <Container>
        <div className="project-gallery__header">
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

        <div className="project-gallery__grid">
          {images.map((image, index) => (
            <figure
              className={[
                "project-gallery__item",
                image.wide || (wideFirst && index === 0)
                  ? "project-gallery__item--wide"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              key={image.src}
            >
              <div className="project-gallery__visual">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
              </div>

              {image.caption && (
                <figcaption>{image.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectGallery;