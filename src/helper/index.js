export const capitalize = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
};


export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}