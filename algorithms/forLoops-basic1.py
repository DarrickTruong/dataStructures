def print0To150():
    for x in range(151):
        print(x)
print0To150()

def printBy5():
    for x in range(5,1005,5):
        print(x)
printBy5()

def countingDojo():
    for x in range(101):
        if x % 10 == 0:
            print(x, "Dojo")
        elif x % 5 == 0:
            print(x, "Coding")
        else: 
            print(x)
countingDojo()

def printSum():
    sum = 0
    for x in range(1, 500000, 2):
        sum += x
    print(sum)
printSum()

def countdownBy4():
    for x in range(2018, 0, -4):
        print(x)
countdownBy4()

def flexibleCounter():
    lowNum = 3
    highNum = 144 
    mult = 6
    for x in range(lowNum, highNum):
        if x % mult == 0:
            print(x, mult)
flexibleCounter()