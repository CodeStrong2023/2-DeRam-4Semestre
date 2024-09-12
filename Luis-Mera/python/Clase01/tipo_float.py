# Profundizando en el tipo float

a = 3.0
print(f"a = {a}")
print(f"tipo de a: {a:.2f}")

# constructor del tipo float
a = float(10)
print(f"a = {a:.2f}")

# Notación exponencial (valores positivos o negativos)
a = 35e5
print(f"a = {a:.2f}")

a = 35e-5
print(f"a = {a:.5f}")

# Cualquier calculo que involucre un float, todo cambia a float

a = 4.0 + 5
print(f"a = {a:.2f}")
print(type(a))