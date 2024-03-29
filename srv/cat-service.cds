using my.bookshop as my from '../db/data-model';
using {ECPersonalInformation as external} from './external/ECPersonalInformation';
using {Northwind as externalNorthwind} from './external/Northwind';

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
    ])                as projection on my.Books;

    entity Bookstore  as projection on my.Bookstore;
    @(requires: 'BookManager') function getTotalCount()              returns String;
    function                            getBooksCsvData(ID : String) returns String;
    function                            useCfenv()                   returns String;

    entity SFPersonal as
        select
                firstName,
                lastName,
                initials         as nameHeader,
                title            as personalTitle,
            key personIdExternal as id,
            key startDate
        from external.PerPersonal;

    entity Customers  as select from externalNorthwind.Customers;
}
