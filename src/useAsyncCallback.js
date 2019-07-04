import { useRef, useEffect, useCallback } from "react";

export default function(callback, deps = []) {
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return useCallback(
    (...args) => {
      if (mounted.current) {
        return callback.apply(null, args);
      } else {
        console.log("Skipping because not mounted");
      }
    },
    [callback, ...deps]
  );
}
