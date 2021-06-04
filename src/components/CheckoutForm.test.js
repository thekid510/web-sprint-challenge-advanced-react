import React from "react";
import CheckoutForm from "./CheckoutForm";
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.queryByText(/Checkout Form/i)
    expect(header).toHaveTextContent(/Checkout Form/i)
    console.log(header)

});

test("form shows success message on submit with form details", () => {
render(<CheckoutForm/>)

const nameInput = screen.getByLabelText(/First Name/i)
userEvent.type(nameInput, "James");

const lastNameInput = screen.getByLabelText(/Last Name/i)
userEvent.type(lastNameInput, "Freund");

const addressInput = screen.getByLabelText(/Address/i)
userEvent.type(addressInput, "24397 Barton");

const cityInput = screen.getByLabelText(/City/i)
userEvent.type(cityInput, "Hayward");

const stateInput = screen.getByLabelText(/State/i)
userEvent.type(stateInput, "CA");

const zipInput = screen.getByLabelText(/Zip/i)
userEvent.type(zipInput, "94546")

const button = screen.getByRole("button");
    userEvent.click(button);

});
