module.exports = {

    calculo(peso, constante_frete) {
        const valor_frete = ((peso * constante_frete)/10);
        return valor_frete;
    },

};