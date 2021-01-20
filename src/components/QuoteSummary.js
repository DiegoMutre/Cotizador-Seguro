import styled from "@emotion/styled";
import { firstUppercase } from "../helper";

const QuotationContainer = styled.div`
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
    padding: 1rem;
    text-align: center;
`;

const QuoteSummary = ({ quotationinfo }) => {
    if (!quotationinfo) return null;

    // Destructuring to the quotation info object
    const { brand, plan, year } = quotationinfo;

    return (
        <QuotationContainer>
            <h2>Quote Summary</h2>
            <ul>
                <li>Brand: {firstUppercase(brand)}</li>
                <li>Plan: {firstUppercase(plan)}</li>
                <li>Year: {year}</li>
            </ul>
        </QuotationContainer>
    );
};

export default QuoteSummary;
