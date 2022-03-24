function cone(radius, height){
    let volume = (1/3) * Math.PI * radius* radius * height;
    let slant = Math.sqrt((Math.pow(radius,2) + Math.pow(height,2)), 2);
    let lateralSurface = Math.PI * radius * slant;
    let baseSurface = Math.PI * Math.pow(radius, 2);
    let totalSurface = lateralSurface + baseSurface;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurface.toFixed(4)}`);
}
cone(3, 5);