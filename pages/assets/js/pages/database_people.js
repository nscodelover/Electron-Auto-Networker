function saveTablePeople(docs) {
    return table_people.put(docs);
}

function getAllTablePepple() {
    return table_people.allDocs({
        include_docs: true
    });
}

function getDataTablePeople(field, value) {
    // return table_people.get();
}

function bulkDataTablePeople(docs) {
    return table_people.bulkDocs(docs);
}