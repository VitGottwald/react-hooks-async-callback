import { useEffect, useCallback } from "react";

export default function(callback, deps = []) {
  let mounted = false;
  useEffect(() => {
    mounted = true;
    return () => {
      mounted = false;
    };
  }, []);
  const whileMounted = (...args) => {
    if (mounted) {
      return callback.apply(null, args);
    } else {
      console.log("Skipping because not mounted");
    }
  };
  return useCallback(whileMounted, [callback, ...deps]);
}
