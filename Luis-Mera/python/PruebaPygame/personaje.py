import pygame

from main import screen, clock, running, player_pos

# configuramos la pantalla
screen = pygame.display.set_mode(800, 600)
clock = pygame.time.Clock()

running = True
dt = 0

# Posición del jugador

player_pos = pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2)

# Velocidad del jugador
payer_speed = 5

# Bucle principal
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

# Detectar las teclas al precionar
keys = pygame.key.get_pressed()

# Movimiento del jugador
if keys[pygame.K_LEFT]:
    player_pos.x -= payer_speed
if keys[pygame.K_RIGHT]:
    player_pos.x += payer_speed
if keys[pygame.K_DOWN]:
    player_pos.y -= payer_speed
if keys[pygame.K_UP]:
    player_pos.y += payer_speed

# Limpiar pantalla
screen.fill("green")

# Dibujar el jugador
pygame.draw.circle(screen, (255, 0, 0), (int(player_pos.x)), int(player_pos.y), 10)

# Actualizar la pantalla
pygame.display.flip()

# Control de velocidad del jugador
clock.tick(60)

pygame.quit()
