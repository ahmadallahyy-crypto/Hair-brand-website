import CachedImage from "../ui/CachedImage";
import { portfolio } from "../../lib/content/portfolio";

export default function PortfolioGrid() {
  return (
    <div className="work-grid">
      {portfolio.map((item, index) => (
        <article
          className={`work-card${
            index === 0 ? " work-card-tall" : index === 1 ? " work-card-offset" : ""
          }`}
          key={item.title}
        >
          <div className="image-wrap">
            <CachedImage
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 650px) 45vw, 30vw"
            />
            <span className="image-index">0{index + 1}</span>
          </div>
          <div className="work-caption">
            <div>
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
            <span aria-hidden="true">↗</span>
          </div>
        </article>
      ))}
    </div>
  );
}
