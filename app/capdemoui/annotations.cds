using CatalogService as service from '../../srv/cat-service';

annotate CatalogService.Books with @(UI: {
    SelectionFields: [
        title,
        author
    ],
    LineItem       : [
        {
            Label: title,
            Value: title
        },
        {
            Label: author,
            Value: author
        },
        {
            Label: price,
            Value: price
        },
        {
            Label: stock,
            Value: stock
        },
        {
            Label: review,
            Value: review
        },
    ],
});

annotate CatalogService.Books with {
    ID     @(title: '{i18n>ID}');
    title  @(title: '{i18n>title}');
    author @(title: '{i18n>author}');
    price  @(title: '{i18n>price}');
    stock  @(title: '{i18n>stock}');
    review @(title: '{i18n>review}');
};
