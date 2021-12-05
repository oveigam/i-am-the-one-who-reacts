import { useSelector } from "react-redux";
import ErrorPage from "../../pages/ErrorPage";

const ErrorAware = ({ children }) => {
    const error = useSelector(state => state.error.error)

    if (!error) {
        return children
    } else
        return <ErrorPage />

}

export default ErrorAware;