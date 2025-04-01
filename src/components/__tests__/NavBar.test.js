import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Navbar from '../NavBar';

describe('NavBar Component', () => {
    test('renders without crashing and displays buttons', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        // Check that the Dashboard button is rendered
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        // Check that the Bugs button is rendered
        expect(screen.getByText('Bugs')).toBeInTheDocument();
    });

    test('renders links with the correct "to" attributes', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const dashboardLink = screen.getByRole('link', { name: 'Dashboard' });
        const bugsLink = screen.getByRole('link', { name: 'Bugs' });

        // Verify the correct "to" attributes
        expect(dashboardLink).toHaveAttribute('href', '/');
        expect(bugsLink).toHaveAttribute('href', '/bugs');
    });

    test('navigates to correct routes when buttons are clicked', async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const dashboardLink = screen.getByRole('link', { name: 'Dashboard' });
        const bugsLink = screen.getByRole('link', { name: 'Bugs' });

        // Simulate clicking the Dashboard button
        await user.click(dashboardLink);
        expect(dashboardLink).toHaveAttribute('href', '/');

        // Simulate clicking the Bugs button
        await user.click(bugsLink);
        expect(bugsLink).toHaveAttribute('href', '/bugs');
    });
});