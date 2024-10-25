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
createHTMLElement("table","persontable",document.body)
createHTMLElementWithParentElement("thead","personthead","persontable")
createHTMLElementWithParentElement("tr","persontheadraw","personthead")
createHTMLElementWithParentElement("tbody","persontbody","persontable")


createTableHeaderCell()




//thfirstname.colSpan=2;


 


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
    
        rendertable(array)
        form.reset()

    }

    if(firstname2value === ''){
    firstname2value = undefined
} 
    

   
})

rendertable(array);


  

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

