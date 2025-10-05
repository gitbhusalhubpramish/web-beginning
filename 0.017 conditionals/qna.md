<!-- @format -->

# JavaScript Conditionals - Practice Questions

1. **Number Comparison**: Write a function that takes two numbers and returns:

   - "First number is larger" if the first number is bigger
   - "Second number is larger" if the second number is bigger
   - "Both numbers are equal" if they are the same

   Test it with: `compareNumbers(10, 5)`, `compareNumbers(3, 8)`, `compareNumbers(7, 7)`

2. **Traffic Light System**: Create a function that takes a traffic light color and returns what action to take:

   - "green" → "Go!"
   - "yellow" → "Slow down!"
   - "red" → "Stop!"
   - Any other color → "Invalid color"

   Use a **switch statement** for this exercise.

3. **Movie Rating System**: Write a function that takes an age and returns which movies they can watch:

   - Under 13: "G and PG movies only"
   - 13-16: "G, PG, and PG-13 movies"
   - 17 and above: "All movies including R-rated"

4. **Temperature Converter & Advisor**: Create a function that:

   - Takes temperature in Celsius
   - If below 0: "Freezing! Wear heavy winter clothes"
   - If 0-15: "Cold! Wear a jacket"
   - If 16-25: "Nice weather! Light clothes are fine"
   - If above 25: "Hot! Stay hydrated and wear light clothes"

5. **Login Validator**: Write a function that checks login credentials:

   - Takes username and password as parameters
   - If username is "admin" AND password is "secret123": "Login successful!"
   - If username is correct but password is wrong: "Wrong password!"
   - If username is wrong: "User not found!"
   - Use logical operators (&&, ||) in your solution

6. **Grade Calculator with Categories**: Create a function that:

   - Takes a score (0-100)
   - Returns both letter grade and category:
     - 90-100: "A - Excellent"
     - 80-89: "B - Good"
     - 70-79: "C - Average"
     - 60-69: "D - Below Average"
     - Below 60: "F - Failed"
   - Also check if score is valid (0-100 range)

7. **Day Planner**: Write a function using **switch statement** that takes a day of the week and returns an activity:

   - Monday: "Gym day!"
   - Tuesday: "Study time!"
   - Wednesday: "Movie night!"
   - Thursday: "Cooking day!"
   - Friday: "Party time!"
   - Saturday & Sunday: "Relax and enjoy!"
   - Default: "Invalid day"

8. **Discount Calculator**: Create a function that calculates discount based on:

   - Customer type: "student", "senior", "employee", "regular"
   - Purchase amount
   - Rules:
     - Students get 10% discount on purchases over Rs.50
     - Seniors get 15% discount on purchases over Rs.30
     - Employees get 20% discount on any purchase
     - Regular customers get 5% discount on purchases over Rs.100
   - Return the discounted price

9. **Password Strength Checker Advanced**: Write a function that checks password strength:

   - Takes a password string
   - Checks multiple criteria:
     - Length >= 8 characters
     - Contains at least one number
     - Contains at least one uppercase letter
     - Contains at least one special character (!@#$%^&\*)
   - Returns: "Strong", "Medium", or "Weak" based on how many criteria are met

10. **Rock Paper Scissors Game**: Create a function that:
    - Takes two player choices: "rock", "paper", or "scissors"
    - Returns the winner using conditional logic:
      - Rock beats Scissors
      - Scissors beats Paper
      - Paper beats Rock
      - Same choice = "Tie"
    - Handle invalid inputs

**Challenge Questions:**

**Smart ATM Withdrawal**: Write a function that:

- Takes account balance and withdrawal amount
- Checks if withdrawal is possible
- Applies different rules:
  - If balance < withdrawal: "Insufficient funds"
  - If withdrawal > 500: "Daily limit exceeded"
  - If balance - withdrawal < 10: "Minimum balance required"
  - Otherwise: Calculate and return new balance

**Shipping Cost Calculator**: Create a function that calculates shipping cost:

- Takes weight (kg) and destination ("local", "domestic", "international")
- Rules:
  - Local: Rs5 for up to 1kg, Rs.2 for each additional kg
  - Domestic: Rs.0 for up to 1kg, Rs.5 for each additional kg
  - International: Rs.20 for up to 1kg, Rs.10 for each additional kg
- Use both if-else and switch statements

**Bonus Challenge**: Combine multiple concepts - create a **Simple Banking System** that:

- Takes account type ("savings", "checking"), current balance, and transaction type ("deposit", "withdraw")
- Apply different rules for each account type
- Handle all edge cases (negative amounts, insufficient funds, etc.)
- Return appropriate messages and new balance

**Tips**:

- Test your functions with different inputs
- Use `console.log()` to debug your logic
- Remember to handle edge cases (invalid inputs, negative numbers, etc.)
- Practice combining logical operators (&&, ||, !) for complex conditions
