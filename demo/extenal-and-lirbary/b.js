/**
 * Created by flftfqwxf on 16/5/27.
 */
var m=require('./a');
m('b');
if (document.querySelector('a').length) {
    
  require.ensure([],()=>{
      const c=require('./d');
      c();

  })
}