# bool contiene true o false
# tipo numerico: 0 = false, true para todos los demas

valor = 0.0
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')

valor = 0.1
resultado = bool(valor)
print(f'valor: {valor}, resultado: {resultado}')

# tipo str --> false '', True demas valores
valor = ''
resultado = bool(valor)
print(f'valor {valor}, Resultado: {resultado}')
valor = 'e'
resultado = bool(valor)
print(f'valor {valor}, Resultado: {resultado}')

# tipo colecciones --> false colecciones vacias, true las demas
# lista
valor = []
resultado = bool(valor)
print(f'valor de lista vacia: {valor}, resultado {resultado}')
valor = [1, 2, 3]
resultado = bool(valor)
print(f'valor lista con elementos: {valor}, resultado {resultado}')
# tupla
valor = ()
resultado = bool(valor)
print(f'valor de tupla vacia: {valor}, resultado {resultado}')
valor = (1,)
resultado = bool(valor)
print(f'valor de tupla con elementos: {valor}, resultado {resultado}')
# diccionario
valor = {}
resultado = bool(valor)
print(f'valor diccionario vacio: {valor}, resultado {resultado}')
valor = {'nombre': 'juan', 'apellido': 'perez'}
resultado = bool(valor)
print(f'valor: {valor}, resultado {resultado}')

# sentencias de control con bool
if '':
    print('Regresa verdadero')
else:
    print('Regresa falso')
if 0:
    print('Regresa verdadero')
else:
    print('Regresa falso')

# ciclos
variable = 0
while variable:
    print('Regresa verdadero')
    break
else:
    print('Regresa falso')


