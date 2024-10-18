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
const tbody = document.createElement(`tbody`);





//thfirstname.colSpan=2;

createTableCell("th",'Vezeteknev', theadraw);
createTableCell("th",'Keresztnev', theadraw);
createTableCell("th",'Házas', theadraw);
createTableCell("th",'Állat', theadraw);




const form = document.getElementById(`form`)

form.addEventListener(`submit`, function(e){
    e.preventDefault(); 
    const lastname = document.getElementById(`lastname`);
    const firstname1 = document.getElementById(`firstname1`);
    let firstname2 = document.getElementById(`firstname2`);
    const married = document.getElementById(`married`);
    const pet = document.getElementById(`pet`);

    const lastnamevalue = lastname.value;
    const firstname1value = firstname1.value
    let firstname2value = firstname2.value
    const marriedchecked = married.value
    const petvalue = pet.value


    if(validateFields(lastname, firstname1, pet)){
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
        
    }

    if(firstname2value === ''){
    firstname2value = undefined
} 
    

   
})

rendertable();


function rendertable(){
    tbody.innerHTML= '';
    for(const pers of array){
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        const td = document.createElement('td'); //lastname
        const td2 = document.createElement('td'); //firstname1
        const td3 = document.createElement('td');//firstname2
        const td4 = document.createElement('td');//married
        const td5 = document.createElement('td');//pet
     
        
       
     
        
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
        const td2 = document.createElement('td');

        tr.appendChild(td3);

        td2.innerHTML= pers.firstname2;
        
     }
     tr.addEventListener(`click`, function(e) {
        console.log(`clicked`);
        
        const selector = tbody.querySelector(`.selected`);
        
        if(selector != undefined){
            selector.classList.remove(`selected`)
        }
         e.currentTarget.classList.add(`selected`);
    })
    
      tr.appendChild(td5);
      tr.appendChild(td4);
        
     
    }

}


function validateFields(lastnameHTML, firstname1HTML, petHTML){
    let result = true
    if(lastnameHTML.value === ''){
       const apa = lastnameHTML.parentElement
       
       const err = apa.querySelector('.error');
       err.innerHTML= 'Kötelező'

       result=false
       
       
    }
    if(firstname1HTML.value === ''){
        const apa = firstname1HTML.parentElement
        const err = apa.querySelector('.error');
        err.innerHTML= 'Kötelező'

        result=false
        
        
     }
     if(petHTML.value === ''){
        const apa = petHTML.parentElement
        const err = apa.querySelector('.error');
        err.innerHTML= 'Kötelező'
        result=false
        
     }
    return result
}
/**
 * 
 * @param {'td'|'th'} tagName 
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parentElement 
 */
function createTableCell(tagName,innerHTML,parentElement){
    const tag = document.createElement(tagName) 
    tag.innerHTML = innerHTML;
    parentElement.appendChild(tag)
}