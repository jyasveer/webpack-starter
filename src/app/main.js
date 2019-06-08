import { getBookingData } from './utils/api'
import { mapData } from './utils/map';

let cities = [];
let localities = [];
let slots = [];

const getData = () => {
    getBookingData()
    .then(response => response.json())
    .then(data => {
        console.log(data)
        buildData(data);
    });
};

const buildData = (data) => {
    const mappedData = mapData(data);
    cities = mappedData.cities;
    localities = mappedData.localities;
    slots = mappedData.slots;
    console.log(cities, localities, slots);
    populateDropDowns(mappedData);
};

const populateDropDowns = (data) => {
    const citySelectElem = document.getElementById('city-filter');
    cities.forEach(city => {
        const option = new Option();
        option.value = city;
        option.text = city;
        debugger;
        citySelectElem.append(option);
    });
};

export const App = () => {
    getData();
};