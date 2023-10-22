# Componente
class ComponenteNotificator:
    def enviar(self, mensagem):
        print(f"Enviando Mensagem: {mensagem}")

# Decorador Base
class DecoradorNotificador:
    def __init__(self, componente):
        self.componente = componente

    def enviar(self, mensagem):
        self.componente.enviar(mensagem)

# Decorador Concreto1
class DecoradorNotificadorSMS(DecoradorNotificador):
    def enviar(self, mensagem):
        super().enviar(mensagem)
        print(f"Enviar mensagem por SMS: {mensagem}")

# Decorador Concreto2
class DecoradorNotificadorFacebook(DecoradorNotificador):
    def enviar(self, mensagem):
        super().enviar(mensagem)
        print(f"Enviar mensagem pelo Facebook: {mensagem}")

notificador = ComponenteNotificator()
notificadorComSMS = DecoradorNotificadorSMS(notificador)
notificadorComFacebook = DecoradorNotificadorFacebook(notificadorComSMS)

notificadorComFacebook.enviar("Olá Mundo...")
