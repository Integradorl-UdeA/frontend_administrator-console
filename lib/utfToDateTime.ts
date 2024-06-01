const date = '2024-05-24T09:06:17.000Z'
export const utfToDateTime = (utfDate: string) => {
    const [datePart, timePart] = utfDate.split('T')
    const hhmm = timePart.substring(0,5)
    return [datePart, hhmm]
}

utfToDateTime(date)