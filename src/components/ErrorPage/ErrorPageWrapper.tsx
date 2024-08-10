// ErrorPageWrapper.tsx
import React from 'react';
import ErrorPage from './ErrorPage';

interface ErrorPageWrapperProps {
  routeError: Error | string; // Accept both Error and string types
}

const ErrorPageWrapper: React.FC<ErrorPageWrapperProps> = ({ routeError }) => {
  return <ErrorPage error={routeError} />;
};

export default ErrorPageWrapper;
