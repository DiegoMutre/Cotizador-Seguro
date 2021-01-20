import styled from "@emotion/styled";
import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import QuoteSummary from "./components/QuoteSummary";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

// Styled Components
const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const MainSection = styled.div`
    background-color: #fff;
    padding: 3rem;
`;

function App() {
    // State for quote summary
    const [summary, setSummary] = useState({});

    // State for spinner loading
    const [spinnerLoading, setSpinnerLoading] = useState(false);

    return (
        <Container>
            <Header titulo="Insurance Quote" />
            <MainSection>
                <Form
                    setSummary={setSummary}
                    setSpinnerLoading={setSpinnerLoading}
                />
                {spinnerLoading && <Spinner />}
                <QuoteSummary quotationinfo={summary.quotationInfo} />
                {!spinnerLoading && <Result result={summary.result} />}
            </MainSection>
        </Container>
    );
}

export default App;
