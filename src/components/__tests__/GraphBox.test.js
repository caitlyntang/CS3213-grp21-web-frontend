import React from 'react';
import { render, screen } from '@testing-library/react';
import GraphBox from '../GraphBox';

describe('GraphBox Component', () => {
    test('renders the component and displays the title', () => {
        render(<GraphBox />);

        // Verify the title is displayed
        expect(screen.getByText('Total no.of queries')).toBeInTheDocument();
    });

    test('displays the query count correctly', () => {
        render(<GraphBox />);

        // Verify the query count is displayed
        const queryCount = 345677; // Hardcoded value from the component
        expect(screen.getByText(queryCount.toString())).toBeInTheDocument();
    });

});