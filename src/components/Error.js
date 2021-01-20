import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ErrorDiv = styled.div`
    background-color: red;
    color: #fff;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: bold;
`;

const Error = ({ message }) => {
    return <ErrorDiv>{message}</ErrorDiv>;
};

Error.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Error;
