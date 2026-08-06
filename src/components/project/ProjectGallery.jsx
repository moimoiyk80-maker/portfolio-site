import Container from "../common/Container";

function ProjectGallery({
  eyebrow,
  title,
  description,
  images = [],
  groups = [],
  accent = "sli",
  wideFirst = true,
  className = "",
}) {
  const hasGroups = groups.length > 0;

  return (
    <section
      className={[
        "project-gallery",
        `project-gallery--${accent}`,
        hasGroups ? "project-gallery--grouped" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
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

        {hasGroups ? (
          <div className="project-gallery__groups">
            {groups.map((group) => (
              <section
                className={[
                  "project-gallery__group",
                  group.reverse
                    ? "project-gallery__group--reverse"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                key={group.id}
              >
                <div className="project-gallery__group-header">
                  <span className="project-gallery__group-number">
                    {group.number}
                  </span>

                  <div>
                    <h3 className="project-gallery__group-title">
                      {group.title}
                    </h3>

                    {group.description && (
                      <p className="project-gallery__group-description">
                        {group.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="project-gallery__group-grid">
                  <figure className="project-gallery__item project-gallery__item--featured">
                    <div className="project-gallery__visual">
                      <img
                        src={group.featured.src}
                        alt={group.featured.alt}
                        loading="lazy"
                      />
                    </div>

                    {group.featured.caption && (
                      <figcaption>
                        {group.featured.caption}
                      </figcaption>
                    )}
                  </figure>

                  <div className="project-gallery__secondary">
                    {group.secondary.map((image) => (
                      <figure
                        className="project-gallery__item"
                        key={`${group.id}-${image.src}`}
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
                </div>
              </section>
            ))}
          </div>
        ) : (
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
        )}
      </Container>
    </section>
  );
}

export default ProjectGallery;