import React from 'react';
import { render, screen } from '@testing-library/react';
import StatBox from '../StatBox';

describe('StatBox Component', () => {
    test('renders without crashing', () => {
        render(<StatBox title="Total Queries" data={12345} />);

        // Check for the title
        expect(screen.getByText('Total Queries')).toBeInTheDocument();

        // Check for the data
        expect(screen.getByText('12345')).toBeInTheDocument();
    });

    test('displays dynamic props correctly', () => {
        render(<StatBox title="Active Users" data={789} />);

        // Check for the updated title
        expect(screen.getByText('Active Users')).toBeInTheDocument();

        // Check for the updated data
        expect(screen.getByText('789')).toBeInTheDocument();
    });
});