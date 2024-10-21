const baseUrl = 'https://semantic-search-ai.azurewebsites.net/api';

// Utility: Show documentation
function showDocumentation() {
    document.getElementById("documentation").classList.remove("d-none");
    document.querySelectorAll(".endpoint").forEach(endpoint => endpoint.classList.add("d-none"));
}

// Utility: Show API page
function showAPIPage() {
    document.getElementById("documentation").classList.add("d-none");
    document.querySelectorAll(".endpoint").forEach(endpoint => endpoint.classList.remove("d-none"));
}

// Utility: Show loading
function showLoading(elementId) {
    document.getElementById(elementId).innerHTML = '<div class="loading">Loading...</div>';
}

// Utility: Handle error
function handleError(elementId, error) {
    document.getElementById(elementId).innerHTML = `<div class="error">Error: ${error}</div>`;
}

// Utility: Validate AddTextInputs
function validateAddTextInputs(text, sessionId) {
    const errors = [];

    // Check if text is empty
    if (!text.trim()) {
        errors.push('Text cannot be empty.');
    }

    // Check if session ID is empty
    if (!sessionId.trim()) {
        errors.push('Session ID cannot be empty.');
    }

    return errors;
}

// Utility: Validate SearchInputs
function validateSearchInputs(query, sessionId, limit, baseSimilarity) {
    const errors = [];

    // Check if query is empty
    if (!query.trim()) {
        errors.push('Search query cannot be empty.');
    }

    // Check if session ID is empty
    if (!sessionId.trim()) {
        errors.push('Session ID cannot be empty.');
    }

    // Validate limit (1-10)
    if (isNaN(limit) || limit < 1 || limit > 10) {
        errors.push('Result limit must be a number between 1 and 10.');
    }

    // Validate base similarity (0.0 - 1.0)
    if (isNaN(baseSimilarity) || baseSimilarity < 0 || baseSimilarity > 1) {
        errors.push('Base similarity must be a number between 0.0 and 1.0.');
    }

    return errors;
}

// Add Text Endpoint
function callAddText() {
    const text = document.getElementById('addText').value;
    const sessionId = document.getElementById('sessionId').value;
    const feedback = document.getElementById('addTextFeedback');

    // Clear previous feedback
    feedback.innerHTML = '';

    // Validate inputs
    const errors = validateAddTextInputs(text, sessionId);

    if (errors.length > 0) {
        // Display errors
        feedback.innerHTML = `<div class="error">${errors.join('<br>')}</div>`;
        return;
    }

    // Show loading
    showLoading('addTextFeedback');

    // Prepare payload
    const payload = {
        session_id: sessionId,
        text: text
    };

    // Call endpoint
    fetch(`${baseUrl}/text`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        feedback.innerHTML = '';
        document.getElementById('addTextResponse').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        handleError('addTextFeedback', error);
    });
}

// Search Text Endpoint
function callSearchText() {
    const query = document.getElementById('searchQuery').value;
    const sessionId = document.getElementById('searchSessionId').value;
    const limit = document.getElementById('limit').value;
    const baseSimilarity = document.getElementById('baseSimilarity').value;
    const feedback = document.getElementById('searchFeedback');

    // Clear previous feedback
    feedback.innerHTML = '';

    // Validate inputs
    const errors = validateSearchInputs(query, sessionId, limit, baseSimilarity);

    if (errors.length > 0) {
        // Display errors
        feedback.innerHTML = `<div class="error">${errors.join('<br>')}</div>`;
        return;
    }

    // Show loading
    showLoading('searchFeedback');

    // Prepare payload
    const payload = {
        query: query,
        session_id: sessionId,
        limit: parseInt(limit),
        base_similarity: parseFloat(baseSimilarity)
    };

    // Call endpoint
    fetch(`${baseUrl}/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        feedback.innerHTML = '';
        document.getElementById('searchResponse').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        handleError('searchFeedback', error);
    });
}

// Healthcheck Endpoint
function callHealthcheck() {
    const feedback = document.getElementById('healthFeedback');

    showLoading('healthFeedback');

    fetch(`${baseUrl}/healthcheck`)
    .then(response => response.text())
    .then(data => {
        feedback.innerHTML = '';
        document.getElementById('healthcheckResponse').textContent = data;
    })
    .catch(error => {
        handleError('healthFeedback', error);
    });
}
