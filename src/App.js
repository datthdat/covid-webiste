import React, { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('')
  const [report, setReport] = useState([])


  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleOnchange = (e) => {
    setSelectedCountryId(e.target.value)
  };

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );

      // call api
      getReportByCountry(Slug).then((res) => {
        // delete the last item in array res.data
        res.data.pop();
        setReport(res.data)
      }
      )
    }
  }, [countries, selectedCountryId])


  // new branch
  // git add branch Dev

  return (
    <div>
      <CountrySelector countries={countries} handleOnchange={handleOnchange} />
      <Highlight report={report} />
      <Summary report={report} />
    </div>
  );
}

export default App;
