import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ResultContainer = styled.div`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const ResultParagraph = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ({ result }) => {
    return (
        <ResultContainer>
            {result ? (
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition
                        key={result}
                        classNames="resultado"
                        timeout={{ enter: 500, exit: 500 }}
                    >
                        <ResultParagraph>
                            The Result is: <span>${result}</span>
                        </ResultParagraph>
                    </CSSTransition>
                </TransitionGroup>
            ) : (
                <p>Choose brand, year and type of insurance</p>
            )}
        </ResultContainer>
    );
};

export default Result;
