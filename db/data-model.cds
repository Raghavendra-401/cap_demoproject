namespace my.bookshop;

using {
  cuid,
  managed
} from '@sap/cds/common';

type Rating : String enum {
  Poor;
  Average;
  Good;
  Excellent;
};

entity Books : cuid, managed {
  title  : String;
  author : String;
  price  : String;
  stock  : Integer;
  review : Rating;
  store  : Composition of many Bookstore
             on store.name = $self;
}

entity Bookstore : cuid {
  key name    : Association to one Books;
      city    : String;
      country : String;
      zipcode : Integer;
}
