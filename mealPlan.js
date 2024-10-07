// Define meal lists
const breakfasts = [
    "sweet potato hash", "strawberry overnight oatmeal", "egg muffin", "cottage cheese breakfast bowls",
    "country breakfast bowls", "microwave breakfast scrambles", "smoothie packs", "spicy breakfast strata",
    "crock pot sausage casserole", 'bagel sandwiches', 'jalapeno poppy seed muffins', 'pizza eggs',
    'breakfast enchiladas', 'eggs benedict (df2)', 'egg cups', 'egg boats (df2)', 'bacon potato frittata (ww)',
    'breakfast quinoa fried rice (ww)', 'breakfast quesadillas (ww)'
  ];
  
  const lunches = [
    "mason jar salad", 'taco salad (df2)', "steak cobb salad", "sandwiches", "skillet meatballs & marinara",
    "cilantro lime chicken", "pizza roll ups", "loaded sweet potato with cilantro lime crema", "sweet potato tacos",
    "pesto stuffed shells", 'frito chili pie', 'taco soup', 'chicken & spinach flautas', 'veggie tortellini soup (pw)'
  ];
  
  const dinners = [
    'baked chicken fingers (df2)', 'hamburger helper (df2)', 'ranch chicken tacos', 'tex-mex butternut squash (pw)',
    'pesto chicken', 'spinach lasagna rolls (df2)', 'chip crusted pork chops (df2)', 'steak with chimichurri (pw)',
    'tuscan chicken sheet pan (pw)', 'chicken bacon ranch pasta', "one pan huevos rancheros", "chicken ramen stir fry",
    "sesame garlic ramen stir fry", "chicken parm pasta bake", "honey garlic chicken fried rice",
    "chicken with creamy cilantro lime sauce", "tex mex stuffed zucchini", "beef & broccoli ramen stir fry",
    "jerk chicken with pineapple black bean salsa", 'paninis', 'lasagne (df2)', 'gumbo (df2)', 'spaghetti with italian sausage',
    'spaghetti (pw)', 'beef stew', 'subs', 'tortilla pizza', 'carne asada taco bowls', 'crock pot red beans & rice',
    'chicken parm wraps', 'mississippi roast', 'carne asada quesadillas', 'sweet tea fried chicken (df2)',
    'chicken with cilantro lime rice (df2)', 'chicken & dumplins (df2)', 'sheet pan pork loin and veggies (df2)',
    'chicken pot pie (df2)', 'beef enchiladas (df2)', 'skillet pizza (df2)', "cap'n crunch chicken strips (pw)",
    'mango chile chicken (pw)', 'smothered pork chops (pw)', 'chicken piccata (pw)', 'taco quesadillas (pw)',
    'turkey taco skillet (pw)', 'spaghetti carbonara with grilled chicken (pw)', 'dinner nachos (pw)',
    'pepperoni chicken (pw)', 'parmesan panko chicken (pw)', 'chicken + 40 cloves of garlic (pw)',
    'sausage + root veggies sheet pan (pw)', 'pizza margherita (ww)', 'greek chicken (ww)', 'easy chicken parm (ww)',
    'bbq chicken skillet pizza (ww)', 'pizza casserole', 'country quiche (ty)', 'tennessee jambalya (ty)', 'pumpkin chili',
    'slow cooker pork loin (ty)', 'squash casserole (ty)', "baked mac 'n cheese (df2)", 'quick and easy ravioli soup (ww)',
    'easy make at home chinese chicken (ww)', 'southwestern turkey stew (ww)', 'classic fettuccine alfredo (ww)', 'nerd fitness chicken'
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
  
      if (breakfast1 === breakfast2) breakfast2 = breakfasts[breakfasts.length - 1];
      if (lunch1 === lunch2) lunch2 = lunches[lunches.length - 1];
      if (dinner1 === dinner2) dinner2 = dinners[dinners.length - 1];
  
      mealOutput = `Okay, this week you're gonna have ${breakfast1} for breakfast, ${lunch1} for lunch, and ${dinner1} for dinner.<br>
                    You will also have ${breakfast2} for breakfast, ${lunch2} for lunch, and ${dinner2} for dinner.`;
    } else {
      mealOutput = `Okay, this week you're gonna have ${breakfast1} for breakfast, ${lunch1} for lunch, and ${dinner1} for dinner.`;
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
  