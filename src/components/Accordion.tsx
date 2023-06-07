import * as React from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

type Props = {
  data: { id: string; name: string; description: string }[];
  variant?: "single" | "multiple";
};
export default function Accordion({ data, variant = "single" }: Props) {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const isActive = React.useCallback(
    (id: string) => {
      return expanded.includes(id);
    },
    [expanded]
  );

  const onClick = React.useCallback(
    (id: string) => {
      if (isActive(id)) {
        setExpanded(expanded.filter((i) => i !== id));
      } else {
        if (variant === "single") {
          setExpanded([id]);
        } else {
          setExpanded([...expanded, id]);
        }
      }
    },
    [expanded]
  );

  return (
    <div className="accordion-items">
      {data.map((i) => (
        <div className="accordion-grouping" key={i.id}>
          <a
            className={`accordion-link ${isActive(i.id) ? "active" : ""}`}
            onClick={() => onClick(i.id)}
          >
            <div className="label">{i.name}</div>

            {isActive(i.id) ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </a>
          {isActive(i.id) && (
            <div className="accordion-content">{i.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}
