export const currencyFormatter = (value:number)=>{
    return value.toLocaleString('es-AR',{
        style:'currency'
        ,currency:'USD',
        minimumFractionDigits:2
    })
}