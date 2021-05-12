/* ------------------------------------------------------------ Imports ----------------------------------------------------------- */

// Npm
import { BigNumber } from 'bignumber.js'
import BN from 'bn.js'

// Local
import { BNLike } from './bnLike'

/* -------------------------------------------------------------------------------------------------------------------------------- */



/* ----------------------------------------------------------- Functions ---------------------------------------------------------- */

export function bn(value: BNLike): BigNumber {
    if (BigNumber.isBigNumber(value)){
        return value
    }

    if (BN.isBN(value)) {
        return new BigNumber(value.toString())
    }


    return new BigNumber(value)
}


/* -------------------------------------------------------------------------------------------------------------------------------- */