module.exports = function solveEquation(equation) {
  str = equation.replace(/\s/g, '');
  var IndexFirst=str.search(/x/i);
  var a = +str.substring(0,IndexFirst-1);
  var NewStr = str.slice(IndexFirst+3,str.length);
  var IndexSecond = NewStr.search(/x/i);
  var b = +NewStr.substring(0,IndexSecond-1);
  var c = +NewStr.slice(IndexSecond+1,NewStr.length );
  var D = Math.pow(b,2)-4*a*c;
  var x2 = (-b-Math.sqrt(D))/2/a;
  var x1 = (-b+Math.sqrt(D))/2/a;
  var solutions=[];
  solutions.push(Math.round(x1),Math.round(x2));
  for(var i=0; i < solutions.length; i++){
    if (solutions[i]>solutions[i+1]){
      var num=solutions[i];
      solutions[i]=solutions[i+1];
      solutions[i+1]=num;
    }
  }
  console.log(solutions);
  return solutions;
}
// const solutions = solveEquation(equation);
// console.log(solutions); // [2, 3]