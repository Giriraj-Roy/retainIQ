// HeaderInput.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HeaderInput from '../components/HeaderInput'; // Adjust the import path as necessary
import '@testing-library/jest-dom'

describe('HeaderInput Component', () => {
    test('renders the input field and arrow image', () => {
        render(<HeaderInput />);
        
        // Check if the arrow image is rendered
        const arrowImage = screen.getByAltText('arrow');
        expect(arrowImage).toBeInTheDocument();
        
        // Check if the input field is rendered
        const inputField = screen.getByPlaceholderText('Enter Name');
        expect(inputField).toBeInTheDocument();
    });

    test('allows user to type in the input field', () => {
        render(<HeaderInput />);
        
        const inputField = screen.getByPlaceholderText('Enter Name');
        
        // Simulate user typing
        fireEvent.change(inputField, { target: { value: 'Test Name' } });
        // console.log(inputField?.value)
        // Check if the input value is updated
        expect(inputField.value).toBe('Test Name');
    });

    test('limits input length to 30 characters', () => {
        render(<HeaderInput />);
        
        const inputField = screen.getByPlaceholderText('Enter Name');
        
        // Simulate user typing more than 30 characters
        fireEvent.change(inputField, { target: { value: 'This is a very long name that exceeds thirty characters' } });
        
        // The value should still be limited to 30 characters
        expect(inputField.value.length).toBeLessThanOrEqual(30);
    });
});