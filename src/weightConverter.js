const CONVERSION_FACTOR_KGS_TO_LIBRAS = 2.204620
const CONVERSION_FACTOR_LIBRAS_TO_KGS = 0.453592
const ROUND_ERROR = 5e-5

export function kgsToLibras(kgs = 0) {
  let _kgs = Number(kgs)
  const libras = (typeof _kgs === 'number') ? (_kgs * CONVERSION_FACTOR_KGS_TO_LIBRAS).toFixed(6) : 0
  return (Number(Math.abs(Math.round(libras)-libras).toFixed(6)) < ROUND_ERROR) ? Math.round(Number(libras)) : Number(libras)
}

export function librasToKgs(libras = 0) {
  let _libras = Number(libras)
  const kgs = (typeof _libras === 'number') ? (_libras * CONVERSION_FACTOR_LIBRAS_TO_KGS).toFixed(6) : 0
  return (Number(Math.abs(Math.round(kgs)-kgs).toFixed(6)) < ROUND_ERROR) ? Math.round(Number(kgs)) : Number(kgs)
}