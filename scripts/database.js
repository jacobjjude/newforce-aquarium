/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 3,
            image: "/images/1.jpg"
        },
        {
            name: 'Steph',
            food: 'plankton',
            size: 5,
            image: "/images/2.jpg"
        },
        {
            name: 'Nathan',
            food: 'algae',
            size: 9,
            image: "/images/3.jpg"
        },
        {
            name: 'Jacob',
            food: 'crustaceans',
            size: 10,
            image: "/images/4.jpg"
        },
        {
             name: 'Butts McGee',
             food: 'Pizza',
             size: 15,
             image: "/images/5.jpg"
        },
        {
            name: 'The Devil',
            food: 'Souls of the damned',
            size: 666,
            image: "/images/6.jpg"
        }
    ]
}

console.log(database);

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

