import styled from "@emotion/styled";
import { useState } from "react";
import { calculateBrand, getDifference, getPlan } from "../helper";
import Error from "./Error";

// Styled Components
const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    width: 100%;
    display: flex;
    padding: 1rem;
    --webkit-appearance: none;
    border: 1px solid #e1e1e1;

    &:focus {
        outline: 0;
    }
`;

const RadioInput = styled.input`
    margin: 0 1rem;
`;

const SubmitButton = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    border: 0;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 2rem;
    transition: background-color 0.3s ease;

    &:hover {
        cursor: pointer;
        background-color: #26c6da;
    }
`;

const Form = ({ setSummary, setSpinnerLoading }) => {
    // State for quotation
    const [quotationInfo, setQuotationInfo] = useState({
        brand: "",
        year: "",
        plan: "",
    });

    // State for error
    const [error, setError] = useState(false);

    // Calculate the quote
    const calculateQuote = _ => {
        const difference = getDifference(quotationInfo.year);

        let result = 2000;

        result -= (difference * 3 * result) / 100;

        result = calculateBrand(quotationInfo.brand) * result;

        const incrementPlan = getPlan(quotationInfo.plan);

        result = (incrementPlan * result).toFixed(2);

        return result;
    };

    // Validate the form when the user submit
    const validateForm = e => {
        e.preventDefault();

        if (Object.values(quotationInfo).some(input => input.trim() === "")) {
            setError(true);
            return;
        }

        setError(false);
        const result = calculateQuote();
        setSpinnerLoading(true);
        setTimeout(() => {
            setSpinnerLoading(false);

            setSummary({
                result,
                quotationInfo,
            });
        }, 3000);
    };

    return (
        <form onSubmit={validateForm}>
            {error && <Error message="All fields are required" />}
            <Field>
                <Label>Marca:</Label>
                <Select
                    name="brand"
                    onChange={e =>
                        setQuotationInfo({
                            ...quotationInfo,
                            [e.target.name]: e.target.value,
                        })
                    }
                >
                    <option value="">-- Select --</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asian">Asian</option>
                </Select>
            </Field>
            <Field>
                <Label>Year:</Label>
                <Select
                    name="year"
                    onChange={e =>
                        setQuotationInfo({
                            ...quotationInfo,
                            [e.target.name]: e.target.value,
                        })
                    }
                >
                    <option value="">-- Select --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan:</Label>
                <RadioInput
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={quotationInfo.plan === "basic"}
                    onChange={e =>
                        setQuotationInfo({
                            ...quotationInfo,
                            [e.target.name]: e.target.value,
                        })
                    }
                />
                Basic
                <RadioInput
                    type="radio"
                    name="plan"
                    value="complete"
                    checked={quotationInfo.plan === "complete"}
                    onChange={e =>
                        setQuotationInfo({
                            ...quotationInfo,
                            [e.target.name]: e.target.value,
                        })
                    }
                />
                Complete
            </Field>
            <SubmitButton type="submit">Quote</SubmitButton>
        </form>
    );
};

export default Form;
