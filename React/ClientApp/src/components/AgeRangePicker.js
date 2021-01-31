import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {white} from "material-ui/styles/colors";
import pink from "@material-ui/core/colors/pink";

const useStyles = makeStyles({
    root: {
        width: 300,
        color: white
    },
    slider: {
        color: "white",
    },
    valueLabel: {
        color: pink[900]
    }
});
const marks = [
    {
        value: 18,
        label: "18"
    },
    {
        value: 65,
        label: '65+',
    }]
function valuetext(value) {
    return `${value} years`;
}

export default function AgeRangePicker() {
    const classes = useStyles();
    const [value, setValue] = React.useState([25, 35]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                Age range
            </Typography>
            <Slider
                className={classes.slider}
                valueL
                value={value}
                onChange={handleChange}
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                valueLabelDisplay="on"
                min={18}
                max={65}
                marks={marks}
            />
        </div>
    );
}