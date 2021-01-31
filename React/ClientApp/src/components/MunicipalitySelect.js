import React from 'react';
import Select from 'react-select'
import municipalityData from '../staticData/MunicipalityData.json'
import chroma from 'chroma-js';
import {red, pink} from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";

const customStyles = {
    color: pink[900],
    option: (styles, {isDisabled, isFocused, isSelected}) => {
        const color = chroma(pink[500]);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected
                    ? color.alpha(1).css()
                    : isFocused
                        ? color.alpha(0.4).css()
                        : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : color.alpha(1).css(),
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor:
                    !isDisabled && (isSelected ? color.alpha(1).css() : color.alpha(0.8).css()),
            },
        };
    },
    control: styles => ({...styles, backgroundColor: 'white'}),

    multiValue: (styles) => {
        const color = chroma(pink[500]);
        return {
            ...styles,
            backgroundColor: color.alpha(0.3).css(),
        };
    },
    multiValueLabel: (styles) => {
        const color = chroma(pink[500]);
        return {
            ...styles,
            color: color.alpha(1).css(),
        };
    },
    multiValueRemove: (styles) => ({
        ...styles,
        color: chroma(pink[500]),
        ':hover': {
            backgroundColor: chroma(pink[500]),
            color: 'white',
        },
    }),
}

const options = [municipalityData][0].map((data) => {
    console.log(data)
    return {value: data.MunicipalityId, label: data.Municipality}
})

export default function MultipleSelect() {
    return (
        <div>
            <Typography gutterBottom>
                Select the municipalities youre looking in
            </Typography><Select options={options}
                                 closeMenuOnSelect={false}
                                 isMulti
                                 styles={customStyles}
        /></div>
    );
}

