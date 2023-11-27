export function convertDateFormat(dateString: string): string {
  const parts = dateString.split("-");
  /*   const newDate = `${parts[2]}/${parts[1]}/${parts[0]}`; */
  const newDate = `${parts[0]}`;
  return newDate;
}
