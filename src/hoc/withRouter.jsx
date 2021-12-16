// https://stackoverflow.com/questions/62365009/how-to-get-parameter-value-from-react-router-dom-v6-in-class
import {useParams} from "react-router-dom";



export const withRouter = (Component) => {
    return (props) => {
        const params = useParams();
        return <Component {...props} params={params}/>;
    };
};