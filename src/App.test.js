import React from "react";
import  { render, getByLabelText, getByText, getByTestId, queryByTestId, mount, fireEvent, waitFor } from '@testing-library/react';
import * as rtl from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

it('contact form test', async () => {
  // const wrapper = rtl.render( 
  //   <span className="greet">hello world</span>
  // );
  // const element = wrapper.queryByText(/hello/i);

  // expect(element).toBeTruthy();
  // expect(element).toBeInTheDocument();
  // expect(element).toBeVisible();


const {getByTestId, findByTestId} = render(<ContactForm/>);

const expectedName = 'Taja';
const expectedLastName = "House";
const expectedEmail = "lady@email.com";
const expectedMessage = "This is my message"


const firstName = getByTestId('firstName');
const lastName = getByTestId('lastName');
const email = getByTestId('email');
const message = getByTestId('message');
const button = getByTestId('button');
const nameError = getByTestId('nameError');

fireEvent.change(firstName, {target: {value: expectedName}});
fireEvent.change(lastName, {target: {value: expectedLastName}});
fireEvent.change(email, {target: {value: expectedEmail}});
fireEvent.change(message, {target: {value: expectedMessage}});


expect(queryByTestId(nameError, 'Looks like there was an error: maxLength'))

fireEvent.click(button)
await waitFor(()=> findByTestId('confirm'))
});