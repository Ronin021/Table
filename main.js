const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]
const table=document.createElement(`table`);
document.body.appendChild(table);

const thead=document.createElement(`thead`);
const theadraw= document.createElement(`tr`);
const thlastname = document.createElement(`th`);
const thfirstname = document.createElement(`th`);
const tbody = document.createElement(`tbody`);


for(const pers of array){
    const tr = document.createElement('tr');
    const td = document.createElement('td'); // lastname
    const td2 = document.createElement('td'); //firstname1
    const td3 = document.createElement('td');//firstname2
 
 
 
    tbody.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(td2);
    
 
 
    td.innerHTML = pers.lastname;
    td2.innerHTML = pers.firstname1;
    td3.innerHTML = pers.firstname2;
 
 if(pers.firstname2=== `undefined`){
    td2.colspan = 2;
 }
 else{
    tr.appendChild(td3);
    
 }
 
}


thfirstname.colSpan=2;
thlastname.innerHTML=`Vezeteknev`;
thfirstname.innerHTML=`  Keresztnev`;
table.appendChild(thead);
thead.appendChild(theadraw);
theadraw.appendChild(thlastname);
theadraw.appendChild(thfirstname);
table.appendChild(tbody);

