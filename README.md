# Weight Converter

Weight Converter es un conversor de unidades de peso desarrollado como parte de los desafíos del [Curso de Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com)

## Unidades de medida

Las unidades de medida que se utlizan en la primera versión son el Kilogramo y la Libra.

La conversión de una unidad a otra es:

```
1 Kilogramo = 2.20462 Libras
1 Libra = 0.453592 Kilogramos
```

## Instalación

```
npm install weight-converter
```

## Uso

```
import { kgsToLibras, librasToKgs } from 'weight-converter'

kgsToLibras(0) // 0
librasToKgs(0) // 0
kgsToLibras(1) // 2.20462
librasToKgs(2.20462) // 1
librasToKgs(1) // 0.453592
kgsToLibras(0.453592) // 1
kgsToLibras(15) // 33.0693
librasToKgs(33.0693) // 15
librasToKgs(15) // 6.80388
kgsToLibras(6.80388) // 15
```

## Créditos
- [Sacha Lifszyc](https://twitter.com/@slifszyc)
- [Iván Guerra](https://twitter.com/@iguerra94)

## Licencia

[MIT](https://opensource.org/licenses/MIT)