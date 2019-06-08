export const mapData = (data) => {
    return {
        cities: mapCities(data),
        localities: mapLocalities(data),
        slots: mapSlots(data)
    };
};

const mapCities = (data) => {
    return data.map((obj) => obj.city);
};

const mapLocalities = (data) => {
    return data.map((obj) => obj.locality);
};

const mapSlots = (data) => {
    let slots = [];
    data.forEach(element => {
        element.available_slots.forEach(slot => {
            if (slots.indexOf(slot) === -1) {
                slots.push(slot);
            }
        });
    });
    return slots;
};