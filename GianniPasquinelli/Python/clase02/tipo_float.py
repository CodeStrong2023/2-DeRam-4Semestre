# numeros tipo float 
# Son numeros decimales 
a = 3.0


# Constructor de tipo float -> puede recibir int y str
a = float(10) # le pasamos un tipo entero (int)
a = float('10')
print(f'a: {a:.2f}')

# Notacion expontecial (valores positivos o negativos)
a = 3e5
print(f'a: {a:.2f}')

a = 3e-5
print(f'a: {a:.5f}')

#Cualquier calculo que incluye un float, todo el resultado es float

a=4.0+5
print(a)
print(type(a))

# Operaciones con float
a = 3.5
b = 2.5
c = a + b
print(f'c: {c}')


