
if (document.querySelectorAll('a').length) {
    require('./modules/m.css')
    require.ensure([],()=>{
        var d=require('./modules/require.default').default;
        d();
    });

}
