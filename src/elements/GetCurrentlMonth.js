export function GetCurrentMonth() {
    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    let nameMonth;
    let space = " ";

    if (month == 1){
        nameMonth = "Январь"
    } else if (month == 2) {
        nameMonth = "Февраль"
    } else if (month == 3) {
        nameMonth = "Март"
    } else if (month == 4) {
        nameMonth = "Апрель"
    } else if (month == 5) {
        nameMonth = "Май"
    } else if (month == 6) {
        nameMonth = "Июнь"
    } else if (month == 7) {
        nameMonth = "Июль"
    } else if (month == 8) {
        nameMonth = "Август"
    } else if (month == 9) {
        nameMonth = "Сентябрь"
    } else if (month == 10) {
        nameMonth = "Октябрь"
    } else if (month == 11) {
        nameMonth = "Ноябрь"
    } else if (month == 12) {
        nameMonth = "Декабрь"
    }

    return `${nameMonth}${space}${year}`
}