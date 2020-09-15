def countdown(number):
    arr = []
    for i in range(number, -1, -1):
        arr.append(i)
    return arr
print(countdown(100))

def printReturn(list):
    print(list[0])
    return list[1]
print(printReturn([1,2]))

def firstPlusLength(list):
    return list[0] + len(list)
print(firstPlusLength([1,2,3]))

def valuesGreaterThanSecond(list):
    newList =[]
    for i in range(len(list)):
        if list[i] > list[1]:
            newList.append(list[i])
    if len(newList) < 2:
        return False
    print(len(newList))
    return newList
print(valuesGreaterThanSecond([1,2,3]))
print(valuesGreaterThanSecond([1,2,3,4]))
print(valuesGreaterThanSecond([1,2,3,4,5]))

def thisLengthThatValue(size, value):
    list =[]
    for i in range(size):
        list.append(value)
    return list
print(thisLengthThatValue(5, 100))
print(thisLengthThatValue(10, 1))