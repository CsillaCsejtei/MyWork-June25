# Function without parameters
def greet():
    print("Hello, World!")

# Function with parameters
def add_numbers(a, b):
    return a + b

# Calling the functions
greet()
sum_result = add_numbers(3, 7)
print(f"Sum: {sum_result}")

# JavaScript equivalent
# function greet() {
#     console.log("Hello, World!");
# }
# function addNumbers(a, b) {
#     return a + b;
# }
# greet();
# let sumResult = addNumbers(3, 7);
# console.log(`Sum: ${sumResult}`);

def sum_list(numbers, count= 1):
    if not all(isinstance(num, (int, float)) for num in numbers):
        return "Error: List must contain only numbers"
    return sum(numbers)

print(sum_list([1, 2, 3, 4]))  # Should return 10
print(sum_list([1, "two", 3]))  # Should return an error message