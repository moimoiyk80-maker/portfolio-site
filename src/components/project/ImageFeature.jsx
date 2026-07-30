function ImageFeature({
  number,
  eyebrow,
  title,
  description,
  points = [],
  image,
  imageAlt,
  reverse = false,
  accent = "sli",
  imageClass = "",
}) {
  return (
    <article
      className={[
        "image-feature",
        `image-feature--${accent}`,
        reverse ? "image-feature--reverse" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
        <div className="image-feature__content">
          <p className="image-feature__number">{number}</p>
  
          <p className="image-feature__eyebrow">{eyebrow}</p>
  
          <h3 className="image-feature__title">{title}</h3>
  
          <p className="image-feature__description">
            {description}
          </p>
  
          {points.length > 0 && (
            <ul className="image-feature__points">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </div>
  
        <div className="image-feature__visual">
          <img
            className={imageClass}
            src={image}
            alt={imageAlt}
            loading="lazy"
          />
        </div>
      </article>
    );
  }
  
  export default ImageFeature;