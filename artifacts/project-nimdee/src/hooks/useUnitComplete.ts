import { useState, useEffect, useCallback } from "react";

const LS_PREFIX = "nimdee_unit_complete_";

export function useUnitComplete(unitId: string): [boolean, (value: boolean) => void] {
  const key = LS_PREFIX + unitId;

  const [complete, setCompleteState] = useState<boolean>(() => {
    try {
      return localStorage.getItem(key) === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === key) {
        setCompleteState(e.newValue === "true");
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [key]);

  const setComplete = useCallback(
    (value: boolean) => {
      try {
        localStorage.setItem(key, String(value));
      } catch {
        // localStorage unavailable
      }
      setCompleteState(value);
    },
    [key]
  );

  return [complete, setComplete];
}
