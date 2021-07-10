import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import React from "react";

function CountrySelector({ value, handleOnchange, countries }) {
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="country-selector" shrink>
          Quốc gia
        </InputLabel>
        <NativeSelect
          value={value}
          onChange={handleOnchange}
          inputProps={{
            name: "country",
            id: "country-selector",
          }}
        >
          {countries.map((country, index) => {
            return (
              <option key={index} value={country.ISO2.toLowerCase()}>
                {country.Country}
              </option>
            );
          })}
        </NativeSelect>
        <FormHelperText>Lựa chọn quốc gia</FormHelperText>
      </FormControl>
    </div>
  );
}

export default CountrySelector;
