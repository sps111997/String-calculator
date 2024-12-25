import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../component/Calculator';
import React from 'react';

xdescribe('Calculator React Component', () => {

  it('should render the input field and the calculate button', () => {
    render(<Calculator />);
    
    const inputElement = screen.getByLabelText('Expression:');
    const buttonElement = screen.getByText('Calculate');
    
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('should calculate the correct result for valid expressions', () => {
    render(<Calculator />);

    const inputElement = screen.getByLabelText('Expression:');
    const buttonElement = screen.getByText('Calculate');

    fireEvent.change(inputElement, { target: { value: '2+3' } });
    fireEvent.click(buttonElement);

    const result = screen.getByText('Result:');
    expect(result).toHaveTextContent('5');
  });

  it('should show an error message for expressions with negative numbers', () => {
    render(<Calculator />);

    const inputElement = screen.getByLabelText('Expressions x:');
    const buttonElement = screen.getByText('Calculate');

    fireEvent.change(inputElement, { target: { value: '5+(-3)' } });
    fireEvent.click(buttonElement);
    const errorMessage = screen.getByText('Only positive number valid');
    expect(errorMessage).toBeInTheDocument();
  });

});
