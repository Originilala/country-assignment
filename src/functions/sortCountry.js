const sortCountry = (sortArr) => {
    return sortArr.sort((a, b) => {
        return a.population - b.population;
    })
}

export default sortCountry;