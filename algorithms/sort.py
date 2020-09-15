def bubbleSort(list):
    for i in range(len(list)-1):
        for j in range(len(list)-1-i):
            if list[j] > list[j+1]:
                list[j], list[j+1] = list[j+1], list[j]
    return list
sortThis = [1,5,3,2,0,8]
print(bubbleSort(sortThis))

def selectionSort(list):
    index = 0
    for i in range(len(list)-1):
        lowest = list[i]
        for j in range(i, len(list)-1):
            if list[j] < lowest:
                lowest = list[j]
                list[i], list[j] = list[j], list[i]
    return list
sortThis = [1,5,3,2,0,8]
print('sorted ', selectionSort(sortThis))


def insertionSort(list):
    for i in range(1, len(list)):
        for j in range(i-1, -1, -1):
            if list[j+1] < list[j]:
                list[j], list[j+1] = list[j+1], list[j]
            else:
                break
    return list
sortThis = [1,5,3,2,0,8]
print(insertionSort(sortThis))


