class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"Hi, my name is {self.name} and I am {self.age} years old.")
        
    def speak(self):
        print("Hello! I'm just a regular person.")


class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

    def introduce(self):
        super().introduce()
        print(f"My student ID is {self.student_id}.")

    def speak(self):
        print("Hey there! I'm a student.")
        
class Manager(Person):
    def __init__(self, name, age, department):
        super().__init__(name, age)
        self.department = department

    def introduce(self):
        super().introduce()
        print(f"I work in the {self.department} department.")
        
    def speak(self):
        print("Hello! I am a manager.")

#Demo:
people = [
    Person("Alice", 28),
    Student("Bob", 22, 12345),
    Manager("Charlie", 40, "Engineering")
]

for person in people:
    person.introduce()
    person.speak()
    print()
