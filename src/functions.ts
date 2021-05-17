/* ------------------------------------------------------------ Imports ----------------------------------------------------------- */

// Npm
import { BigNumber } from './bignumber'
import BN from 'bn.js'

// Local
import { BNLike } from './bnLike'

/* -------------------------------------------------------------------------------------------------------------------------------- */



/* ----------------------------------------------------------- Functions ---------------------------------------------------------- */

export function isBn(value: BNLike): boolean {
    return BigNumber.isBigNumber(value)
}

export function bn(value: BNLike): BigNumber {
    if (BigNumber.isBigNumber(value)){
        return value
    }

    if (BN.isBN(value)) {
        return new BigNumber(value.toString())
    }


    return new BigNumber(value)
}

export function bnpow(
    base: BNLike,
    pow?: BNLike
): BigNumber {
    base = bn(base)

    return pow != null ? base.pow(bn(pow)) : base
}

export function bn2(pow?: BNLike): BigNumber {
    return bnpow(2, pow)
}

export function bn10(pow?: BNLike): BigNumber {
    return bnpow(10, pow)
}


/* -------------------------------------------------------------------------------------------------------------------------------- */