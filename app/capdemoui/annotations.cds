using CatalogService as service from '../../srv/cat-service';

annotate CatalogService.Books with @(UI: {
    SelectionFields: [
        title,
        author
    ],
    LineItem       : [
        {
            Label: 'ID',
            Value: ID
        },
        {
            Label: 'Title',
            Value: title
        },
        {
            Label: 'Author',
            Value: author
        },
        {
            Label: 'Price',
            Value: price
        },
        {
            Label: 'Stock',
            Value: stock
        }
    ],
});
