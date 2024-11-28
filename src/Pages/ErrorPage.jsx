import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='flex flex-col justify-center items-center h-[100vh]'>
          <h1 className='text-2xl font-bold'>Oops!</h1>
          <p className='text-red-600'>Error: {error.error.message}</p>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.status && error.statusText}</i>
          </p>
        </div>
      )
}

export default ErrorPage
