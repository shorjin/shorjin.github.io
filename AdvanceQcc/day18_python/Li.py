# Xiaojin Li
# Tuesday, Aug29
# check if a user is an adult 

#FUNCTION
print("\n-----User defined Functions-----\n")

def my_function():
    print("my_function code")

my_function()

print("\n-------------- function with parameters --------------------")
def my_name(fname):
    print(f"Welcome to Python coding, {fname}")

name = input("Enter a name: ")

my_name(name)


"""
# DICTIONARY
print("Dictionray")
car = {
    "brand": "Ford", 
    "model": "Mustang",
    "year": 1964
}

print(f"\n{car}")
print(f"\nModel = {car['model']}")

print("\n------ loop  each key in the dictionary ------")

for k in car:
    print(f'\nkey = {k}')
    print(f'value = {car[k]}')

lenCar = len(car)
print(f"The size of the dictionary is {lenCar}")


"""

"""
# LOOPS
n = 0 

while n < 6:
    print(f"n = {n}")
    n += 1

print("\nUse while loop to check if a number is between n and 0")

num = int(input("Enter a number: "))

while (num < 0 or num > 10):
    num = int(input("Enter a valid number (0 - 10): "))
else:
    print(f"Number {num} is correct!")

print("Use while loop as a validation program")

while True: 
    conf = input("Do you want to continue? (y/n)")

    if (conf == 'n' or conf == 'N'):
        break

print("Thank you for playing")

"""



"""
print("Loop through a list")
colors = ["orange", "ollive", "blue", "pink", "yellow"]

for color in colors:
    print(color)
"""




"""
for i in range(11):
    if i == 5:
        print(f"Now counting 5. Loop will break.")
        break
    print(i)


print("\n\nNow counting 5. Loop will skip count 5")
for i in range(11):
    if i == 5:
        print(f"Now counting 5. Loop will skip.")
        continue
    print(i)

print("for-Else Loop")
for n in range(6):
    print(f"n = {n}")
else:
    print("Finished")

"""





"""

print("\n\nstepup counter with increment of 3")
for counter in range(-10, 10, 3):
    print(f"Counting now = {counter}")

print("\n\nstepdown counter")
for x in range(5, -2, -1):
    print(f"Counting now = {x}")
"""


"""
# check if a user is an adult 
age = int(input("Enter an age: "))
print(f"Age: {age}")


if age >= 21: 
    print(f"{age} is an adult age")
else:
    print(f"{age} is under age")

# logical operators and or not
gender = input("Enter a kid's gender: ").lower()
print(gender)

kidAge = int(input("Enter a kid's age: "))

if ((gender == 'm' or gender == 'b') and kidAge > 2 and kidAge < 10):
    print(f"A boy of {kidAge} should eat more broccoli")
elif ((gender == 'm' or gender == 'b') and kidAge > 12 and kidAge < 18):
    print(f"A teen of {kidAge} should practice more sports")
elif ((gender == 'f' or gender == 'g') and kidAge > 2 and kidAge < 10):
    print(f"A girl of {kidAge} should eat more fruits")
elif ((gender == 'f' or gender == 'g') and kidAge > 12 and kidAge < 18):
    print(f"A teen of {kidAge} should learn to play an instrument")
else: 
    print(f"No comments for {kidAge}")
"""