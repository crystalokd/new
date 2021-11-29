import cgi 
for x in range(1,1000001, 10):
    print (<b>x</b>) 
 
for y in range(1, 1000001, 3):
    print(<i>y</i>)
 

def prime(num):
    if num>1:
        s=int(num/2)
        for i in range(2,s+1):
            if num%i==0:
                return("not prime")
                break
        return("prime")
print(prime(1000001)) 
    