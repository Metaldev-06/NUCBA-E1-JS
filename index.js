const Pizzas = [
  {
    id: 1,
    name: "napolitana",
    price: 1500,
    ingredients: [
      "Queso Mozzarella",
      "Tomatitos Cherry",
      "Albahaca",
      "Orégano",
    ],
  },
  {
    id: 2,
    name: "4 quesos",
    price: 500,
    ingredients: [
      "Salsa de tomate",
      "Queso Fontina",
      "Queso Mozzarela",
      "Queso Parmigiano Reggiano",
      "Queso Gorgonzola",
      "Orégano",
      "Pimienta",
    ],
  },
  {
    id: 3,
    name: "Pizza hawaiana",
    price: 10,
    ingredients: [
      "Salsa de tomate",
      "Piña",
      "Jamón cocido",
      "Mozzarella rallado",
      "Orégano",
    ],
  },
  {
    id: 4,
    name: "Pizza de chorizo",
    price: 800,
    ingredients: [
      "Salsa de tomate",
      "chorizo",
      "Queso Mozzarela",
      "Perejil",
      "Orégano",
    ],
  },
  {
    id: 5,
    name: "Pizza de jamón y champiñones",
    price: 1500,
    ingredients: [
      "Salsa de tomate",
      "Jamón cocido",
      "Champiñones",
      "Queso Mozzarela",
      "Orégano",
    ],
  },
  {
    id: 6,
    name: "Pizza de jamón y morrones",
    price: 1000,
    ingredients: [
      "Salsa de tomate",
      "Jamón cocido",
      "Morrones",
      "Queso Mozzarela",
      "Orégano",
    ],
  },
];

console.error("--------------------A------------------------");

Pizzas.forEach((pizza) => {
  if (!(pizza.id % 2 == 0)) {
    console.log(`El id de la pizza ${pizza.name} es impar`);
  }
});

console.error("--------------------B------------------------");

Pizzas.forEach((pizza) => {
  if (pizza.price < 600) {
    console.log(
      `La pizza ${pizza.name} tiene un precio menor a $600, su precio es de $${pizza.price}`
    );
  }
});

console.error("--------------------C------------------------");

Pizzas.forEach((pizza) => {
  console.log(`La pizza ${pizza.name} tiene un precio de $${pizza.price}`);
});

console.error("--------------------D------------------------");

Pizzas.forEach((pizza) => {
  console.warn(`La pizza ${pizza.name} tiene los siguientes ingredientes:`);
  pizza.ingredients.forEach((ingrediente) => {
    console.log(ingrediente);
  });
});
