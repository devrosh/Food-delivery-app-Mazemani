export const categoryData = [
  {name: 'Momos', image: require('../assets/images/momo.jpg'), id: '0'},
  {name: 'Biryani', image: require('../assets/images/biryani.jpg'), id: '1'},
  {name: 'Burger', image: require('../assets/images/burger.jpg'), id: '2'},
  {name: 'Curry', image: require('../assets/images/curry.jpg'), id: '3'},
  {name: 'Sandwich', image: require('../assets/images/sandwich.jpg'), id: '4'},
  {name: 'Chowmein', image: require('../assets/images/chowmein.jpg'), id: '5'},
];

export const restaurantData = [
  {
    restaurantName: 'Burger House',
    farAway: 21.2,
    businessAddress: 'Devkota Sadak,Baneshwor-10',
    images:
      'https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465_1280.jpg',
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: {lat: -26.1888612, lng: 28.246325},
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: 'Momos,Noodles,Sandiwiches...',
    productData: [
      {
        name: 'Momos',
        price: 200,
        image:
          'https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465_1280.jpg',
      },
      {
        name: 'Chowmein',
        price: 250,
        image:
          'https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465_1280.jpg',
      },
      {
        name: 'Sandwich',
        price: 170,
        image:
          'https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465_1280.jpg',
      },
    ],
    id: 0,
  },
  {
    restaurantName: 'KKFC',
    farAway: 12.7,
    businessAddress: '11-Maitidevi,kathmandu',
    images:
      'https://cdn.pixabay.com/photo/2016/03/05/21/38/batter-1239023_1280.jpg',
    averageReview: 4.3,
    numberOfReview: 306,
    coordinates: {lat: -26.1891648, lng: 28.2441808},
    discount: 30,
    deliveryTime: 20,
    collectTime: 10,
    foodType: 'fried Chicken,Chicken wings...',
    productData: [
      {
        name: 'Fried Chicken',
        price: 390,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
      },
      {
        name: 'Big Mac',
        price: 180,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
      },
      {
        name: 'Chicken Burger',
        price: 270,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
      },
    ],
    id: 1,
  },
  {
    restaurantName: 'Trisara',
    farAway: 5,
    businessAddress: '12 lazimpath,kathmandu',
    images:
      'https://cdn.pixabay.com/photo/2016/07/22/05/07/delicious-1534207_1280.jpg',
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: {lat: -26.1886781, lng: 28.244879},
    discount: 12,
    deliveryTime: 15,
    collectTime: 25,
    foodType: 'Curry,Pizzas,Thakali food',
    productData: [
      {
        name: 'Thakali set',
        price: 450,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
      },
      {
        name: 'Momos',
        price: 250,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
      },
      {
        name: 'Biryani',
        price: 470,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
      },
    ],
    id: 2,
  },
  {
    restaurantName: 'Peros Pizza',
    farAway: 12.7,
    businessAddress: 'New Baneshwor 10',
    images:
      'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: {lat: -26.1888612, lng: 28.246325},
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: 'Pizzas,Spaghheti, Pastas...',
    productData: [
      {
        name: 'Italian Pizza',
        price: 400,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
      },
      {
        name: 'Margherita Pizaa',
        price: 450,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
      },
      {
        name: 'Pineapple Pizza',
        price: 470,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
      },
    ],
    id: 3,
  },
];

export const productsData = [
  {
    name: 'Fried Chicken',
    price: 390,
    image:
      'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    id: 0,
  },
  {
    name: 'Big  Mac',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1548946522-4a313e8972a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1718&q=80',
    id: 1,
  },
  {
    name: 'Momos',
    price: 270,
    image:
      'https://images.unsplash.com/photo-1647999019630-dabe1a837693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    id: 2,
  },
];
export const menuData = [
  {title: 'BUFF', special: false, key: 0},
  {title: 'CHICKEN', special: false, key: 1},
  {title: 'VEGGIE BURGER', special: false, key: 2},
  {title: 'FRIES', special: false, key: 3},
  {title: 'SALADS', special: false, key: 4},
  {title: 'HAPPY MEALS', special: false, key: 5},
  {title: 'PASTRY BOX', special: false, key: 6},
  {title: 'MILKSHAKES', special: false, key: 7},
  {title: 'COLD DRINKS', special: false, key: 8},
  {title: 'DESSERTS', special: false, key: 9},
  {title: 'HOT DRINKS', special: false, key: 10},
];

export const specialData = [
  {title: 'LIMITED OFFER', key: 0},
  {title: 'GO CHILLI', key: 1},
  {title: 'GO CHEESE', key: 2},
  {title: 'CHICKEN DELUXE PROMO', key: 3},
];

export const menu = [
  {key: 1, title: 'BUFFF'},
  {key: 2, title: 'CHICKEN'},
  {key: 3, title: 'VEG BURGER'},
  {key: 4, title: 'PASTRY BOX'},
  {key: 5, title: 'Happy Meals'},
  {key: 6, title: 'Fries'},
  {key: 7, title: 'Side Dishes'},
  {key: 8, title: 'Milkshakes'},
];

export const menuDetailedData = [
  {
    meal: 'Big Mac',
    price: 250,
    image:
      'https://images.pexels.com/photos/12325123/pexels-photo-12325123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    details: 'McFeast features two 100% fresh buff burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 10},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 11},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 12},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 13},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 14},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 15},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 16},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 18},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 21},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 22},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 23},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 24},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 26},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 30},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 31},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 32},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 33},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 34},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 35},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 36},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 38},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41},
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 0,
  },

  {
    meal: 'Hand cut chips',
    price: 290,
    image:
      'https://cdn.pixabay.com/photo/2020/02/22/19/09/arrowhead-4871421_1280.jpg',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],
    minimum_quatity: [2, 1, 2, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 1,
  },

  {
    meal: 'Chicken Burger',
    price: 250,
    image:
      'https://cdn.pixabay.com/photo/2020/03/29/22/42/burger-4982550_1280.jpg',
    details: 'Huge juicy chicken burger with exquiste taste and flavours',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 2,
  },

  {
    meal: 'Big Mac',
    price: 300,
    image:
      'https://images.pexels.com/photos/12325123/pexels-photo-12325123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 3,
  },

  {
    meal: 'Hand cut chips',
    price: 290,
    image:
      'https://images.pexels.com/photos/568805/pexels-photo-568805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',

    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],

    preferenceData: [
      [
        {name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0},
        {name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1},
        {name: 'BBQ Dip', price: 11.99, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],

      [
        {name: 'debonairs sauce', price: 8.9, checked: false, id: 0},
        {name: 'BBQ Sauce', price: 8.9, checked: false, id: 1},
        {name: 'Tikka Sauce', price: 11.9, checked: false, id: 2},
      ],

      [
        {name: 'Small Coke', price: 8.9, checked: false, id: 0},
        {name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1},
        {name: 'Small Sprite', price: 11.9, checked: false, id: 2},
        {name: 'Small Coke Zero', price: 3.95, checked: false, id: 3},
        {name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4},
        {name: 'Small Apple Juice', price: 10.95, checked: false, id: 5},
        {name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6},
        {name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7},
        {name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8},
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4,
  },
];
