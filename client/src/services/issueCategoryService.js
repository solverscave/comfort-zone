export const category = [
  { name: "Problems", _id: "Problems" },
  { name: "Suggestions", _id: "Suggestions" },
  { name: "Emergencies", _id: "Emergencies" },
];

export function getCategory() {
  return category.filter((c) => c);
}
