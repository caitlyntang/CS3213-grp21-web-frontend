import React from "react";
import { render, screen } from "@testing-library/react";
import BugLogs from "../BugLogs";

describe("BugLogs Component", () => {
    test("renders the component with the provided logs", () => {
        const logs = "This is a test bug log.";

        render(<BugLogs logs={logs} />);

        // Verify the main title is shown
        expect(screen.getByText(/Bug Logs:/i)).toBeInTheDocument();

        // Verify logs are displayed
        expect(screen.getByText(logs)).toBeInTheDocument();
    });

    test("formats logs correctly by replacing escaped newlines", () => {
        const logs = "Line1\\nLine2\\r\\nLine3"; // Escaped newlines
        const expectedLogs = "Line1\nLine2\r\nLine3"; // Correctly formatted

        render(<BugLogs logs={logs} />);

        // Verify the formatted logs are displayed using a function for the matcher
        const preElement = screen.getByText((content, element) => {
            const hasText = (node) => node.textContent === expectedLogs;
            const nodeHasPreTag = element.tagName === "PRE";
            return hasText(element) && nodeHasPreTag;
        });

        expect(preElement).toBeInTheDocument();
    });

    test("applies correct structure and renders title correctly", () => {
        const logs = "Example log";

        render(<BugLogs logs={logs} />);

        // Ensure the Box component and its children are rendered
        const heading = screen.getByRole("heading", { name: /Bug Logs:/i });
        expect(heading).toBeInTheDocument();

        // Verify logs are displayed
        const logsElement = screen.getByText((content) => content === logs);
        expect(logsElement).toBeInTheDocument();

        // Ensure the logs are wrapped in a <pre> element
        expect(logsElement.closest("pre")).toBeInTheDocument();
    });
});