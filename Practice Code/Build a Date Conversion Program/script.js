const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY(date){
    const formatedDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
    return `Formatted Date (MM/DD/YYYY): ${formatedDate}`;
}

function formatDateLong(date){
    const formatedDate = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    })

    return `Formatted Date (Month Day, Year): ${formatedDate}`;
}

console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));