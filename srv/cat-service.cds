using my.bookshop as my from '../db/data-model';

service CatalogService @(requires: 'authenticated-user') {
    entity Books @(restrict: [
        {
            grant: ['READ'],
            to   : ['BookViewer']
        },
        {
            grant: ['*'],
            to   : ['BookManager']
        }
    ])               as projection on my.Books;

    entity Bookstore as projection on my.Bookstore;
    @(requires: 'BookManager') function getTotalCount() returns String;
    function getBooksCsvData() returns String;
}
