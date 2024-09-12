
import math
from decimal import Decimal

# NaN
a = float('nan')
print(a)

# Modulo math
a = float('nan')
print(f"Es del tipo NaN?: {math.isnan(a)}")

# Modulo decimal
a = Decimal('nan')
print(f"Es del tipo NaN?: {math.isnan(a)}")