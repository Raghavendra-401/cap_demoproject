namespace my.bookshop;

entity Books {
  key ID     : String(10);
      title  : String;
      author : String;
      price  : String;
      stock  : Integer;
      status : Integer;
      store  : Association to many Bookstore
                 on store.ID = $self;
}

entity Bookstore {
  key ID      : Association to Books;
      city    : String;
      country : String;
      zipcode : Integer;
}
