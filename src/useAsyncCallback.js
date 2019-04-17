import { useRef, useEffect, useCallback } from "react";

export default function(callback, deps = []) {
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  const whileMounted = (...args) => {
    if (mounted.current) {
      return callback.apply(null, args);
    } else {
      console.log("Skipping because not mounted");
    }
  };
  return useCallback(whileMounted, [callback, ...deps]);
}
