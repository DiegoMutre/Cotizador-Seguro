import styled from "@emotion/styled";
import PropTypes from "prop-types";

// Styled Components
const Heading = styled.header`
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color: #fff;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: "Slabo 27px", serif;
    text-align: center;
`;

const Header = ({ titulo }) => {
    return (
        <Heading>
            <Title>{titulo}</Title>
        </Heading>
    );
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired,
};

export default Header;
