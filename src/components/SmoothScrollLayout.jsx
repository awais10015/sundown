import { ReactLenis } from "lenis/react";
import { useMemo } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const SmoothScrollLayout = ({ children }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const options = useMemo(
    () => ({
      autoRaf: true,
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
      anchors: false,
    }),
    [],
  );

  if (prefersReducedMotion) {
    return children;
  }

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollLayout;
