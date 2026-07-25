import { Cites } from "./ui";
import type { Claim, Dict } from "@/content/types";

export default function DataFlow({
  items,
  flow,
  sourcesLabel,
}: {
  items: Claim[];
  flow: Dict["acus"]["dataFlow"];
  sourcesLabel: string;
}) {
  return (
    <figure className="record-map">
      <div className="record-map__stage record-map__sources">
        <ul>
          {items.map((item) => (
            <li key={item.text}>{item.text}</li>
          ))}
        </ul>
      </div>
      <div className="record-map__stage record-map__system">
        <h3>{flow.systemTitle}</h3>
        <p>{flow.systemBody}</p>
      </div>
      <div className="record-map__stage record-map__use">
        <h3>{flow.useTitle}</h3>
        <p>{flow.useBody}</p>
      </div>
      <figcaption>
        <span>{flow.note}</span>
        <Cites ids={flow.cite} label={sourcesLabel} />
      </figcaption>
    </figure>
  );
}
