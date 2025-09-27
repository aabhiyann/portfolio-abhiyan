import { useEffect } from 'react';

interface StructuredDataProps {
  jsonLd: Record<string, unknown>;
}

const useStructuredData = ({ jsonLd }: StructuredDataProps) => {
  useEffect(() => {
    if (!jsonLd) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    script.id = 'structured-data-script'; // Add an ID for easy removal/replacement

    const existingScript = document.getElementById('structured-data-script');
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts or jsonLd changes
      const scriptToRemove = document.getElementById('structured-data-script');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [jsonLd]);
};

export default useStructuredData;
