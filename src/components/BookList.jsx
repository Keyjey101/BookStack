import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Container } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

function BookList({ year, listOfBooks }) {
  const books = listOfBooks.sort();

  return (
    <>
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
            {year ? year : "forthcoming"}
          </Typography>

          {books.map((e) => (
            <Container key={uuidv4()}>
              <Typography
                variant="h6"
                gutterBottom
                color="textPrimary"
                display="block"
              >
                "{e.title}" by {e.author.join(",")}
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="textPrimary"
                display="block"
              >
                {e.raiting
                  ? e.raiting == 10
                    ? "ДЕСЯТЬ ИЗ ДЕСЯТИ НА КОНЧИКАХ ПАЛЬЦЕВ"
                    : e.raiting + "/10"
                  : "not rated yet"}
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="textPrimary"
                display="block"
              >
                {e.ISBN ? "ISBN: " + e.ISBN : null}
              </Typography>
            </Container>
          ))}
        </CardContent>
      </Card>
    </>
  );
}

export default BookList;
