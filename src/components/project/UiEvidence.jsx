import "../../styles/ui-evidence.css";

export default function UiEvidence({ file, alt, caption, compact = false }) {
  const src = `/images/ui-evidence/${file}`;
  return (
    <figure className={`ui-evidence${compact ? " ui-evidence--compact" : ""}`}>
      <a href={src} target="_blank" rel="noreferrer" aria-label={`${alt} 크게 보기 (새 탭)`}>
        <img src={src} alt={alt} loading="lazy" />
      </a>
      <figcaption>{caption}<a href={src} target="_blank" rel="noreferrer">이미지 크게 보기 <span aria-hidden="true">↗</span><span className="ui-evidence__sr"> (새 탭)</span></a></figcaption>
    </figure>
  );
}
