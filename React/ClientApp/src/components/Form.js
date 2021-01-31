import React from 'react';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import MunicipalitySelect from "./MunicipalitySelect";


function Form() {
    return (
        <Grid container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={5}>
            <Grid item>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Select your gender</FormLabel>
                    <RadioGroup row aria-label="gender" name="gender1">
                        <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                        <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                        <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Select what you're looking for</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox name="Female"/>}
                            label="Female"
                        />
                        <FormControlLabel
                            control={<Checkbox name="Male"/>}
                            label="Male"
                        />
                        <FormControlLabel
                            control={<Checkbox name="other"/>}
                            label="Other"
                        />
                    </FormGroup>
                </FormControl>
            </Grid>
            <Grid item id="select">
                <MunicipalitySelect/>
            </Grid>
        </Grid>
    );
}

export default Form;
