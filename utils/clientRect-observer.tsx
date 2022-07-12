import { useCallback, useState } from 'react';

type OutProps = {
  rect: DOMRect | null;
  ref: (node: HTMLDivElement) => void;
};

function useClientRect(isDepended: [any]): OutProps {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const ref = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, isDepended);
  return { rect, ref };
}

export default useClientRect;
