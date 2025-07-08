class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"Hi, my name is {self.name} and I am {self.age} years old.")


class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

    def introduce(self):
        super().introduce()
        print(f"My student ID is {self.student_id}.")


class Manager(Person):
    def __init__(self, name, age, department):
        super().__init__(name, age)
        self.department = department

    def introduce(self):
        super().introduce()
        print(f"I work in the {self.department} department.")

#Demo:
if __name__ == "__main__":
    person = Person("Alice", 28)
    student = Student("Bob", 22, 12345)
    manager = Manager("Charlie", 40, "Engineering")

    person.introduce()
    print() 
    student.introduce()
    print()
    manager.introduce()
