import React from 'react';
import logo from '../images/android-chrome-192x192.png';
import Grid from "@material-ui/core/Grid";

function Header() {
    return (
        <Grid container
              spacing={3}
              direction="row"
              justify="center"
              alignItems="center">
            <Grid item>
                <img src={logo} alt="Logo" width={50} />
            </Grid>
            <Grid item>
                <h1>Love counter</h1>
                <p>An estimate of your possible love matches</p>
            </Grid>
            <Grid item>
                <img src={logo} alt="Logo" width={50} />
            </Grid>
        </Grid>
    );
}

export default Header;