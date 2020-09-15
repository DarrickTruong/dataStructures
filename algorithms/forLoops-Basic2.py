def biggieSize(list):
    for i in range(len(list)):
        if list[i] > 0:
            list[i] = "big"
    return list
print(biggieSize([-1,-1,-1,1,-1,-1,-1]))

def countPositives(list):
    count = 0
    for i in range(len(list)):
        if list[i] > 0:
            count+=1
    list[len(list)-1] = count
    return list
print(countPositives([0,-1,0,-1, 1,5]))

def sumTotal(list):
    sum = 0
    for i in range(len(list)):
        sum += list[i]
    return sum
print(sumTotal([1,1,1,1,1]))

def average(list):
    sum = 0;
    for i in range(len(list)):
        sum += list[i]
    return sum/len(list)
print(average([1,1,1,1,1]))

def length(list):
    return len(list)
print(length([]))
print(length([1,1,1,1,1,1]))

def minimum(list):
    if len(list) <=0: 
        return False
    min = list[0]
    for i in range(1,len(list)):
        if min > list[i]:
            min = list[i]
    return min
print(minimum([]))
print(minimum([5,4,3,2,1]))
print(minimum([3,4,2,1,5]))

def maximum(list):
    if len(list) <=0: 
        return False
    max = list[0]
    for i in range(1, len(list)):
        if max < list[i]:
            max = list[i]
    return max
print(maximum([1,2,3,4,5]))
print(maximum([]))
print(maximum([1,4,5,2,3]))

def reverseList(list):
    for i in range(len(list)/2):
        temp = list[(len(list)-1-i)]
        list[len(list)-1-i] = list[i]
        list[i] = temp
    return list
print(reverseList([1,2,3,4,5]))