'''
Script to generate a weekly meal plan with random selections from predefined lists of breakfasts, lunches, and dinners.

The script prompts the user to choose between having one or two meals per day for variety. It then randomly selects meals 
from the predefined lists and displays the weekly meal plan. If two meals per day are chosen, it ensures that each meal is 
unique for variety and avoids repetition of the last item in each list. After displaying the meal plan, it allows the user to 
opt for a different selection or end the program.

Usage:
    - Run the script and respond to prompts with 'Y' or 'N' to generate a meal plan with desired variety.

Predefined Lists:
    - `breakfasts`: List of breakfast options.
    - `lunches`: List of lunch options.
    - `dinners`: List of dinner options.

Example:
    $ python meal_plan_generator.py
    Would you like some variety in your week? (Y or N) Y
    Okay, this week you're gonna have scrambled eggs for breakfast, pesto stuffed shells for lunch, and jerk chicken with 
    pineapple black bean salsa for dinner.
    
    You will also have bacon potato frittata for breakfast, chicken & dumplins for lunch, and sesame garlic ramen stir fry for 
    dinner.

    Would you rather have something different? (Y or N) N

    Bon Appetit!
'''
import random

breakfasts = [
  "sweet potato hash",
  "strawberry overnight oatmeal",
  "egg muffin","cottage cheese breakfast bowls", 
  "country breakfast bowls", "microwave breakfast scrambles",
  "smoothie packs", "spicy breakfast strata", 
  "crock pot sausage casserole", 'bagel sandwiches',
  'jalapeno poppy seed muffins', 'pizza eggs',
  'breakfast enchiladas', 'eggs benedict (df2)', 'egg cups',
  'egg boats (df2)', 'bacon potato frittata (ww)',
  'breakfast quinoa fried rice (ww)',
  'breakfast quesadillas (ww)'
] 

lunches = [
  "mason jar salad", 'taco salad (df2)' 
  "steak cobb salad",
  "sandwiches","skillet meatballs & marina",
  "cilantro lime chicken", "pizza roll ups",
  "loaded sweet potato with cilantro lime crema",
  "sweet potato tacos", "pesto stuffed shells",
  'frito chili pie', 'taco soup', 'chicken & spinach flautas',
  'veggie tortellini soup (pw)',
] 

dinners = [
  'baked chicken fingers (df2)', 'hamburger helper (df2)',
  'ranch chicken tacos', 'tex-mex butternut squash (pw)',
  'pesto chicken', 'spinach lasagna rolls (df2)', 
  'chip crusted pork chops (df2)', 'steak with chimichurri (pw)',
  'tuscan chicken sheet pan (pw)', 'chicken bacon ranch pasta',
  "one pan huevos rancheros", "chicken ramen stir fry",
  "sesame garlic ramen stir fry",
  "chicken parm pasta bake", "honey garlic chicken fried rice",
  "chicken with creamy cilantro lime sauce", "tex mex stuffed zucchini",
  "beef & broccoli ramen stir fry",
  "jerk chicken with pineapple black bean salsa", 'paninis',
  'lasagne (df2)', 'gumbo (df2)', 'spaghetti with italian sausage',
  'spaghetti (pw)','beef stew', 'subs'
  'tortilla pizza', 'carne asada taco bowls',
  'crock pot red beans & rice', 'chicken parm wraps', 
  'mississippi roast', 'carne asada quesadillas',
  'sweet tea fried chicken (df2)', 
  'chicken with clilantro lime rice (df2)',
  'chicken & dumplins (df2)', 'sheet pan pork loin and veggies (df2)',
  'chicken pot pie (df2)', 'beef enchiladas (df2)',
  'skillet pizza (df2)', "cap'n crunch chicken strips (pw)",
  'mango chile chicken (pw)', 'smothered pork chops (pw)',
  'chicken piccata (pw)', 'taco quesadillas (pw)',
  'turkey taco skillet (pw)',
  'spaghetti carbonara with grilled chicken (pw)', 'dinner nachos (pw)',
  'pepperoni chicken (pw)', 'parmesan panko chicken (pw)',
  'chicken + 40 cloves of garlic (pw)', 'sausage + root veggies sheet pan (pw)',
  'pizza margherita (ww)', 'greek chicken (ww)', 'easy chicken parm (ww)',
  'bbq chicken skillet pizza (ww)', 'pizza casserole', 
  'country quiche (ty)', 'tennessee jambalya (ty)', 'pumpkin chili',
  'slow cooker pork loin (ty)', 'squash casserole (ty)',
  "baked mac 'n cheese (df2)", 'quick and easy ravioli soup (ww)',
  'easy make at home chinese chicken (ww)', 'southwestern turkey stew (ww)',
  'classic fettuccine alfredo (ww)', 'nerd fitness chicken',
] 

print('===================================================')
print('               Meal Plan Generator')
print('===================================================')

number_of_meals = input("\nWould you like some variety in your week? (Y or N) ")
if number_of_meals.lower() == "y":
  number_of_meals = 2
else:
  number_of_meals = 1

'''
For the following 3 sets of nested `if` statements, the goal is to ensure that both meal options are unique. If `random.choice()`
selects 2 identical meals, and that meal is the last element in the list, the second meal will be set to the 
second-to-last element in the list, else the second meal will be set to the last element in the list
'''

while True:
  breakfast = random.choice(breakfasts)
  lunch = random.choice(lunches)
  dinner = random.choice(dinners)

  if number_of_meals == 2:
    breakfast1 = breakfast
    breakfast2 = breakfast
    lunch1 = lunch
    lunch2 = lunch 
    dinner1 = dinner
    dinner2 = dinner
    
    if breakfast1 == breakfast2 and breakfast1 == breakfasts[-1]:
      breakfast2 = breakfasts[-2]
    elif breakfast1 == breakfast2:
      breakfast2 = breakfasts[-1]
   

    if lunch1 == lunch2 and lunch1 == lunches[-1]:
      lunch2 = lunches[-2]
    elif lunch1 == lunch2:
      lunch2 = lunches[-1]

    if dinner1 == dinner2 and dinner1 == dinners[-1]:
      dinner2 = dinners[-2]
    elif dinner1 == dinner2:
      dinner2 = dinners[-1]
   
    print(f"\nOkay, this week you're gonna have {breakfast1} for breakfast, {lunch1} for lunch, and {dinner1} for dinner.") 
    print(f"\nYou will also have {breakfast2} for breakfast, {lunch2} for lunch, and {dinner2} for dinner.") 
  
  else:
    print(f"\nOkay, this week you're gonna have {breakfast} for breakfast, {lunch} for lunch and {dinner} for dinner.") 


  response = input("\nWould you rather have something different? (Y or N) ")
  if response.lower() == "n":
    print("\n\nBon Appetit!\n\n") 
    break
