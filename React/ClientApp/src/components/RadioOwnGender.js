import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from "@material-ui/core/Typography";

export default function RadioButtonsGroup(ownGender, changeOwnGender) {
    //const [value, setValue] = React.useState(state.state.ownGender);
    
    console.log()
    
    const handleChange = (event) => {
        //setValue(event.target.value);
        // changeOwnGender(event.target.value)
        this.setState(state => ({ownGender: ownGender}))
    };

    return (
        <FormControl component="fieldset">
            <Typography gutterBottom>
                Select your gender
            </Typography>
            <RadioGroup aria-label="gender" name="ownGender" value={ownGender} onChange={() => changeOwnGender()}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>
    );
}
