function Clock() {}

Clock.at = function(h,m) {
  var h = h || 0;
  var m = m || 0;
  var time, newhour, newmin;
  
  function pad2(num)        {return (num<10) ? '0'+num : num.toString();}
  function formatTime(h,m)  {return pad2(h) + ':' + pad2(m);}
  
  time = formatTime(h,m);
  
  return {
    toString: function() {
      return time;
    },
    plus: function(min) {
      newhour = parseInt(h,10);
      newmin  = parseInt(m,10);
      if (min<60) {
        newmin  += min;
      } else {
        newhour += Math.floor(min/60);
        newmin  += min%60;
      }
      if (newmin >= 60) {newmin-=60; newhour+=1;}
      if (newhour >= 24) {newhour-=24;}
      time = formatTime(newhour, newmin);      
      return this;
    },
    minus: function(min) {      
      newhour = parseInt(h,10); 
      newmin  = parseInt(m,10); 
      if (min<60) {
        newmin  -= min;
      } else {
        newhour -= Math.floor(min/60);
        newmin  -= min%60;
      }
      if (newmin < 0) {newmin+=60; newhour-=1;}
      if (newhour < 0) {newhour+=24;}
      time = formatTime(newhour, newmin);      
      return this;
    },
    equals: function(clock) { 
      return clock.toString()===time;
    }
  }
}



module.exports = Clock;