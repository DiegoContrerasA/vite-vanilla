export const suma=(a,b=1) => {
return a+b

}

export const multiplicar=({a,b=2})=> {
    return a*b
}
//si a y b, sumar.
//si a y c, resta a-c
//si b y c, multiplicar
export function operacion({a,b,c}) {
    
    if(!a && !b && !c)  throw Error('Missing params')
    if(a && b) return a+b
    if(a && c) return a-c
    if(b && c) return b*c
    throw Error('Missing second params')
   
}

