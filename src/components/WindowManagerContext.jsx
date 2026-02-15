/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const WindowManagerContext = createContext(null);

export const WindowManagerProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);
  const [minimizedIds, setMinimizedIds] = useState([]);

  const registerWindow = useCallback((windowMeta) => {
    if (!windowMeta?.id) return;

    setWindows((prev) => {
      const existing = prev.find((item) => item.id === windowMeta.id);
      if (existing) {
        return prev.map((item) =>
          item.id === windowMeta.id ? { ...item, ...windowMeta } : item
        );
      }
      return [...prev, windowMeta];
    });
  }, []);

  const unregisterWindow = useCallback((id) => {
    setWindows((prev) => prev.filter((item) => item.id !== id));
    setMinimizedIds((prev) => prev.filter((item) => item !== id));
  }, []);

  const minimizeWindow = useCallback((windowMeta) => {
    if (!windowMeta?.id) return;

    registerWindow(windowMeta);
    setMinimizedIds((prev) => {
      if (prev.includes(windowMeta.id)) {
        return prev;
      }
      return [...prev, windowMeta.id];
    });
  }, [registerWindow]);

  const restoreWindow = useCallback((id) => {
    setMinimizedIds((prev) => prev.filter((item) => item !== id));
  }, []);

  const isMinimized = useCallback(
    (id) => minimizedIds.includes(id),
    [minimizedIds]
  );

  const value = useMemo(
    () => ({
      windows,
      minimizedIds,
      registerWindow,
      unregisterWindow,
      minimizeWindow,
      restoreWindow,
      isMinimized,
    }),
    [isMinimized, minimizeWindow, minimizedIds, registerWindow, restoreWindow, unregisterWindow, windows]
  );

  return <WindowManagerContext.Provider value={value}>{children}</WindowManagerContext.Provider>;
};

export const useWindowManager = () => {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error('useWindowManager must be used inside WindowManagerProvider');
  }
  return context;
};
