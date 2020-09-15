import random
def randInt(min=0 , max=100 ):
    if max < min:
        return "please choose a max that is greater than the min"
    if min < 0: 
        return "please choose a min that is greater than 0"
    number = random.random() * (max - min) + min
    return round(number)
print(randInt()) 		    # should print a random integer between 0 to 100
print(randInt(max=50)) 	    # should print a random integer between 0 to 50
print(randInt(min=50)) 	    # should print a random integer between 50 to 100
print(randInt(min=50, max=500))    # should print a random integer between 50 and 500 
