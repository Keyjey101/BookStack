import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Container from "@material-ui/core/Container";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

import firebase from "../firebase";

function AddForm(props) {
  const [authors, setAuthors] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [raiting, setRaiting] = useState(0);
  const [isbn, setIsbn] = useState("");
  const [addOrDel, setAddOrDel] = useState(true);

  

  const isbnS = isbn.replace(/-|\s/g, "");
  const checkIsnb = function (a, b, c) {
    
    if (a.match(/[0-9]/i) && a.length === 13) {
      

    for (b = c = 0; a[c] && (b += a[c++] * (c % 2 ? 1 : 3)); );
    return !(b % 10) }
    return false;
  };

  function pushBook() {
/*
    //дополнительные проверки по идее на кнопку навешаны, можно удалить
    if (authors[0].author === "" || title === "") {
      return alert("make sure you complete all fields with * symbol"); 
    }
    if (raiting > 10 || raiting <0 ) return alert('raiting should be in range 0..10') 
    if (year <1800 || year > new Date().getFullYear() + 3) return alert(`we are not historiacal museum, make sure that year of published in range of 1800..${new Date().getFullYear() + 3}`)
   //
   */
    firebase
      .firestore()
      .collection("books")
      .add({
        author: authors.map((x) => x.author).filter((x) => x !==''),
        year: year ? Number.parseInt(year) : null,
        title: title,
        raiting: raiting ? Number.parseInt(raiting) : null,
        ISBN: checkIsnb(isbnS) ? isbn : null,
      })
      .then(() => {
        setAuthors([]);
        setTitle("");
        setYear("");
        setRaiting(0);
        setIsbn("");
      });
  }

  const [bookToDelete, setBookToDelete] = useState("");
  const chooseDelete = (event) => {
    setBookToDelete(event.target.value);
  };

  const ChangeAuthor = (value, key) => {
    setAuthors(
      authors.map((i) => (i.key === key ? { ...i, ["author"]: value } : i))
    );
  };

  const DeleteAuthor = (uuid) => {
    setAuthors(authors.filter((i) => i.key !== uuid));
  };

  const deleteBook = () => {
    if (!bookToDelete) {
      return alert("Сперва необходимо выбрать книгу"); //дополнительная проверка по идее на кнопку навешано, можно удалить
    }
    const id = props.books.filter((book) => book.title === bookToDelete)[0].id;

    firebase
      .firestore()
      .collection("books")
      .doc(id)
      .delete()
      .then(() =>
        console.log(`Вы только что удалили книгу, ну как не стыдно...`)
      )
      .catch((e) => console.log("error while removing", e));
  };

  const newAuthor = () => {
    setAuthors([...authors, { author: "", key: uuidv4() }]);
  };



  return (
    <Container maxWidth={'xs'}>
      <Paper
        className="form"
        
        
      >
        <Container
          className="form-control-buttons"
          style={{ marginBottom: "20px" }}
        >
          <Button
            onClick={() => setAddOrDel(true)}
            style={
              addOrDel
                ? {
                    backgroundColor: "#a9c7f0",
                    color: "white",
                    marginTop: "20px",
                  }
                : { marginTop: "20px" }
            }
          >
            <Typography>Add New</Typography>
          </Button>
          <Button
            onClick={() => setAddOrDel(false)}
            style={
              addOrDel
                ? { marginTop: "20px" }
                : {
                    backgroundColor: "#a9c7f0",
                    color: "white",
                    marginTop: "20px",
                  }
            }
          >
            <Typography>Delete</Typography>
          </Button>
        </Container>
        {addOrDel ? (
          <Container className="add-form">
            <Container
              className="title-container"
              style={{ marginBottom: "30px" }}
            >
              <TextField
                id="title"
                label="Title"
                helperText="required field"
                maxLength="100"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </Container>

            {authors.length === 0 ? (
              <Typography
                variant="caption"
                display="block"
                style={{ color: "red" }}
              >
                at least one author should be added
              </Typography>
            ) : null}
            {authors.map((x, id) => (
              <Container key={id}>
                <Container
                  className="author-container"
                  style={{ marginBottom: "10px" }}
                >
                  <TextField
                    type="text"
                    label="Author"
                    id="input-author"
                    value={x.author}
                    required
                    style={{ marginLeft: "2%" }}
                    onChange={(e) => ChangeAuthor(e.target.value, x.key)}
                  />
                </Container>
                <Button onClick={() => DeleteAuthor(x.key)}>
                  <DeleteIcon style={{ marginTop: "0.5rem" }} />
                </Button>{" "}
              </Container>
            ))}
            <Container className="new-author-button">
              <Button
                onClick={newAuthor}
                variant="outlined"
                color="primary"
                style={{ marginBottom: "20px", marginTop: "20px" }}
              >
                {authors.length > 0 ? "Co-author" : "Add author"}
              </Button>
            </Container>

            <TextField
              label="Year"
              type="number"
              helperText="from 1800"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              InputProps={{
                inputProps: {
                  min: 1800,
                },
              }}
              style={{ marginBottom: "20px", marginRight: "2rem" }}
            />

            <TextField
              label="Raiting"
              type="number"
              helperText="from 0 to 10"
              onChange={(e) => setRaiting(e.target.value)}
              value={raiting}
              InputProps={{
                inputProps: {
                  min: 0,
                  max: 10,
                },
              }}
              style={{ marginBottom: "30px" }}
            />
            <Container>
              <TextField
                label="ISBN"
                inputProps={{ maxLength: 17 }}
                type="text"
                onChange={(e) => setIsbn(e.target.value)}
                value={checkIsnb(isbnS) ? isbn.replace(/[^a-zA-Z0-9]/g,'-') : undefined}
                style={{ marginBottom: "30px" }}
              />{" "}
              {isbnS !== "" ? (checkIsnb(isbnS) ? 
                 
                  <CheckIcon style={{ color: "green", marginTop: "1rem" }} />
                 : <ClearIcon style={{ color: "red", marginTop: "1rem" }} />
              ) : (
                null
              )}
            </Container>

            <Button
              onClick={pushBook}
              variant="contained"
              color="primary"
              size="large"
              disabled={(authors.length === 0) || (title === '' || ((year && (year <1800 || year > new Date().getFullYear() + 3)) || (raiting && (raiting >10 || raiting < 0)) ? true : (authors[0].author === '')) ? true : false)}
              style={{ marginBottom: "30px" }}
            >
              ADD new book
            </Button>
          </Container>
        ) : (
          <Container className="delete-form">
            <FormControl style={{ marginTop: "20px" }}>
              <Select value={bookToDelete} onChange={chooseDelete}>
                {props.books.map((x) => (
                  <MenuItem value={x.title}>{x.title}</MenuItem>
                ))}
              </Select>

              <FormHelperText style={{ marginBottom: "20px" }}>
                Choose book which you want to delete
              </FormHelperText>
            </FormControl>
            <Container>
              <Button
                variant="contained"
                onClick={(e) => deleteBook()}
                color="secondary"
                startIcon={<DeleteIcon />}
                size="large"
                disabled={bookToDelete? false : true}
                style={{ marginBottom: "20px" }}
              >
                {" "}
                DELETE BOOK
              </Button>
            </Container>
          </Container>
        )}
      </Paper>
    </Container>
  );
}

export default AddForm;
