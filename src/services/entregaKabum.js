const calculoFrete = require('../services/calculoFrete');

module.exports = {

    requisitos(altura, largura, peso) {
        const constante_frete = 0.2;
        const altura_min_permitida = 5;
        const altura_max_permitida = 140;
        const largura_min_permitida = 13;
        const largura_max_permitida = 125;
        const prazo_entrega = 4; //dias
        let valor_frete = null;

       if (altura >= altura_min_permitida && altura <= altura_max_permitida){
    
        if(largura >= largura_min_permitida && largura <= largura_max_permitida){
            if(peso > 0){
                valor_frete = calculoFrete.calculo(peso, constante_frete); 
                return [valor_frete,prazo_entrega];
            }
        }
    }

    return null;
    },

};