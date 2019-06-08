const API = 'https://api.myjson.com/bins/g5jbq';

export function getBookingData() {
    return fetch(API);
}