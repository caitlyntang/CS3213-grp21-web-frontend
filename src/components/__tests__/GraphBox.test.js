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
        const testQueryData = 345677;
        const testRuntimeData = 1;

        render(
            <GraphBox
                queryData={testQueryData}
                runtimeData={testRuntimeData}
                reset={false}
            />
        );

        // Expect the displayed query count to match the test data
        expect(screen.getByText(testQueryData.toString())).toBeInTheDocument();
    });

    test('updates internal state when new data is passed in', () => {
        const { rerender } = render(
            <GraphBox runtimeData={1} queryData={11001} reset={false} />
        );

        // First data point should show up
        expect(screen.getByText('11001')).toBeInTheDocument();

        // Send another data point
        rerender(<GraphBox runtimeData={2} queryData={200200} reset={false} />);
        expect(screen.getByText('200200')).toBeInTheDocument();
    });

    test('resets internal state when reset is true', () => {
        const { rerender } = render(
            <GraphBox runtimeData={1} queryData={12300} reset={false} />
        );

        // Confirm data is added
        expect(screen.getByText('12300')).toBeInTheDocument();

        // Trigger reset
        rerender(<GraphBox runtimeData={2} queryData={45600} reset={true} />);

        // Confirm that the data is reset
        expect(screen.getByText((text) => text.trim() === '45600')).toBeInTheDocument();
    });





});