// Meal lists now include the meal name and a corresponding link to the recipe page
const breakfasts = [
  { name: "one pan huevos rancheros", link: "https://github.com/jeremyraby/meal_plan_generator/blob/main/huevosRancheros.pdf" },
  { name: "crockpot sausage & cheese casserole", link: "https://github.com/jeremyraby/meal_plan_generator/blob/main/sausageCheeseBreakfastCasserole.pdf" },
  { name: "Spicy Breakfast Strata", link: "https://github.com/jeremyraby/meal_plan_generator/blob/main/spicyBreakfastStrata.pdf" },
  // Add more breakfasts with corresponding links
];

const lunches = [
  { name: "chicken ramen stir-fry", link: "https://github.com/jeremyraby/meal_plan_generator/blob/main/chickenRamenStirFry.pdf" },
  { name: "honey garlic chicken fried rice", link: "https://github.com/jeremyraby/meal_plan_generator/blob/main/honeyGarlicChickenFriedRice.pdf" },
  // Add more lunches with corresponding links
];

const dinners = [
  { name: "beef broccoli ramen stir-fry", link: "https://github.com/jeremyraby/meal_plan_generator/blob/main/beefBroccoliRamenStirFry.pdf" },
  { name: "chicken with creamy cilantro lime sauce", link: "https://github.com/jeremyraby/meal_plan_generator/blob/main/chickenCreamyCilantroLimeSauce.pdf" },
  { name: "chicken parmesan pasta bake", link: "https://github.com/jeremyraby/meal_plan_generator/blob/main/chickenParmesanPastaBake.pdf" },
  { name: "Sesame Garlic Ramen Stir-Fry", link: "https://github.com/jeremyraby/meal_plan_generator/blob/main/sesameGarlicRamenStirFry.pdf" },
  { name: "Chicken with Creamy Cilantro Lime Sauce", link: "https://github.com/jeremyraby/meal_plan_generator/blob/main/chickenCreamyCilantroLimeSauce.pdf" },
  { name: "Tex Mex Stuffed Zucchini", link: "https://github.com/jeremyraby/meal_plan_generator/blob/main/texMexStuffedZucchini.pdf" },
  { name: "Pesto Stuffed Shells", link: "https://github.com/jeremyraby/meal_plan_generator/blob/main/Pesto%20Stuffed%20Shells%20Meal%20Prep%20-%20Budge.md" },
  { name: "Skillet Meatballs with Marina & Broccoli", link: "hhttps://github.com/jeremyraby/meal_plan_generator/blob/main/Sunday%20Meal%20Prep_Skillet%20Meatballs%20and%20Marinara.md" },
  { name: "Sweet Potato Tacos", link: "https://github.com/jeremyraby/meal_plan_generator/blob/main/Sweet%20Potato%20Taco%20Meal%20Prep%20-%20Budget%20B.md" },
  // Add more dinners with corresponding links
];

// Helper function to get a random item from a list
function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Event listeners for buttons
document.getElementById('yesVariety').addEventListener('click', () => generateMealPlan(2));
document.getElementById('noVariety').addEventListener('click', () => generateMealPlan(1));

// Generate meal plan function
function generateMealPlan(numberOfMeals) {
  let mealOutput = '';
  
  let breakfast1 = getRandomItem(breakfasts);
  let lunch1 = getRandomItem(lunches);
  let dinner1 = getRandomItem(dinners);

  if (numberOfMeals === 2) {
    // Ensure unique selections for second meal if variety is chosen
    let breakfast2 = getRandomItem(breakfasts);
    let lunch2 = getRandomItem(lunches);
    let dinner2 = getRandomItem(dinners);

    if (breakfast1.name === breakfast2.name) breakfast2 = breakfasts[breakfasts.length - 1];
    if (lunch1.name === lunch2.name) lunch2 = lunches[lunches.length - 1];
    if (dinner1.name === dinner2.name) dinner2 = dinners[dinners.length - 1];

    mealOutput = `
      <p>Okay, this week you're gonna have <a href="${breakfast1.link}" target="_blank">${breakfast1.name}</a> for breakfast, 
      <a href="${lunch1.link}" target="_blank">${lunch1.name}</a> for lunch, and 
      <a href="${dinner1.link}" target="_blank">${dinner1.name}</a> for dinner.</p>
      
      <p>You will also have <a href="${breakfast2.link}" target="_blank">${breakfast2.name}</a> for breakfast, 
      <a href="${lunch2.link}" target="_blank">${lunch2.name}</a> for lunch, and 
      <a href="${dinner2.link}" target="_blank">${dinner2.name}</a> for dinner.</p>
    `;
  } else {
    mealOutput = `
      <p>Okay, this week you're gonna have <a href="${breakfast1.link}" target="_blank">${breakfast1.name}</a> for breakfast, 
      <a href="${lunch1.link}" target="_blank">${lunch1.name}</a> for lunch, and 
      <a href="${dinner1.link}" target="_blank">${dinner1.name}</a> for dinner.</p>
    `;
  }

  // Display meal plan and show options for new selection
  document.getElementById('mealOutput').innerHTML = mealOutput;
  document.getElementById('mealPlan').style.display = 'block';
}

// Event listener for different meal option
document.getElementById('yesDifferent').addEventListener('click', () => {
  document.getElementById('mealPlan').style.display = 'none';
  generateMealPlan(2); // Default to 2 meals for variety
});

document.getElementById('noDifferent').addEventListener('click', () => {
  document.getElementById('mealPlan').style.display = 'none';
  alert("Bon Appetit!");
});
