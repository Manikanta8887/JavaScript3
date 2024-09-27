var family=["amma","nanna","sis","Pawan Kalyan"]
console.log(family);
console.log(family.length);
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
console.log(family[3]);

family[0]="queen";
family[1]="king";
family[2]="princess";
family[3]="hero";
console.log(family);

family[4]="movie";
console.log(family);

family[4]="OG";
console.log(family);
console.log(family.length);

var obj={
    name:"manikanta",
    age:22,
    job:"developer"
}

console.log(obj);

obj.loc="Hyderabad";
obj.fromloc="Rajahmundry";

console.log(obj);

obj.name="Mani";
obj.loc="Bengaluru";
obj.Salary="800000";
obj.job="Business";

console.log(obj);


var a=100; 
var a1=a.toString();
console.log(a1);

console.log(typeof a1,a1);

var a2=958.65464;
console.log(parseInt(a2));
console.log(typeof a2,a2);
console.log(parseFloat(a2));
console.log(isFinite(a2));

var b="manikanta";
console.log(isFinite(b));

var c=111.11;
console.log(c.toFixed(2));
console.log(c.toFixed(3));

var c1=111.11;
console.log(c1.toPrecision(10));
console.log(c1.toExponential(2));
console.log(c1.toExponential(3));
console.log(c1.toExponential(4));
console.log(c1.toExponential(5));

var s="20";
var t=isNan(s);
console.log(t);
