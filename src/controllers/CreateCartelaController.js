const knex = require('../database');
const CreateCartelaService = require('../services/cartelas/CreateCartelaService');
// const GetCartelaService = require('../services/cartelas/GetCartelaService');

async function CreateCartelaController(req, res) {
    const { bingo_id, user_id } = req.body;
    let numeros = [];

    let numerosDoBingo = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
    ];

    let numerosB = [];
    let numerosI = [];
    let numerosN = [];
    let numerosG = [];
    let numerosO = [];

    numerosDoBingo.forEach((num) => {
    while (num < 16) {
        numerosB.push(num);
        break;
    }
    });

    numerosDoBingo.forEach((num) => {
    while (num >= 16 && num <= 30) {
        numerosI.push(num);
        break;
    }
    });

    numerosDoBingo.forEach((num) => {
    while (num > 30 && num <= 45) {
        numerosN.push(num);
        break;
    }
    });

    numerosDoBingo.forEach((num) => {
    while (num >= 46 && num <= 60) {
        numerosG.push(num);
        break;
    }
    });

    numerosDoBingo.forEach((num) => {
    while (num >= 61 && num <= 75) {
        numerosO.push(num);
        break;
    }
    });

    let b = [],
        i = [],
        n = [],
        g = [],
        o = []

        while(b.length < 5) {
            const random = Math.floor(Math.random() * 15);
            if(!b.includes(numerosB[random])) {
                b.push(numerosB[random])
            }
        }
        
        while(i.length < 5) {
            const random = Math.floor(Math.random() * 15);
            if(!i.includes(numerosI[random])) {
                i.push(numerosI[random])
            }
        }
        
        while(n.length < 4) {
            const random = Math.floor(Math.random() * 15);
            if(!n.includes(numerosN[random])) {
                n.push(numerosN[random])
            }
        }
        
        while(g.length < 5) {
            const random = Math.floor(Math.random() * 15);
            if(!g.includes(numerosG[random])) {
                g.push(numerosG[random])
            }
        }
        
        while(o.length < 5) {
            const random = Math.floor(Math.random() * 15);
            if(!o.includes(numerosO[random])) {
                o.push(numerosO[random])
            }
        }

    numeros.push(...b, ...i, ...n, ...g, ...o)       
    await CreateCartelaService(bingo_id, user_id, numeros);

        // testeee
//         const cartela = await GetCartelaService(id)
//         res.render('salaDeEspera', {
//             num: cartela.cartela
//         })
}

module.exports = CreateCartelaController;