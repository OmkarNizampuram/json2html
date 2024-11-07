// json2html.js
export default function json2html(data) {
    // Create the HTML table structure
    let html = `<table data-user="omkaromkar721@gmail.com">
<thead>
<tr><th>Name</th><th>Age</th><th>Gender</th></tr>
</thead>
<tbody>`;

    // Loop through each object in the data array to generate table rows
    data.forEach(item => {
        const name = item.Name || '';
        const age = item.Age || '';
        const gender = item.Gender || '';
        html += `<tr><td>${name}</td><td>${age}</td><td>${gender}</td></tr>`;
    });

    html += `</tbody></table>`;
    return html;
}
