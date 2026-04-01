import React from "react";
import { cn } from "../../../utils/cn";

interface TableRendererProps {
  headers: string[];
  rows: string[][];
  className?: string;
}

/**
 * Renders markdown tables with proper styling.
 * Extracted from SimpleMarkdown for better testability and reusability.
 */
export const TableRenderer: React.FC<TableRendererProps> = ({
  headers,
  rows,
  className,
}) => {
  return (
    <div
      className={cn(
        "my-6 overflow-x-auto rounded-lg border border-border-primary/50",
        className,
      )}
    >
      <table className="w-full text-left text-sm">
        <thead className="bg-bg-surface/50">
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="p-3 font-semibold text-text-primary border-b border-border-primary/50"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => (
            <tr
              key={rIdx}
              className="border-b border-border-primary/50 last:border-0 hover:bg-bg-surface/50"
            >
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="p-3 text-text-secondary">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRenderer;
