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


 
document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault()
    const form = e.currentTarget

    if(validateFields("lastname", "firstname1", "pet")){
        const person_new =  {
            firstname1: document.getElementById('firstname1').value,
            firstname2: document.getElementById('firstname2').value,
            lastname: document.getElementById('lastname').value,
            married: document.getElementById('married').checked,
            pet: document.getElementById('pet').value,

        }


        array.push(person_new)
        console.log(array)
        rendertable(array)
    }

    form.reset
})
rendertable(array)

