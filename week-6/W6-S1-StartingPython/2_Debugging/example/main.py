# Add your code here```python
#  This script contains multiple bugs! Debug and fix them.

def greet(name):
    print("Hello "+name)  # Missing space and indentation issue

def count_to_n(n):
    i = 0
    while i < n:  # Potential infinite loop!
        print(i)
        # Missing increment for i
        i+=1

def calculate_average(numbers):
    if not numbers:           # What happens if numbers is an empty list?
      return 0
    total = sum(numbers)
    return total / len(numbers)  

# --- Main Execution ---
greet("Alice")  # Undefined variable error

count_to_n(5)  # Should print numbers from 0 to 4

average = calculate_average([])  # Edge case: Empty list
print("Average:", average)
