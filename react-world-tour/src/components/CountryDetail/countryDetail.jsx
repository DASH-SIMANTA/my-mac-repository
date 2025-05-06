import CountryData from "../CountryData/CountryData";


const CountryDetail = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            <CountryData country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            ></CountryData>
        </div>
    );
};

export default CountryDetail;