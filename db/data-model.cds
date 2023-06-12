namespace my.bookshop;

entity Books {
  key ID     : String(10);
      title  : String;
      author : String;
      price  : String;
      stock  : Integer;
      status : Integer;
}
