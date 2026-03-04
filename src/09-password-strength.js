/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here

  //   * The checker evaluates 5 criteria:
  //  *   1. At least 8 characters long
  //  *   2. Contains at least one uppercase letter (A-Z)
  //  *   3. Contains at least one lowercase letter (a-z)
  //  *   4. Contains at least one number (0-9)
  //  *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
  if (typeof password != "string") return "weak";
  if (password?.trim()?.length == 0) return "weak";
 
  const criteria1 = password.trim().length >= 8;
  const criteria2 = password
    .trim()
    .split("")
    .some((val) => val >= "A" && val <= "Z");
  const criteria3 = password
    .trim()
    .split("")
    .some((val) => val >= "a" && val <= "z");
  const criteria4 = password
    .trim()
    .split("")
    .some((val) => val >= 0 && val <= 9);
  const criteria5 = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password.trim());

  const conditionArray=[criteria1,criteria2,criteria3,criteria4,criteria5]

  const totalTrue=conditionArray.filter(cond=>cond==true).length


  if(totalTrue==1){
    return "weak"
  }else if(totalTrue==2 ||totalTrue==3 ){
    return "medium"
  }else if(totalTrue == 4){
    return "strong"
  }else if(totalTrue ==5){
    return "very strong"
  }
}
