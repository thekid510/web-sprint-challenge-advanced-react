import React from "react";
import CheckoutForm from "./CheckoutForm";
import {render, screen, waitFor } from '@testing-library/react';
// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.queryByText(/Checkout Form/i)
    expect(header).toHaveTextContent(/Checkout Form/i)

});

test("form shows success message on submit with form details", () => {




});
