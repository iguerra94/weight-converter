'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kgsToLibras = kgsToLibras;
exports.librasToKgs = librasToKgs;
var CONVERSION_FACTOR_KGS_TO_LIBRAS = 2.204620;
var CONVERSION_FACTOR_LIBRAS_TO_KGS = 0.453592;
var ROUND_ERROR = 5e-5;

function kgsToLibras() {
  var kgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var _kgs = Number(kgs);
  var libras = typeof _kgs === 'number' ? (_kgs * CONVERSION_FACTOR_KGS_TO_LIBRAS).toFixed(6) : 0;
  return Number(Math.abs(Math.round(libras) - libras).toFixed(6)) < ROUND_ERROR ? Math.round(Number(libras)) : Number(libras);
}

function librasToKgs() {
  var libras = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var _libras = Number(libras);
  var kgs = typeof _libras === 'number' ? (_libras * CONVERSION_FACTOR_LIBRAS_TO_KGS).toFixed(6) : 0;
  return Number(Math.abs(Math.round(kgs) - kgs).toFixed(6)) < ROUND_ERROR ? Math.round(Number(kgs)) : Number(kgs);
}