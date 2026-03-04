/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  const allowedSize = ["small", "medium", , "large"];
  const allowedType = ["regular", "latte", "cappuccino", "mocha"];

  if (!allowedSize.includes(size)) return -1;
  if (!allowedType.includes(type)) return -1;

  let price=0;

//    * Base price by size:
//  *   - "small"  → $3.00
//  *   - "medium" → $4.00
//  *   - "large"  → $5.00
//  *
//  * Add-on for coffee type:
//  *   - "regular"    → +$0.00
//  *   - "latte"      → +$1.00
//  *   - "cappuccino" → +$1.50
//  *   - "mocha"      → +$2.00
//  *
//  * Optional extras:
//  *   - whippedCream → +$0.50 (if true)
//  *   - extraShot    → +$0.75 (if true)

switch (size) {
  case "small":price=3.00;break;
  case "medium":price=4.00;break;
  case "large":price=5.00;break;
}

switch(type){
  case "regular":price=price+0;break;
  case "latte"  :price=price+1.00;break;   
  case "cappuccino":price=price+1.50;break;
  case "mocha":price=price+2.00;break;
}

let extrasPrice=0;
if(!extras){
  extras=0.00;
}else{
  if(extras?.extraShot && !extras?.whippedCream){
    extrasPrice=0.75
  }else if(!extras.extraShot && extras.whippedCream){
    extrasPrice=0.50
  }else if(extras?.extraShot && extras?.whippedCream){
    extrasPrice=0.50+0.75;
  }
}


return price+extrasPrice
  
}

