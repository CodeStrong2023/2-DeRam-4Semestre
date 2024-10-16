a = 3.0
print(f'a: {a:.2f}')

# Constructor de tipo float --> recibe int y string
a = float(10)  # entero
print(f'a: {a:.2f}')
a = float('10')  # string
print(f'a: {a:.2f}')

# notacion exponencial (valores positivos o negativos)
a = 3e-5
print(f'a: {a:.5f}')

# toda suma con variable float es de resultado float

a = 4.0 + 5
print(a)
