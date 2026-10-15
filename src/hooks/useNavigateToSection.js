import { useCallback } from "react";
import { useLenis } from "lenis/react";
import { navHref } from "../data/navLinks";

const NAV_OFFSET = -80;
const SCROLL_DURATION = 1.35;
const easing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

function scrollToPageBottom(lenis) {
  if (lenis) {
    lenis.resize();
    requestAnimationFrame(() => {
      lenis.scrollTo("bottom", {
        duration: SCROLL_DURATION,
        easing,
        force: true,
      });
    });
    return;
  }

  const pageEnd = document.getElementById("page-end");
  if (pageEnd) {
    pageEnd.scrollIntoView({ behavior: "smooth", block: "end" });
    return;
  }

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}

export function useNavigateToSection() {
  const lenis = useLenis();

  return useCallback(
    (id, event) => {
      event?.preventDefault();

      if (typeof window !== "undefined") {
        window.history.pushState(null, "", navHref(id));
      }

      if (id === "top") {
        const target = navHref("top");
        if (lenis) {
          lenis.scrollTo(target, {
            offset: NAV_OFFSET,
            duration: SCROLL_DURATION,
            easing,
          });
        } else {
          document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      if (id === "contact") {
        scrollToPageBottom(lenis);
        return;
      }

      const target = navHref(id);

      if (lenis) {
        lenis.scrollTo(target, {
          offset: NAV_OFFSET,
          duration: SCROLL_DURATION,
          easing,
        });
      } else {
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenis],
  );
}
