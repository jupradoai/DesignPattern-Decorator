// Componente
class ComponenteNotificator {
    enviar(mensagem) {
        console.log(`Enviando Mensagem: ${mensagem}`);
    }
}

// Decorador Base
class DecoradorNotificador {
    constructor(componente) {
        this.componente = componente;
    }

    enviar(mensagem) {
        this.componente.enviar(mensagem);
    }
}

// Decorador Concreto1
class DecoradorNotificadorSMS extends DecoradorNotificador {
    enviar(mensagem) {
        super.enviar(mensagem);
        console.log(`Enviar mensagem por SMS: ${mensagem}`);
    }
}

// Decorador Concreto2
class DecoradorNotificadorFacebook extends DecoradorNotificador {
    enviar(mensagem) {
        super.enviar(mensagem);
        console.log(`Enviar mensagem pelo facebook: ${mensagem}`);
    }
}

const notificador = new ComponenteNotificator();
const notificadorComSMS = new DecoradorNotificadorSMS(notificador);
const notificadorComFacebook = new DecoradorNotificadorFacebook(notificadorComSMS);

notificadorComFacebook.enviar("Ola Mundo...");
