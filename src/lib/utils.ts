export const getCurrentDate = () => {
  const today = new Date()
  const options = {
    weekday: "short" as const,
    year: "numeric" as const,
    month: "short" as const,
    day: "numeric" as const,
  };
  const localDate = today.toLocaleDateString("es-419", options)
  const dateFirstUpper = localDate.replace(localDate[0], localDate[0].toLocaleUpperCase())
  return dateFirstUpper
}

export const convertTimeToHours = (hours: string) => {
  const [hourPart, minutePart] = hours.split(':').map(Number)
  const totalHours = hourPart + (minutePart / 60)
  return totalHours
}