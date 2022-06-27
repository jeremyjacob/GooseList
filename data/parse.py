import csv

s = set()

# parse csv data from grocies_final.csv and merge all columns into one
with open('data/grocies_final.csv', 'r') as file:
    csvfile = csv.reader(file)

    for lines in csvfile:
        print(lines)
        for col in lines[2:]:
            s.push(col)