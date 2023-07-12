namespace my.bookshop;

entity Books {
  key ID     : String(10);
      title  : String;
      author : String;
      price  : String;
      stock  : Integer;
      status : Integer;
      store  : Association to Bookstore;
}

entity Bookstore {
  name    : Association to many Books
              on name.store = $self;
  city    : String;
  country : String;
  zipcode : Integer;
}
