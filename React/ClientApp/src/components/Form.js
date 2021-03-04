import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import MunicipalitySelect from "./MunicipalitySelect";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../store/Befolkning";
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import {makeStyles} from "@material-ui/core/styles";
import {white} from "material-ui/styles/colors";
import pink from "@material-ui/core/colors/pink";
import Slider from "@material-ui/core/Slider";


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageStart: 20, 
            ageEnd: 60, 
            isLoading: false,
            ownGender: 'female', 
            desiredGender: ['female', 'male'],
            municipalities: [],
            matches: '???'
        }
    }

    getMatches = async () => {
        console.log(this.state)
        await this.props.requestBefolkning(this.state);
    }
    
    changeOwnGender = (event) => {
        this.setState(() => ({ownGender: event.target.value}))
    }
    changeDesiredGender = (event) => {
        let desiredGender = this.state.desiredGender
        if (event.target.checked && !desiredGender.includes(event.target.name)) {
            desiredGender.push(event.target.name)
        } else {
            console.log(event.target.name)
            desiredGender = desiredGender.filter((value) => value !== event.target.name)
        }
        this.setState(() => ({desiredGender: desiredGender}))
    };
    changeAgeRange = (event, newValue) => {
        this.setState(() => ({ageStart: newValue[0], ageEnd: newValue[1]}))
    }
    
    render() {
        return (<Grid container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      spacing={5}>
            <Grid item>
                <FormControl component="fieldset">
                    <Typography gutterBottom>
                        Select your gender
                    </Typography>
                    <RadioGroup aria-label="gender" name="ownGender" value={this.state.ownGender} onChange={this.changeOwnGender}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl component="fieldset">
                    <Typography gutterBottom>
                        Select what you're looking for
                    </Typography>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox checked={this.state.desiredGender.includes('female')} onChange={this.changeDesiredGender} name="female"/>}
                            label="Female"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={this.state.desiredGender.includes('male')} onChange={this.changeDesiredGender} name="male"/>}
                            label="Male"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={this.state.desiredGender.includes('other')} onChange={this.changeDesiredGender} name="other"/>}
                            label="Other"
                        />
                    </FormGroup>
                </FormControl>
            </Grid>
            <Grid item>
                <div id="ageRoot">
                    <Typography id="range-slider" gutterBottom>
                        Age range
                    </Typography>
                    <Slider
                        id="ageSlider"
                        /*className={useStyles().slider}*/
                        value={[this.state.ageStart, this.state.ageEnd]}
                        onChange={this.changeAgeRange}
                        aria-labelledby="range-slider"
                        getAriaValueText={valuetext}
                        valueLabelDisplay="on"
                        min={18}
                        max={65}
                        marks={marks}
                    />
                </div>
            </Grid>
            <Grid item id="select">
                <MunicipalitySelect/>
            </Grid>
            <Button onClick={this.getMatches}> Get the number </Button>
            <div>
                <h1>{this.props.matches}</h1>
            </div>
        </Grid>)
    }
}

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

export default connect(state => state.befolkning,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Form);


