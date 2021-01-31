
import React from 'react';
import Select from 'react-select'
import municipalityData from '../staticData/MunicipalityData.json'

const options = [municipalityData][0].map((data) => {
    console.log(data)
    return {value: data.MunicipalityId, label: data.Municipality}
})

export default function MultipleSelect() {
    return (
        <Select options={options}
                closeMenuOnSelect={false}
                isMulti/>
    );
}

