var taskTable = document.getElementById('taskTable');
var queueTableContent = '';
table_queue.allDocs({
    include_docs: true
}).then(function(result) {
    // handle result
    queueTableContent = '<table class="table">' +
        '<thead>' +
        '<tr>' +
        '<th>Action</th>' +
        '<th>Profile</th>' +
        '<th>Task</th>' +
        '<th>Start Date</th>' +
        '</tr>' +
        '</thead><tbody>';
    for (var i = 0; i < (result.rows.length - 1); i++) {
        queueTableContent += '<tr>';
        queueTableContent += '<td>' + selectActionStyle(result.rows[i].doc.queue_action_style) + '</td>';
        queueTableContent += '<td>' + result.rows[i].doc.queue_people_name + '</td>';
        queueTableContent += '<td>' + result.rows[i].doc.queue_task_name + '</td>';
        queueTableContent += '<td>' + parseInt(result.rows[i].doc.queue_action_start_date['year']) + 1990 + '/' +
            parseInt(result.rows[i].doc.queue_action_start_date['month']) + 1 + '/' +
            parseInt(result.rows[i].doc.queue_action_start_date['date']) + '/  ' +
            parseInt(result.rows[i].doc.queue_action_start_date['hours']) + ' : ' +
            parseInt(result.rows[i].doc.queue_action_start_date['minutes']) +
            '</td>';
        queueTableContent += '</tr>';
    }
    queueTableContent += '</tbody></table>';

    document.getElementById('taskTable').innerHTML = queueTableContent;
}).catch(function(err) {
    console.log(err);
});