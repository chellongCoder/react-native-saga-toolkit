import { BlurView } from '@components/blur-view';
import React, { useCallback, useMemo, useState } from 'react';
import { BlurViewContext } from './context';
import { BlurViewContextValue, BlurViewProps } from './types';

const BlurViewProvider = ({ children }: BlurViewProps) => {
  const [isShow, setIsShow] = useState(false);
  const [child, setChild] = useState<React.ReactNode>();
  const [position, setPosition] = useState();

  const onShow = useCallback((c: React.ReactNode, p: any) => {
    setChild(c);
    setIsShow(true);
    setPosition(p);
  }, []);

  const onHide = useCallback(() => {
    setIsShow(false);
  }, []);

  const contextValue = useMemo<BlurViewContextValue>(
    () => ({
      onShow,
      onHide,
    }),
    [onHide, onShow],
  );
  return (
    <>
      <BlurViewContext.Provider value={contextValue}>{children}</BlurViewContext.Provider>
      {isShow && <BlurView {...{ child, onHide, position }} />}
    </>
  );
};

export default BlurViewProvider;
