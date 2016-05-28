
if (document.querySelectorAll('a').length) {
    require.ensure([],()=>{
        var d=require('./require.default').default;
        d();
    })

}
