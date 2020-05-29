import { useRef, useState, useEffect } from "react";

const intersectionOptions = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

const useIntersectionObserverAPI = () => {
  const intersectionTarget = useRef(document.createElement("div"));
  const prevRectTop = useRef({});
  const [isIntersected, setIsIntersected] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setIsIntersected(true);
      return;
    }

    function bounceUp(
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        const {
          isIntersecting,
          boundingClientRect,
          intersectionRect,
          target,
        } = entry;

        const isEnteredTopToBottom =
          isIntersecting && prevRectTop.current >= boundingClientRect.top;
        const isInsideViewport =
          intersectionRect.y === target.getBoundingClientRect().y ||
          (intersectionRect.y === 0 && target.getBoundingClientRect().y < 0);
        const isMoveOutTopToBottom =
          prevRectTop.current < boundingClientRect.top;

        if (isEnteredTopToBottom || isInsideViewport) {
          setIsIntersected(true);
        } else if (!isIntersecting && isMoveOutTopToBottom) {
          setIsIntersected(false);
        }

        prevRectTop.current = boundingClientRect.top;
      });
    }

    const observer = new IntersectionObserver(bounceUp, intersectionOptions);
    observer.observe(intersectionTarget.current);
  }, []);

  return { isIntersected, intersectionTarget };
};

export default useIntersectionObserverAPI;
