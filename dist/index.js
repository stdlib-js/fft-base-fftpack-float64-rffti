"use strict";var h=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var p=h(function(H,j){
var L=require('@stdlib/math-base-special-sincos/dist').assign,M=require('@stdlib/constants-float64-two-pi/dist'),P=require('@stdlib/math-base-special-floor/dist'),S=require('@stdlib/array-float64/dist'),b=require('@stdlib/fft-base-fftpack-float64-decompose/dist'),z=new S([4,2,3,5]);function B(a,r,v,u,f,e,O){var t,R,T,n,o,q,l,i,s,_,c,m,x,g,A,I;if(o=b(a,4,z,1,0,f,e,O),o-1!==0)for(T=M/a,m=1,i=1,n=O+2*e,_=2*v,A=0;A<o-1;A++){for(t=f[n],l=t*i,x=P(a/l),s=0,I=1;I<t;I++){for(s+=i,R=s*T,q=1,c=u+m*v,g=2;g<x;g+=2)L(q*R,r,-v,c),q+=1,c+=_;m+=x}i=l,n+=e}}j.exports=B
});var C=h(function(J,y){
var D=p();function E(a,r,v,u){var f,e;return a===1||(f=u+a*v,e=f+a*v,D(a,r,v,f,r,v,e)),r}y.exports=E
});var F=C();module.exports=F;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
