/* ------------------------------------------------------------ Imports ----------------------------------------------------------- */

// Npm
import { BigNumber } from 'bignumber.js'

/* -------------------------------------------------------------------------------------------------------------------------------- */



/* ----------------------------------------------------------- BigNumber ---------------------------------------------------------- */

// Module declaration

declare module 'bignumber.js' {
    interface BigNumber {
        mul(n: BigNumber.Value, base?: number): BigNumber
    }
}

// Protoype Implementations

BigNumber.prototype.mul = function(n: BigNumber.Value, base?: number) {
    return this.multipliedBy(n, base)
}

export { BigNumber }


/* -------------------------------------------------------------------------------------------------------------------------------- */