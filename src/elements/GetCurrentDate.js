import React from 'react';

export function GetCurrentDate(separator='.') {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;

    return `${date}${separator}${month < 10 ? `0 ${month}` : `${month}`}`
}