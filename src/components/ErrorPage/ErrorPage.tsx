import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error = useRouteError();

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
    // Handle other cases where 'error' is not an instance of Error
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
