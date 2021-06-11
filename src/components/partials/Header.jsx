import React from 'react'
import Typography from "@material-ui/core/Typography";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

function Header() {
    return (
        <div className='header'>
            <Typography variant="h2" gutterBottom style={{ color: "white" }}>
        <LibraryBooksIcon style={{ fontSize: "3rem", color: "white" }} />{" "}
        BookStack
      </Typography>
        </div>
    )
}

export default Header
