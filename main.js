// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const userInactive = users.filter(user => user.isActive)
printKata(1, userInactive)

const userEmail = users.map(user => user.email)
printKata(2, userEmail)

const ovation = users.some(user => user.company === "ovation")
printKata(3, ovation)

const userAge = users.find(user => user.age > "38")
printKata(4, userAge)

const userActive = users.filter(user => user.isActive)
                        .find(user => user.age > "38")
printKata(5, userActive)

const userCompany = users.filter(user => user.company === "ZENCO")
                         .map(user => user.balance)
printKata(6, userCompany)

const fugiat = users.filter(user => user.tags.includes('fugiat'))
                    .map(user => user.age)
printKata(7, fugiat)