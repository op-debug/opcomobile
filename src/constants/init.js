const server = {
    url:'http://103.187.146.193:3000',
}

const getAcronym = (string) => {
    let arrayString = string.toUpperCase().split(' ');
    let acronym='';

    for (let i = 0; i < arrayString.length; i++) {
        acronym += arrayString[i].charAt(0);
    }
    return acronym;
}


export {
    server,
    getAcronym
}