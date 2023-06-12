using my.bookshop as my from '../db/data-model';

service CatalogService {
    entity Books 
    // @(restrict : [
    //     {
    //         grant : ['READ'],
    //         to : ['BookViewer']
    //     },
    //     {
    //         grant : ['*'],
    //         to : ['BookManager']
    //     }
    // ])
    as projection on my.Books;
}