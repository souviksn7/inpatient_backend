// Function to fetch data from API
async function fetchData() {
    try {
        const response = await fetch('http://localhost:3006/healthchart/getcounts'); // Replace with your API endpoint
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Function to populate the table with data
async function populateTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    try {
        const data = await fetchData();
        data.forEach(rowData => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${rowData.client_id}</td>
                <td>${rowData.patient_id}</td>
                <td>${rowData.count}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error populating table:', error);
    }
}

// Populate the table when the page loads
window.onload = populateTable;
