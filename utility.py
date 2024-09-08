import os
import sys

i = 0
f = open("./diocesi_d_italia.geojson","r")#4997534 #5028660
copy = open("./fermo1.geojson","wt")
#loop that copies file line by line and terminates loop when i reaches 10
for line in f:
    if(i>= 850411 and i < 881529):
        copy.write(line)
    i = i +1
f.close()
copy.close()
print("done")