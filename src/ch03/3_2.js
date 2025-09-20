0
3
10000000

0xff        // => 255: (15*16 + 15)
0xBADCAFE   // => 195939070

0b10101     // => 21: (1*16 + 0*8 + 1*4 + 0*2 + 1*1)
0o377       // => 255: (3*64 + 7*8 + 7*1)

3.14
2345.6789
.333333333333333333
6.02e23        // 6.02 x 10^23
1.4738223E-32  // 1.4738223 X 10^-32 

let billion = 1_000_000_000;  // Underscore as a thousands separator.
let bytes = 0x89_AB_CD_EF;    // As a byte separator.
let bits = 0b001_1101_0111;   // As a nibble separator.
let fraction = 0.123_456_789; // Works in the fractional part, too.

Math.pow(2,53)          // => 9007199254740992: 2 to the power 53
Math.round(.6)          // => 1.0: round to the nearest integer
Math.ceil(.6)           // => 1.0: round up to an integer
Math.floor(.6)          // => 0.0: round down to an integer
Math.abs(-5)            // => 5: absolute value
Math.max(x,y,z)         // Return the largest argument
Math.min(x,y,z)         // Return the smallest argument
Math.random()           // Pseudo-random number x where 0 <= x < 1.0
Math.PI                 // π: circumference of a circle / diameter
Math.E                  // e: The base of the natural logarithm
Math.sqrt(3)            // => 3**0.5: the square root of 3
Math.pow(3, 1/3)        // => 3**(1/3): the cube root of 3
Math.sin(0)             // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10)            // Natural logarithm of 10
Math.log(100)/Math.LN10 // Base 10 logarithm of 100
Math.log(512)/Math.LN2  // Base 2 logarithm of 512
Math.exp(3)             // Math.E cubed

Math.cbrt(27)     // => 3: cube root
Math.hypot(3, 4)  // => 5: square root of sum of squares of all arguments
Math.log10(100)   // => 2: Base-10 logarithm
Math.log2(1024)   // => 10: Base-2 logarithm
Math.log1p(x)     // Natural log of (1+x); accurate for very small x
Math.expm1(x)     // Math.exp(x)-1; the inverse of Math.log1p
Math.sign(x)      // -1, 0, or 1 for arguments <, ==, or > 0
Math.imul(2,3)    // => 6: optimized multiplication of 32-bit integers
Math.clz32(0xf)   // => 23: number of leading zero bits in a 32-bit integer
Math.trunc(3.9)   // => 3: convert to an integer by truncating fractional part
Math.fround(x)    // Round to nearest 32-bit float number
Math.sinh(x)      // Hyperbolic sine. Also Math.cosh(), Math.tanh()
Math.asinh(x)     // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()

Infinity                  // A positive number too big to represent
Number.POSITIVE_INFINITY  // Same value
1/0                       // => Infinity
Number.MAX_VALUE * 2      // => Infinity; overflow
-Infinity                 // A negative number too big to represent
Number.NEGATIVE_INFINITY  // The same value
-1/0                      // => -Infinity
-Number.MAX_VALUE * 2     // => -Infinity

NaN                       // The not-a-number value
Number.NaN                // The same value, written another way
0/0                       // => NaN
Infinity/Infinity         // => NaN

Number.MIN_VALUE/2        // => 0: underflow
-Number.MIN_VALUE/2       // => -0: negative zero
-1/Infinity               // => -0: also negative 0
-0

// The following number properties are defined in ES6
Number.parseInt()       // Same as the global parseInt() function
Number.parseFloat()     // Same as the global parseFloat() function
Number.isNaN(x)         // Is x the NaN value?
Number.isFinite(x)      // Is x a number and finite
Number.isInteger(x)     // Is x an integer?
Number.isSafeInteger()  // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER // => 2**53 - 1
Number.EPSILON          // => 2*-52: smallest difference between numbers

let zero = 0;       // Regular zero
let negz = -0;      // Negative zero
zero === negz       // => true: zero and negative zero are equal
1/zero === 1/negz   // => false: Infinity and -Infinity are not equal

let x = .3 - .2;    // thirty cents minus 20 cents
let y = .2 - .1;    // twenty cents minus 10 cents
x === y             // => false: the two values are not the same!
x === .1            // => false: .3-.2 is not equal to .1
y === .1            // => true: .2-.1 is equal to .1

