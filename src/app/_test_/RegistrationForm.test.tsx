import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RegistrationForm from "../components/RegistrationForm";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe("RegistrationForm", () => {
  it("displays validation errors for invalid form data", async () => {
    render(<RegistrationForm />);

    // Try submitting the form with invalid data
    fireEvent.click(screen.getByText("Register"));

    // Expect validation error messages to be displayed
    expect(
      await screen.findByText("Full Name must be at least 4 characters")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("phone must be at least 9 digits")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Company Name must be at least 3 characters")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Username must be at least 4 characters")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Password must be at least 10 characters")
    ).toBeInTheDocument();
    expect(await screen.findByText("Passwords must match")).toBeInTheDocument();
  });



  it("submits valid form data", async () => {
    render(<RegistrationForm />);

    // Fill in valid form data
    fireEvent.change(screen.getByPlaceholderText("Jhon Doe"), {
      target: { value: "john doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("0409709997"), {
      target: { value: "0403709867" },
    });
    fireEvent.change(screen.getByPlaceholderText("Salesforce Pty Ltd."), {
      target: { value: "Jhon Pty Ltd" },
    });
    fireEvent.change(screen.getByPlaceholderText("something123"), {
      target: { value: "jhon123" },
    });
    fireEvent.change(screen.getByPlaceholderText("something@gmail.com"), {
      target: { value: "john.doe@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "pass123456789" },
    });
    fireEvent.change(screen.getByPlaceholderText("Confirm password"), {
      target: { value: "pass123456789" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Submit"));

    // Expect no validation errors to be displayed
    expect(
      await screen.queryByText("User successfully registered !")
    ).toBeTruthy();
  });
});
