function Lista(id,nome){
    this.id=id;
    this.nome=nome;
}

var arra = [];
lista = new Lista('0','Joao');
arra.push(lista);
lista1= new Lista('1','Ian');
arra.push(lista1);
lista2= new Lista('2','Andrew');
arra.push(lista2);
lista3= new Lista('3','Yuri');
arra.push(lista3);
lista4= new Lista('4','Vitao');
arra.push(lista4);
lista5= new Lista('5','Saulo');
arra.push(lista5);

for(var i=0;i<arra.length;i++){
console.log(arra[i]);
}
