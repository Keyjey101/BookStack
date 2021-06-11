import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import firebase from "../firebase";
import BookList from "./BookList";
import AddForm from "./AddForm";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from '@material-ui/core/CircularProgress'
import Header from "./partials/Header";
import { Container } from "@material-ui/core";

const SORT_OPTIONS = {
  "TITLE-ASC": { column: "title", direction: "asc" },
  "TITLE-DESC": { column: "title", direction: "desc" },
};

function useBooks(sortBy = "TITLE-ASC") {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const unsuscribe = firebase
      .firestore()
      .collection("books")
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snaphot) => {
        const newBooks = snaphot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBooks(newBooks);
      });

    return () => unsuscribe();
  }, [sortBy]);

  return books;
}

function Main() {
  const [sortBy, setSortBy] = useState("TITLE-ASC");

  const books = useBooks(sortBy);

  const booksUniqYear = [...new Set(books.map((x) => x.year))]
    .sort(function (a, b) {
      return (b === null) - (a === null) || +(a > b) || -(a < b);
    })
    .reverse();

  let arrayOfBooks = [];

  booksUniqYear.forEach((year) => {
    let x = year;
    let obj = {};
    let arr = [];
    books.forEach((book) => {
      if (book.year === x) {
        arr.push(book);
      }
    });
    obj["year"] = x;
    obj["listOfBooks"] = arr;
    arrayOfBooks.push(obj);
  });

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const currentYear = new Date().getFullYear();

  const shufB =
    books.length > 0
      ? shuffle(books.filter((e) => e.year < currentYear - 3)).reduce(
          (prev, current) => (prev.raiting > current.raiting ? prev : current)
        )
      : null;

  return (
    <div className="Main">
      <Header />
      <label style={{ marginRight: "1%", color: "whitesmoke" }}>Sort by</label>
      <Select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        style={{ color: "whitesmoke" }}
      >
        <MenuItem value="TITLE-ASC" >Author (A-Z)</MenuItem>
        <MenuItem value="TITLE-DESC" >Author (Z-A)</MenuItem>
      </Select>

      <ul>
        {shufB ? (
<Container maxWidth={'md'}>
          <Card 
            style={{
              marginLeft: "10%",
              marginBottom: "10px",
              marginRight: "10%",
              display: "block",
            }}
          >
            <CardContent style={{ margin: "300px, 200px" }}>
              <Typography variant="h5" gutterBottom align="left">
                Recomended
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                color="textPrimary"
                display="block"
              >
                "{shufB.title}" by {shufB.author.join(",")}, {shufB.year}
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="textPrimary"
                display="block"
              >
              
                {shufB.raiting
                  ? shufB.raiting == 10
                    ? "ДЕСЯТЬ ИЗ ДЕСЯТИ НА КОНЧИКАХ ПАЛЬЦЕВ"
                    : shufB.raiting + "/10"
                  : "not rated yet"}
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="textPrimary"
                display="block"
              >
                {shufB.ISBN ? "ISBN: " + shufB.ISBN : null}
              </Typography>
            </CardContent>
          </Card>
          </Container>
        ) : <CircularProgress/>}
        {arrayOfBooks.map((x, id) => {
          return (
            <Container maxWidth={'md'}>
              <BookList key={id} year={x.year} listOfBooks={x.listOfBooks} />
            </Container>
          );
        })}

        <AddForm books={books} key={uuidv4()}/>
      </ul>
    </div>
  );
}

export default Main;
