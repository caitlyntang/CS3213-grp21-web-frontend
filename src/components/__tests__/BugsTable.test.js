import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BugsTable from "../BugsTable";
import userEvent from "@testing-library/user-event"; // for simulating clicks


// Mock the `get_all_reports` API function
jest.mock("../../apis.js", () => ({
    get_all_reports: jest.fn(), // Will be dynamically replaced in each test
}));

describe("BugsTable Component Tests", () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear any mocks after each test
    });

    // Mock for useNavigate from react-router-dom
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"), // Keep other functions from react-router-dom
        useNavigate: () => mockNavigate, // Override useNavigate to use mocked function
    }));

    test("renders loading spinner initially", () => {
        render(
            <BrowserRouter>
                <BugsTable />
            </BrowserRouter>
        );

        // Assert that the loading spinner (CircularProgress with role "progressbar") is displayed
        expect(screen.getByRole("progressbar")).toBeInTheDocument();
    });

    test("displays error message when data fetching fails", async () => {
        // Mock the API function to throw an error
        const { get_all_reports } = require("../../apis.js");
        get_all_reports.mockRejectedValue(new Error("Failed to fetch"));

        render(
            <BrowserRouter>
                <BugsTable />
            </BrowserRouter>
        );

        // Wait for the error message to display
        await waitFor(() => {
            expect(screen.getByText("Failed to fetch")).toBeInTheDocument();
        });
    });

    test("displays data in the table when fetch is successful", async () => {
        // Mock API success response
        const { get_all_reports } = require("../../apis.js");
        get_all_reports.mockResolvedValue([
            { id: 1, report_date: "2023-10-20", db_type: "PostgreSQL", db_version: "14.1", seed: "123" },
            { id: 2, report_date: "2023-10-21", db_type: "MySQL", db_version: "8.0", seed: "456" },
        ]);

        render(
            <BrowserRouter>
                <BugsTable />
            </BrowserRouter>
        );

        // Wait for the loading spinner to disappear
        await waitFor(() => {
            expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
        });

        // Verify that the correct data is rendered in the table
        expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
        expect(screen.getByText("MySQL")).toBeInTheDocument();
        expect(screen.getByText("2023-10-20")).toBeInTheDocument();
        expect(screen.getByText("123")).toBeInTheDocument();
    });

    test("renders correctly with provided `data` prop without calling API", async () => {
        const mockData = [
            { id: 101, report_date: "2023-11-11", db_type: "SQLite", db_version: "3.38", seed: "999" }
        ];

        // Reset mocks to ensure API is not called
        const { get_all_reports } = require("../../apis.js");
        get_all_reports.mockResolvedValue([]); // just in case, but should not be called

        render(
            <BrowserRouter>
                <BugsTable data={mockData} />
            </BrowserRouter>
        );

        // Spinner shouldn't show since loading is set to false instantly
        expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();

        // Check if data from props is rendered
        expect(screen.getByText("SQLite")).toBeInTheDocument();
        expect(get_all_reports).not.toHaveBeenCalled(); // Ensure API is NOT called
    });



});