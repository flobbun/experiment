export function randomRange(min, max, float){
    if(float) return Math.random() * (max+1 - min) + min;
    if(!float) return Math.floor(Math.random() * (max+1 - min)) + min;
}