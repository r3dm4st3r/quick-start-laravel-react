import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
      <div className="mx-auto max-w-[550px] p-10 dark:text-white">
        <div className="text-center">
          <span className="text-6xl flex justify-center mb-5">Opps!</span>
          <h1>Nothing is here!</h1>
          <p className="my-10 text-lg">The page you're looking for has been moved or deleted permanently.</p>
          <div className="flex item-center justify-center gap-3">
            <button type="button" className="btn btn-outline" onClick={() => navigate(-1)}>
              Go Back
            </button>
            <Link to="/" type="button" className="btn">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
