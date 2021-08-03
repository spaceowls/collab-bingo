const knex = require('../database');

async function RemoveCoinsService(id, coins) {
   const user = await knex('users').where({ id }).select().then(user => user[0]);

   if(user.coins < coins) {
       return {
           error: "número de coins inferior"
       }
   }

   await knex('users').where({ id }).update({
       coins: user.coins -= coins
   });

   return {
       message: `foram removidos ${coins} moedas do usuário ${user.username}`
   } 
}

module.exports = RemoveCoinsService;