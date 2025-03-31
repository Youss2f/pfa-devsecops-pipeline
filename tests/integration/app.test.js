// tests/integration/app.test.js
const request = require('supertest');
const app = require('../../src/app'); // Import the Express app instance

describe('Integration Tests for Application Endpoints', () => {

  // Test the root endpoint ('/')
  describe('GET /', () => {
    it('should return status 200 and HTML content', async () => {
      // Act: Make a GET request to the root endpoint
      const response = await request(app).get('/');

      // Assert: Check the response status and content type
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/html/); // Check if content type includes 'html'
      expect(response.text).toContain('Welcome to DevSecOps!'); // Check if specific text exists in the response body
    });
  });

  // Add more endpoint tests here later (e.g., POST requests, error handling)
  // describe('POST /submit', () => { ... });

});