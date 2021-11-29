export function formatDate(date, format) {
    const getMountText = date.getMonth() + 1;
    let mount = "";

    if (getMountText == 1) {
        mount += "January";
    } else if (getMountText === 2) {
        mount= "February ";
    } else if (getMountText === 3) {
        mount= "March";
    } else if (getMountText === 4) {
        mount= "April";
    } else if (getMountText === 5) {
        mount= "May";
    } else if (getMountText === 6) {
        mount= "June";
    } else if (getMountText === 7) {
        mount= "July";
    } else if (getMountText === 8) {
        mount= "August";
    } else if (getMountText === 9) {
        mount= "September ";
    } else if (getMountText === 10) {
        mount= "October";
    } else if (getMountText === 11) {
        mount ="November"
    } else if (getMountText === 12) {
        mount= "Desember";
    }

    const map = {
        // mm: date.getDate() + 1,
        mm: mount,
        dd: date.getDate(),
        yy: date.getFullYear().toString(),
    }

    return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
}
