import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});
    render(<CheckoutForm/>)
    const header = screen.queryByText(/checkout Form/i)
    expect (header).toHaveTextContent(/checkout Form/i)
    console.log(header)

// test("form shows success message on submit with form details", () => {
// render(<CheckoutForm/>)

//     const nameInput = screen.getByLabelText(/First Name/i)
//     userEvent.type(nameInput, "James");

//     const lastNameInput = screen.getByLabelText(/Last Name/i)
//     userEvent.type(lastNameInput,"Freund");

//     const cityInput = screen.getByLabelText(/Address/i)
//     userEvent.type(cityInput, "Hayward");

//     const stateInput = screen.getByLabelText(/State/i)
//     userEvent.type(stateInput,"CA");

//     const zipInput = screen.getByLabelText(/Zip/i)
//     userEvent.type(zipInput, "94546")

//     const button = screen.getByLabelRole("button");
//     userEvent.click(button)


    
});

