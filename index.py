import random

print("Welcome to the Number Guessing Game!")
print("I'm thinking of a number between 1 and 100.")
type= input("choose the difficulty: type 'easy' or 'difficult'")
if type == True:
    attempts = 10
else:
    attempts = 5

number = random.randint(1, 100)
win = False

while not win and attempts > 0:
    guess = int(input(f"You have {attempts} attempts remaining to guess the number.\n Make a guess: "))
    attempts -= 1

    if guess < number:
        print("Too low!")
    elif guess > number:
        print("Too high!")
    else:
        print("You got it!! You Win!")
        win = True

if not win:
    print(f"Game Over. The number was {number}.")