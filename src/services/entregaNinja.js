
const calculoFrete = require('../services/calculoFrete');

module.exports = {

    requisitos(altura, largura, peso) {
        //console.log("requisicao:", req);
        
        const constante_frete = 0.3;
        const altura_min_permitida = 10;
        const altura_max_permitida = 200;
        const largura_min_permitida = 6;
        const largura_max_permitida = 140;
        const prazo_entrega = 6; //dias
        let valor_frete = null;
    
        if (altura >= altura_min_permitida && altura <= altura_max_permitida){
    
            if(largura >= largura_min_permitida && largura <= largura_max_permitida){
                if(peso > 0){
                    valor_frete = calculoFrete.calculo(peso, constante_frete); 
                    return ([valor_frete,prazo_entrega]);
                }
            }
        }

        return null;
    },

};