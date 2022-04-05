const items = [
  { id: 1, name: "zakaria moshi", test1: 40, test2: 50, UE: 40 },
  { id: 2, name: "andrew moshi", test1: 70, test2: 50, UE: 80 },
  { id: 3, name: "sia moshi", test1: 80, test2: 80, UE: 90 },
  { id: 4, name: "monica moshi", test1: 30, test2: 40, UE: 70 },
];

console.log(items);

// function compare(a, b) {
//   if (a.name < b.name) {
//     return -1;
//   }
//   if (a.name > b.name) {
//     return 1;
//   }
//   return 0;
// }

// items.sort(compare);
items.sort((a, b) => a.name.localeCompare(b.name));

console.log(items);
