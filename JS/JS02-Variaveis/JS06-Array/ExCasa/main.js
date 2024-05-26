console.log ("Exercício 1");

const arrayUni = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995,
 "React", 2013, "Java", 1995];

 console.log (arrayUni);
 console.log (arrayUni.length);
 console.log (arrayUni[6]);

 const transf = (arrayUni.toString());
 console.log (typeof(transf));

 console.log (arrayUni.join("/"));

 (arrayUni.unshift("IOS"));
 console.log (arrayUni);

 console.log ("");
 console.log ("Exercício 2");

const arrayBid = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995]
];

console.log (arrayBid);
console.log (arrayBid.length);
console.log (arrayBid[2][1]);

arrayBid[1][2] = "JavaScript";
console.log(arrayBid[1]);

delete arrayBid[2][2];
console.log (arrayBid[2]);

(arrayBid[2].push("Pipoca"));
console.log (arrayBid[2]);