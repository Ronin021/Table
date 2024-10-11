let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]
const table=document.createElement(`table`);
document.body.appendChild(table);

const thead=document.createElement(`thead`);
const theadraw= document.createElement(`tr`);
const thlastname = document.createElement(`th`);
const thfirstname = document.createElement(`th`);
const thmarried = document.createElement(`th`);
const thpet = document.createElement(`th`);
const tbody = document.createElement(`tbody`);





thfirstname.colSpan=2;
thlastname.innerHTML=`Vezeteknev`;
thfirstname.innerHTML=`  Keresztnev`;
thpet.innerHTML=`Háziállat`
thmarried.innerHTML=`Házas`

table.appendChild(thead);
thead.appendChild(theadraw);
theadraw.appendChild(thlastname);
theadraw.appendChild(thfirstname);
theadraw.appendChild(thpet)
theadraw.appendChild(thmarried);
table.appendChild(tbody);






const form = document.getElementById(`form`)

form.addEventListener(`submit`, function(e){
    e.preventDefault(); 
    const lastname = document.getElementById(`lastname`);
    const firstname1 = document.getElementById(`firstname1`);
    const firstname2 = document.getElementById(`firstname2`);
    const married = document.getElementById(`married`);
    const pet = document.getElementById(`pet`);

    const lastnamevalue = lastname.value;
    const firstname1value = firstname1.value
    let firstname2value = firstname2.value
    const marriedchecked = married.value
    const petvalue = pet.value
if(firstname2value === ''){
    firstname2value = undefined
} 
    const newperson={
        firstname1: firstname1value,
        firstname2: firstname2value,
        lastname: lastnamevalue,
        married: marriedchecked,
        pet: petvalue
        
    }

    array.push(newperson);
    console.log(array)

    rendertable()
})

rendertable();


function rendertable(){
    tbody.innerHTML= '';
    for(const pers of array){
        const tr = document.createElement('tr');
        const td = document.createElement('td'); //lastname
        const td2 = document.createElement('td'); //firstname1
        const td3 = document.createElement('td');//firstname2
        const td4 = document.createElement('td');//married
        const td5 = document.createElement('td');//pet
     
        tr.addEventListener(`click`, function(e) {
            console.log(`clicked`);
            
            const selector = tbody.querySelector(`.selected`);
            
            if(selector != undefined){
                selector.classList.remove(`selected`)
            }
             e.currentTarget.classList.add(`selected`);
        })
       
     
        tbody.appendChild(tr);
        tr.appendChild(td);
        tr.appendChild(td2);
       
        
     
     
        td.innerHTML = pers.lastname;
        td2.innerHTML = pers.firstname1;
        td3.innerHTML = pers.firstname2;
        td4.innerHTML = pers.married
        td5.innerHTML = pers.pet
    
        if(pers.married === true){
            td4.innerHTML=`igen`
        }
        else{
            td4.innerHTML=`nem`
        }
     
     if(pers.firstname2=== undefined ){
        td2.colSpan = 2;
     }
     else{
        tr.appendChild(td3);
        
     }
      tr.appendChild(td5);
      tr.appendChild(td4);
        
     
    }

}
