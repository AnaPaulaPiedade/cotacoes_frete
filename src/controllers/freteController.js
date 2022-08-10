var bodyParser = require('body-parser');
const entregaKabum = require('../services/entregaKabum');
const entregaNinja = require('../services/entregaNinja');

module.exports = {
    

    buscaFrete: (req, res) => {
        const Dados = req.body;
        const dimensao = Dados.dimensao;
        const peso = Dados.peso;

        const altura = dimensao.altura;
        const largura = dimensao.largura;

        const validacaoEntregaNinja = entregaNinja.requisitos(altura, largura, peso);
        const validacaoEntregaKabum = entregaKabum.requisitos(altura, largura, peso);

        if(validacaoEntregaNinja != null && validacaoEntregaKabum != null ){
            res.status(200).send(
            
            [
                {
                    "nome":"Entrega Ninja",
                      "valor_frete": validacaoEntregaNinja[0],
                      "prazo_dias": validacaoEntregaNinja[1]
                },
                {
                      "nome":"Entrega KaBuM",
                      "valor_frete": validacaoEntregaKabum[0],
                      "prazo_dias": validacaoEntregaKabum[1]
                }
            ]);
        } else if(validacaoEntregaNinja != null && validacaoEntregaKabum == null){
            res.status(200).send(
                [
                    {
                        "nome":"Entrega Ninja",
                          "valor_frete": validacaoEntregaNinja[0],
                          "prazo_dias": validacaoEntregaNinja[1]
                    }
                ]);

        }else if(validacaoEntregaNinja == null && validacaoEntregaKabum != null){
            res.status(200).send(
                [
                    {
                        "nome":"Entrega KaBuM",
                        "valor_frete": validacaoEntregaKabum[0],
                        "prazo_dias": validacaoEntregaKabum[1]
                    }
                ]);

        }else 
        
        res.status(400).send([]);
        
    },
};