export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: "dishes" | "sides" | "drinks" | "soups";
  description?: string;
  tag?: string;
  popular?: boolean;
}

export const RESTAURANT_INFO = {
  name: "Ezeji Local Kitchen and Grills",
  shortName: "Ezeji Local Kitchen",
  tagline: "Experience the Taste. Embrace the Culture.",
  rating: 4.4,
  reviewCount: 186,
  phone: "08081111636",
  phoneFormatted: "+234 808 111 1636",
  whatsappUrl: "https://wa.me/2348081111636",
  address: "GC Autocare Plaza, Opposite Skyvilla Hotel, Trans Ekulu (before Nowas Junction), Enugu, Nigeria",
  hours: {
    weekday: "Monday – Saturday: 8:00 AM – 12:00 AM (Midnight)",
    sunday: "Sunday: 9:00 AM – 12:00 AM (Midnight)",
  },
  payment: {
    bank: "Moniepoint MFB",
    accountNumber: "5923000307",
    accountName: "Val Link Native Food",
  },
};

export const MENU_ITEMS: MenuItem[] = [
  // Signature Local Dishes
  {
    id: "m-1",
    name: "Roasted Yam & Ugba",
    price: 5400,
    category: "dishes",
    description: "Tender fire-roasted yam slices served with rich, seasoned ugba, palm oil & pepper sauce.",
    popular: true,
    tag: "Customer Favorite",
  },
  {
    id: "m-2",
    name: "Full Yam Ugba & Fish",
    price: 15000,
    category: "dishes",
    description: "Generous royal platter of roasted yam, lavish seasoned ugba, and a whole grilled fish.",
    popular: true,
    tag: "Platter Special",
  },
  {
    id: "m-3",
    name: "Abacha & Fish",
    price: 5400,
    category: "dishes",
    description: "Traditional African salad with shredded cassava, kpomo, garden eggs, utazi, and grilled fish.",
    popular: true,
  },
  {
    id: "m-4",
    name: "Achicha & Fish / Beef",
    price: 5400,
    category: "dishes",
    description: "Authentic dried cocoyam delicacy prepared with pigeon peas (fio-fio), scent leaf, and your choice of fish or beef.",
  },
  {
    id: "m-5",
    name: "Cow Leg Nkwobi",
    price: 5000,
    category: "dishes",
    description: "Spicy, savory cow foot chunks slow-simmered in aromatic Igbo potash palm oil sauce and utazi garnish.",
    popular: true,
    tag: "Signature",
  },
  {
    id: "m-6",
    name: "Cow Head Nkwobi",
    price: 3500,
    category: "dishes",
    description: "Tender diced cow head parts in rich spicy native sauce with onions and fresh herbs.",
  },
  {
    id: "m-7",
    name: "Ugba & Kpomo",
    price: 4000,
    category: "dishes",
    description: "Fermented oil bean seed salad tossed with soft, spicy cow skin (kpomo) and fresh seasonings.",
  },
  {
    id: "m-8",
    name: "Ugba & Fish",
    price: 4000,
    category: "dishes",
    description: "Flavor-packed seasoned ugba garnished with succulent fried or grilled fish.",
  },
  {
    id: "m-9",
    name: "Full Fish",
    price: 3000,
    category: "dishes",
    description: "Whole freshly fried or seasoned fish served hot with pepper sauce dip.",
  },
  {
    id: "m-10",
    name: "Grilled Chicken",
    price: 4500,
    category: "dishes",
    description: "Flame-grilled chicken quarter with local herb marinade and fiery suya/pepper sauce.",
    popular: true,
  },
  {
    id: "m-11",
    name: "Grilled Catfish",
    price: 4500,
    category: "dishes",
    description: "Succulent, spicy grilled point-and-kill catfish spiced with native grill seasonings.",
    popular: true,
  },
  {
    id: "m-12",
    name: "Goat Meat Pepper Soup",
    price: 3500,
    category: "dishes",
    description: "Hot, aromatic broth with tender goat meat infused with native uziza, uda, and spices.",
    popular: true,
  },
  {
    id: "m-13",
    name: "Peppered Beef",
    price: 3500,
    category: "dishes",
    description: "Fried tender beef bites coated in caramelized pepper, onion, and habanero reduction.",
  },
  {
    id: "m-14",
    name: "Pork Meat",
    price: 1000,
    category: "dishes",
    description: "Crispy, savory seasoned pork cutlets seasoned with local spices.",
  },
  {
    id: "m-15",
    name: "Snail Delicacy",
    price: 5000,
    category: "dishes",
    description: "Jumbo forest snails sautéed in spicy peppered sauce with sliced onions and peppers.",
    tag: "Delicacy",
  },
  // Rice & Native Soups
  {
    id: "m-16",
    name: "Eze Ji Jollof Rice & Fish/Beef",
    price: 4900,
    category: "dishes",
    description: "Smoky firewood-style Nigerian jollof rice served with fried plantain and fish or beef.",
    popular: true,
  },
  {
    id: "m-17",
    name: "Tomato Stew / White Rice & Fish/Beef",
    price: 4900,
    category: "dishes",
    description: "Steaming white rice paired with rich native tomato stew, plantain, and fish/beef.",
  },
  {
    id: "m-18",
    name: "White Rice & Ofe Akwu & Fish/Beef",
    price: 4900,
    category: "dishes",
    description: "Fragrant white rice served with authentic Igbo palm nut soup (Banga/Ofe Akwu), scent leaves, and protein.",
    popular: true,
  },
  {
    id: "m-19",
    name: "Egusi Soup",
    price: 4900,
    category: "soups",
    description: "Rich melon seed soup prepared with bitterleaf/ugwu, stockfish, and meat/fish with your swallow choice.",
  },
  {
    id: "m-20",
    name: "Onugbo Soup (Bitterleaf Soup)",
    price: 4900,
    category: "soups",
    description: "Authentic Anambra-style bitterleaf soup with cocoyam thickener and assorted proteins.",
  },
  {
    id: "m-21",
    name: "Oha Soup",
    price: 4900,
    category: "soups",
    description: "Silky, delicious oha leaf soup prepared with ogiri, cocoyam thickener, and rich cuts of meat.",
    popular: true,
  },
  // Side Dishes & Grills
  {
    id: "m-22",
    name: "Shawarma",
    price: 4000,
    category: "sides",
    description: "Generously loaded double-sausage wrap with spicy chicken/beef, crunchy veggies, and special sauce.",
  },
  {
    id: "m-23",
    name: "Barbecue Platter",
    price: 20000,
    category: "sides",
    description: "Generous party grill platter loaded with grilled fish, chicken, roasted yam, corn, and spicy pepper dips.",
    tag: "Group Favorite",
  },
  {
    id: "m-24",
    name: "Big Size Barbecue Platter",
    price: 25000,
    category: "sides",
    description: "Mega royal feast platter with assorted grilled meats, whole catfish, roasted yam, plantain, corn, and ugba sides.",
    tag: "Feast Platter",
  },
  // Special Drinks & Palm Wine
  {
    id: "m-25",
    name: "Ezeji Fresh Tiger Nut Drink (Bottle)",
    price: 1500,
    category: "drinks",
    description: "Naturally prepared, rich and creamy Tiger Nut drink with dates and coconut. Drink Healthy, Live Healthy.",
    popular: true,
    tag: "House Special",
  },
  {
    id: "m-26",
    name: "Palmwine (Small Cup)",
    price: 2000,
    category: "drinks",
    description: "Sweet, fresh tapped natural palm wine served chilled in a traditional cup.",
  },
  {
    id: "m-27",
    name: "Palmwine (Small Jug)",
    price: 6000,
    category: "drinks",
    description: "Freshly tapped unadulterated palm wine, ideal for 2-3 people sharing.",
    popular: true,
  },
  {
    id: "m-28",
    name: "Palmwine (Big Jug)",
    price: 8000,
    category: "drinks",
    description: "Big sharing jug of top-grade fresh palm wine, perfect for gatherings & live music sessions.",
    tag: "Best Value",
  },
  {
    id: "m-29",
    name: "Chilled Beers & Soft Drinks",
    price: 1000,
    category: "drinks",
    description: "Ice-cold premium beers (Heineken, Trophy, Hero, Star, Guinness, etc.) and assorted malt & sodas.",
  },
];

export const WEEKEND_DELICACIES = [
  { name: "Roasted Yam & Ugba", desc: "Fresh off the hot coal grill with palm oil pepper dip" },
  { name: "Abacha & Fish", desc: "Enugu-style African salad loaded with utazi & kpomo" },
  { name: "Achicha & Fish/Beef", desc: "Authentic fio-fio (pigeon peas) & dried cocoyam" },
  { name: "Porridge Yam", desc: "Soft, savory native yam porridge infused with dried fish & vegetables" },
  { name: "Goat Meat Pepper Soup", desc: "Piping hot aromatic broth with tender local goat cuts" },
  { name: "Catfish Pepper Soup", desc: "Fresh 'point-and-kill' catfish soup prepared on order" },
  { name: "Bush Meat (Grasscutter)", desc: "Exotic, succulent seasoned wild game cuts" },
  { name: "Bush Rat & Anu Nchi", desc: "Smoked and simmered in authentic native spice sauce" },
  { name: "Jumbo Forest Snail", desc: "Peppered large native snails with sliced onions" },
  { name: "Assorted Local Delicacies", desc: "Nkwobi, isi ewu, kpomo chops, and fresh palm wine" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Chinedu Okonkwo",
    role: "Enugu Resident & Food Enthusiast",
    rating: 5,
    comment: "The roasted yam with ugba and fresh palm wine at Ezeji is unbeatable in Trans Ekulu! The weekend live band adds such an amazing vibe. Very generous portions for the price.",
  },
  {
    id: 2,
    name: "Amaka Nwachukwu",
    role: "Foodie & Event Planner",
    rating: 5,
    comment: "Their point-and-kill catfish pepper soup and Cow Leg Nkwobi are always on point. Also in love with the bottled Ezeji Tiger Nut drink — so creamy and healthy!",
  },
  {
    id: 3,
    name: "Emeka Eze",
    role: "Regular Customer",
    rating: 4.5,
    comment: "Best spot to chill before Nowas junction. Fast outdoor service, great barbecue platters, and honest staff. Plus the Moniepoint transfer checkout makes paying effortless.",
  },
];