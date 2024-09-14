import { Link, useRouteError } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './errorPage.css'; // Import your custom styles

const ErrorPage = () => {
    const { status, statusText, data } = useRouteError();

    return (
        <div className="error-page-container d-flex flex-column justify-content-center align-items-center text-center">
            <div>
                <img height="90%" width="100%" src='/images/ErrorImage.jpeg' alt="error image"></img>
            </div>
            <div className="error-info p-4 rounded">
                <h1 className="display-4">{status} {statusText}!</h1>
                <h5 className="mt-3">{data}</h5>
                <h3 className="mt-4">
                    {"Click "}
                    <Link className="text-primary" to="/">here</Link>
                    {" to go to Home page."}
                </h3>
            </div>
        </div>
    );
}

export default ErrorPage;
