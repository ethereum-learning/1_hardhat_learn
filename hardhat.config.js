module.exports = {
 /**
 * @desc 
 * 1.- Agrega una versión de compilador corecta para 2_Owner.sol
 * 2.- Agrega una versión de compilador diferente a 0.4.0 y 0.5.2 pero que sea compatible con el pragma de 1_Owner.sol
 * 3.- Agrega un override para 3_Owner.sol para que lo compile con una versión 0.6.0    
 *
 * 
 */

  solidity: {
    compilers: [
      {
        version: "0.7.0",
      },
      {
        version: "0.8.0",
      },
      {
        version: "0.3.1"
      },
      {
        version: "0.8.0"
      }
    ]
  }

};
