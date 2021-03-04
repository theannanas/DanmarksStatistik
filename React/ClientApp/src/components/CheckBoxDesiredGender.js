import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from "@material-ui/core/Typography";


export default function CheckboxesGroup(state) {
    const [values, setState] = React.useState({
        female: state.state.desiredGender.includes('female'),
        male: state.state.desiredGender.includes('male'),
        other: state.state.desiredGender.includes('other'),
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { female, male, other } = values;

    return (
        <FormControl component="fieldset">
            <Typography gutterBottom>
                Select what you're looking for
            </Typography>
            <FormGroup row>
                <FormControlLabel
                    control={<Checkbox checked={female} onChange={handleChange} name="female"/>}
                    label="Female"
                />
                <FormControlLabel
                    control={<Checkbox checked={male} onChange={handleChange} name="male"/>}
                    label="Male"
                />
                <FormControlLabel
                    control={<Checkbox checked={other} onChange={handleChange} name="other"/>}
                    label="Other"
                />
            </FormGroup>
        </FormControl>
    );
}
