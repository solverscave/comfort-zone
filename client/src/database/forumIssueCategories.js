export const issueCategories = [
  { categoryID: "1", name: "Problems" },
  { categoryID: "2", name: "Suggestions" },
  { categoryID: "3", name: "Emergencies" }
];

export function getIssueCategories() {
  return issueCategories.filter(i => i);
}
