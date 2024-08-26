# Valores Infinitos Positivo y negativo 
import math #importamos el modulo math para trabajar con valores infinitos
from decimal import Decimal  #imporamos la clase decimal, es un clase que permite trabajar con valores decimales de alta precision

# Manejo de valores infinitos
infinito_positivo = float('inf') # Representa el valor de inf positivo, con el constructor float
print(f"f'Infinito positivo: {infinito_positivo}")
print(f'Es infinito?: {math.isinf((infinito_positivo))}')

infinito_negativo = float(' -inf')
print(f"Infinito negativo: {infinito_negativo}")
print(f'Es negativo?: {math.isinf((infinito_negativo))}')

# Modulo math
infinito_positivo = math.inf
print(f"f'Infinito positivo: {infinito_positivo}")
print(f'Es infinito?: {math.isinf((infinito_positivo))}')

infinito_negativo = -math.inf
print(f"Infinito negativo: {infinito_negativo}")
print(f'Es negativo?: {math.isinf((infinito_negativo))}')


# Módulo decimal
infinito_positivo = Decimal("Infinity")
print(f"f'Infinito positivo: {infinito_positivo}")
print(f'Es infinito?: {math.isinf((infinito_positivo))}')

infinito_negativo = Decimal("-Infinity")
print(f"Infinito negativo: {infinito_negativo}")
print(f'Es negativo?: {math.isinf((infinito_negativo))}')

