import React from "react";
import { cn } from "../../../utils/cn";

interface ListRendererProps {
  items: string[];
  ordered?: boolean;
  className?: string;
}

/**
 * Renders markdown lists (ordered or unordered).
 * Extracted from SimpleMarkdown for better testability and reusability.
 */
export const ListRenderer: React.FC<ListRendererProps> = ({
  items,
  ordered = false,
  className,
}) => {
  const ListTag = ordered ? "ol" : "ul";

  return (
    <ListTag
      className={cn(
        "my-4 space-y-1",
        ordered ? "list-decimal list-inside" : "list-disc list-inside",
        className,
      )}
    >
      {items.map((item, idx) => (
        <li
          key={idx}
          className="ml-4 pl-2 border-l-2 border-accent-primary/30 text-text-secondary mb-2"
        >
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ListTag>
  );
};

export default ListRenderer;
