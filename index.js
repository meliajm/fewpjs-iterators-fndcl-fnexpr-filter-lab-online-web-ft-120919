function findMatching(drivers, name) {
    // let nameLower = name.toLowerCase()
    return drivers.filter( n => {
        return n === name || n === name.toLowerCase() 
    })
}

function fuzzyMatch(drivers, search) {
    return drivers.filter (n => {
        return n.slice(0,2) === search
    }
)
}

function matchName(drivers, name) {
    return drivers.filter ( n => {
        return n.name === name
    })
}



