import Link from "next/link";
import { services } from "../../lib/content/services";

export default function ServiceList() {
  return (
    <div className="service-list" data-reveal-stagger>
      {services.map((service) => (
        <Link
          href={`/booking?interest=service&service=${encodeURIComponent(service.name)}`}
          key={service.number}
        >
          <span>{service.number}</span>
          <div>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
          <b aria-hidden="true">↗</b>
        </Link>
      ))}
    </div>
  );
}