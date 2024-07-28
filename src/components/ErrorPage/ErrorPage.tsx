import React from 'react';

interface ErrorPageProps {
  error: string | Error;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  if (error instanceof Error) {
    console.error(error);
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    console.error('Unknown error:', error);
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Something went wrong.</p>
      </div>
    );
  }
};

export default ErrorPage;
