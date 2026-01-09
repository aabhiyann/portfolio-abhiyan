import React from "react";
import { cn } from "../../../utils/cn";
import { highlightCode } from "../../../utils/syntaxHighlight";

interface CodeBlockRendererProps {
  code: string;
  language: string;
  className?: string;
}

/**
 * Renders syntax-highlighted code blocks with copy functionality.
 * Extracted from SimpleMarkdown for better testability and reusability.
 */
export const CodeBlockRenderer: React.FC<CodeBlockRendererProps> = ({
  code,
  language,
  className,
}) => {
  const highlighted = React.useMemo(
    () => highlightCode(code, language),
    [code, language],
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div
      className={cn(
        "my-6 rounded-lg overflow-hidden bg-[#1e1e1e] border border-white/10",
        className,
      )}
    >
      {language && (
        <div className="px-4 py-2 bg-white/5 border-b border-white/5 text-xs font-mono text-text-muted flex items-center justify-between">
          <span>{language}</span>
          <button
            onClick={handleCopy}
            className="text-xs text-text-muted hover:text-accent-primary transition-colors"
            title="Copy code"
          >
            Copy
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </div>
  );
};

export default CodeBlockRenderer;
