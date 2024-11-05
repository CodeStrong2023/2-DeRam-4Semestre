#Ejemplo de pantalla en pygame
import pygame

#Configuracion de pantalla de pygame
pygame.init()
screen = pygame.display.set_mode((800,600))
clock= pygame.time.Clock()
running= True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

screen.file('purple')

pygame.display.flip()

clock.tick(60)

pygame.quit()