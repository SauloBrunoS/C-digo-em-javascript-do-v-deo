const I = a => a

console.log(I(1))
console.log(I(2))
console.log(I(I))

add = a => b => a+b;

console.log(add(1))

console.log(add(1)(2))

M = f => f(f);

console.log(M(I))

try{ M(M)} catch(e) { console.log(e.message)}

K = a => b => a

console.log(K(I)(M))

console.log(K(K)(M))

console.log(K(K)(I))

console.log(K(3)(I))

console.log(K5 = K(5))

console.log(K5(3))

console.log(K5(9))

console.log(K(I)(1)(2))

KI = a => b => b

console.log(KI(4)(9))

console.log(KI(M)(KI))

C = f => a => b => f(b)(a)

console.log(C(K)(1)(2))

T = K
F = KI

T.inspect = () => 'T / K'
F.inspect = () => 'F / KI'
console.log(T) 
console.log(F)

not = p => p(F)(T)

console.log(not(T))
console.log(not(F))

console.log(C(T))

console.log(C(T)(1)(2))
console.log(C(F)(1)(2))

and = p => q => p(q)(p)

console.log(and(F)(T))
console.log(and(T)(T))
console.log(and(T)(F))
console.log(and(F)(F))

or = p => q => p(p)(q)

console.log(or(T)(F))
console.log(or(F)(F))
console.log(or(F)(T))
console.log(or(T)(T))

console.log(M(T)(F))
console.log(M(F)(F))
console.log(M(F)(T))
console.log(M(T)(T))

beq = p => q => p(q)(not(q))

console.log(beq(T)(T))
console.log(beq(T)(F))
console.log(beq(T)(T))
console.log(beq(F)(T))