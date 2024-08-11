import React from 'react';
import ErrorPage from './ErrorPage';

interface ErrorPageWrapperProps {
  routeError: Error | string;
}

const ErrorPageWrapper: React.FC<ErrorPageWrapperProps> = ({ routeError }) => {
  return <ErrorPage error={routeError} />;
};

export default ErrorPageWrapper;
