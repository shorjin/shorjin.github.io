"""
Xiaojin Li
Aug 31: Python classes
"""

# create a class - 1st letter of class name is always capitalized
class MyClass:
    num = 5



# create an object for class MyClass
p1 = MyClass()

# show memory location
print(p1)


# show object
print(f'\nObject num = {p1.num}')


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # object method
    def printObject (self):
        print(f'Hello! my name is {self.name}')

# create an object and initialize values:
person1 = Person("John", 30)
print(f'Object name = {person1.name}')
print(f'Object age = {person1.age}')

# printing an object method
print(f'\n{person1.printObject()}')

# delete properties using del keyword
del person1.name

# pass statement is used to pass an empty class.
# you need to put  pass for an empty class
class House:
    pass

print(f"print {House}")

print('\n -------------- class Chair ----------------')
print('--------------------------------------- \n')

class Chair:
    # adding accessible properties
    chair_color = 'brown'
    def __init__(self, height, width, length):
        self.height = height
        self.__width = width 
        # double underscore __ # '__' make the property very private, you can't call it
        self.length = length*2

    # define a method to print result
    def print_result(self):
        print(f'The length of the chair is: {self.length}')

    # pass the height
    def get_height(self):
        return self.height

    # this function will pass the accessible property
    def get_color(self):
        return self.chair_color
    
    # update class values
    def set_price(self, price):
        self._price = price 
    #_make a private property

# initialize an object for class Chair
chair1 = Chair(12, 30, 10)
chair1.print_result()
print(f"The chair height {chair1.get_height()}")
print(f'\nThe chair color is {chair1.get_color()}')

# calling accessible property
print(f'\nThe chair color is {chair1.chair_color}')

# update the price data
chair1.set_price(25)
print(f'Chair price {chair1._price}')
#print(f'\nVery private width = {chair1.__width}')
