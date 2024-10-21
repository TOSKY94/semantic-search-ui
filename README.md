# API Tester for Semantic Search Endpoints

The API Tester is a web-based application that allows you to interact with the semantic search API endpoints. It provides a user-friendly interface to test the functionality of the API, including adding text, searching for similar text, and performing a health check.

## Features

1. **Add Text**: Add a large body of text to a session for semantic search.
2. **Search Text**: Search for similar text within a session.
3. **Healthcheck**: Perform a health check on the server.
4. **API Documentation**: Detailed documentation for each API endpoint, including request parameters and example payloads.

## Project Structure

```bash
/semantic-search-ui
│
├── index.html
├── style.css
├── script.js
└── README.md   (Documentation)
```

## How to Use

1. Open the API Tester in your web browser.
2. To view the API documentation, click the "Documentation" link in the top right corner.
3. To use the API endpoints:
   - **Add Text**: Enter the text you want to add and the session ID, then click "Submit Text".
   - **Search Text**: Enter the search query, session ID, result limit, and base similarity, then click "Search".
   - **Healthcheck**: Click the "Check Health" button to perform a healthcheck on the server.

## Development

The API Tester is built using HTML, CSS (with Bootstrap), and JavaScript. The application is designed to be simple and easy to use, with a focus on providing a clear and intuitive user interface.

### Dependencies

The API Tester uses the following dependencies:

- [Bootstrap](https://getbootstrap.com/) for the CSS framework
- [jQuery](https://jquery.com/) for DOM manipulation and event handling

### Getting Started

To run the API Tester locally, follow these steps:

1. Clone the repository: `git clone https://github.com/tosky94/semantic-search-ui.git`
2. Open the `index.html` file in your web browser.

### Contributing

If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request. Contributions are always welcome!

### License

This project is licensed under the [MIT License](LICENSE).
