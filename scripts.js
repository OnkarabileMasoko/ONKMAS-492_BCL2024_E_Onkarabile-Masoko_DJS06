// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// 1. forEach Basics
console.log("1. forEach Basics:");
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(name));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`)); // Fixed template literal syntax

// 2. Uppercase Transformation
console.log("\n2. Uppercase Transformation:");
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// 3. Name Lengths
console.log("\n3. Name Lengths:");
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 4. Sorting
console.log("\n4. Sorting:");
const sortedProvinces = provinces.slice().sort(); // Slice to avoid mutating the original array
console.log(sortedProvinces);

// 5. Filtering Cape
console.log("\n5. Filtering Cape:");
const noCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(`Count of remaining provinces: ${noCapeProvinces.length}`); // Fixed template literal syntax

// 6. Finding 'S'
console.log("\n6. Finding 'S':");
const namesWithS = names.map(name => name.toLowerCase().includes('s'));
console.log(namesWithS);
