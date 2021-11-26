import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SentryContext } from './context';
import { SentryContextValue, SentryProps } from './types';
import * as Sentry from '@sentry/react-native';
import Config from 'react-native-config';

const SentryProvider = ({ children }: SentryProps) => {
  const routingInstrumentation = useMemo(() => new Sentry.ReactNavigationInstrumentation(), []);

  useEffect(() => {
    Sentry.init({
      dsn: Config.SENTRY_DNS,
      debug: true,
      enableAutoSessionTracking: true,
      tracesSampleRate: 1.0,
      integrations: [
        new Sentry.ReactNativeTracing({
          tracingOrigins: ['localhost', 'api.shadowgate.io', Config.API_COIN, Config.API_URL, /^\//],
          // Pass instrumentation to be used as `routingInstrumentation`
          routingInstrumentation,
          // To set a uniform sample rate
          // ...
        }),
      ],
    });
  }, [routingInstrumentation]);
  const contextValue = useMemo<SentryContextValue>(
    () => ({
      routingInstrumentation,
    }),
    [routingInstrumentation],
  );

  return (
    <>
      <SentryContext.Provider value={contextValue}>{children}</SentryContext.Provider>
    </>
  );
};

export default SentryProvider;
