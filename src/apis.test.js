import { get_all_reports, get_report_by_id } from './apis';
import get_config from './utils/config.js';

// Mock the config function
jest.mock('./utils/config', () => jest.fn(() => ({
    server_url: 'http://mockserver.com/'
})));

describe('API tests', () => {
    beforeEach(() => {
        global.fetch = jest.fn(); // Mock the global fetch function
    });

    afterEach(() => {
        jest.clearAllMocks(); // Clear mocks after each test
    });

    describe('get_all_reports', () => {
        test('calls fetch with the correct URL', async () => {
            // Mock a fetch success response
            global.fetch.mockResolvedValueOnce({
                ok: true,
                text: jest.fn().mockResolvedValueOnce(JSON.stringify([{ id: 1, name: 'Report 1' }])),
            });

            await get_all_reports();
            expect(global.fetch).toHaveBeenCalledWith('http://mockserver.com/all_reports');
        });

        test('returns parsed JSON data when fetch is successful', async () => {
            // Mock a fetch success response with JSON
            const mockData = [{ id: 1, name: 'Report 1' }];
            global.fetch.mockResolvedValueOnce({
                ok: true,
                text: jest.fn().mockResolvedValueOnce(JSON.stringify(mockData)),
            });

            const result = await get_all_reports();
            expect(result).toEqual(mockData);
        });

        test('throws an error when fetch response is not ok', async () => {
            // Mock a fetch error response
            global.fetch.mockResolvedValueOnce({
                ok: false,
                status: 500,
                text: jest.fn().mockResolvedValueOnce('Internal Server Error'),
            });

            const result = await get_all_reports();
            // The error should not crash the application, so no error throw is expected
            expect(result).toBeUndefined();
        });

        test('handles JSON parsing errors gracefully', async () => {
            // Mock a fetch response with invalid JSON
            global.fetch.mockResolvedValueOnce({
                ok: true,
                text: jest.fn().mockResolvedValueOnce('<html>Invalid Response</html>'),
            });

            console.error = jest.fn(); // Mock console.error to track error handling

            const result = await get_all_reports();

            // Ensure console.error was called
            expect(console.error).toHaveBeenCalledWith(
                expect.stringContaining('Error in get_all_reports'),
                expect.anything() // Extra details about the error, e.g., "Unexpected token '<'"
            );

            // Ensure the function returns undefined when parsing fails
            expect(result).toBeUndefined();
        });
    });

    describe('get_report_by_id', () => {
        test('calls fetch with the correct URL and ID', async () => {
            // Mock a fetch success response
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: jest.fn().mockResolvedValueOnce({ id: 123, name: 'Mock Report' }),
            });

            await get_report_by_id(123);
            expect(global.fetch).toHaveBeenCalledWith('http://mockserver.com/report_by_id/123');
        });

        test('returns parsed JSON data when fetch is successful', async () => {
            // Mock a fetch success response with JSON
            const mockData = { id: 123, name: 'Mock Report' };
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: jest.fn().mockResolvedValueOnce(mockData),
            });

            const result = await get_report_by_id(123);
            expect(result).toEqual(mockData);
        });

        test('throws an error when fetch response is not ok', async () => {
            // Mock a fetch error response
            global.fetch.mockResolvedValueOnce({
                ok: false,
                status: 404,
            });

            console.error = jest.fn(); // Mock console.error to track error handling

            const result = await get_report_by_id(123);
            expect(console.error).toHaveBeenCalledWith(expect.stringContaining('Response status: 404'));
            expect(result).toBeUndefined();
        });
    });
});