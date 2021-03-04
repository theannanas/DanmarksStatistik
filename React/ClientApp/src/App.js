import React from 'react';
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Form from "./components/Form";

const useStyles = makeStyles({
    root: {
        color: 'white',
        padding: '50px'
    },
});

export default () => {
    const classes = useStyles();
    return (<Container
                maxWidth="sm"
                className={classes.root}>
                <Header/>
                <Form/>
            </Container>);
}
