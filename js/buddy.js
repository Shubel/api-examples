const loadBuddies = () => {
    fetch("https://randomuser.me/api/?results=5")
        .then(res => res.json())
        .then(data => displayBuddies(data))
};
loadBuddies();

const displayBuddies = buddy => {
    // console.log(buddy);
    const buddies = buddy.results;
    // console.log(buddies);
    const buddiesID = document.getElementById("buddies");
    for (const buddy of buddies) {
        // console.log(buddy)
        // console.log(buddy.name.title)
        // console.log(buddy.name.first)
        // console.log(buddy.name.last)
        // console.log(buddy.email)
        const paragraph = document.createElement("p");
        paragraph.innerText = ` Name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} Email : ${buddy.email} `
        buddiesID.appendChild(paragraph);
    };
};