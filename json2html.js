export default function json2html(data) {
  // Start the HTML table, including the data-user attribute
  let html = '<table data-user="kmsreddy2611@gmail.com">';
  
  // Create the table header
  html += '<thead><tr>';
  
  // Create table headers dynamically based on the keys of the first object
  const headers = Object.keys(data[0]);
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += '</tr></thead>';
  
  // Create the table body
  html += '<tbody>';
  
  // Loop through the data and create a table row for each object
  data.forEach(item => {
    html += '<tr>';
    headers.forEach(header => {
      // Only include the value if it exists
      html += `<td>${item[header] !== undefined ? item[header] : ''}</td>`;
    });
    html += '</tr>';
  });
  
  // Close the table body and table tags
  html += '</tbody></table>';
  
  // Return the generated HTML table
  return html;
}
