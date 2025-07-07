def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

while True:
    user_input = input("Enter a number to calculate its factorial (or type 'quit' to exit): ")

    if user_input.lower() == "quit":
        print("Goodbye!")
        break

    if not user_input.isdigit():
        print("Invalid input. Please enter a positive integer.")
        continue

    num = int(user_input)
    print(f"The factorial of {num} is {factorial(num)}")
