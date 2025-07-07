def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

num = input("Enter a number to calculate its factorial: ")

while not num.isdigit():
    print("Invalid input. Please enter a positive integer.")
    num = input("Enter a number to calculate its factorial: ")

num = int(num)
print(f"The factorial of {num} is {factorial(num)}")