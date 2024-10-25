/**
 * 
 * @param {'td'|'th'} tagName 
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parentElement 
 * @returns {HTMLTableCellElement}
 */
function createTableCell(tagName,innerHTML,parentElement){
    const tag = document.createElement(tagName) 
    tag.innerHTML = innerHTML;
    parentElement.appendChild(tag)
    return tag
}


/**
 * 
 * @param {'td'|'th'} tag 
 * @param {string} id 
 * @param {HTMLTableRowElement} parentElement 
 */
function createHTMLElement(tag,id,parentElement){

    const HTMLelement = document.createElement(tag);
    HTMLelement.id = id;
    parentElement.appendChild(HTMLelement)
}



/**
 * 
 * @param {'td'|'th'} tag 
 * @param {string} id 
 * @param {HTMLTableRowElement} parentElement 
 */
function createHTMLElementWithParentElement(tag,id,parentId){

   const parentElement = document.getElementById(parentId)


   if(parentElement != undefined){
    createHTMLElement(tag,id,parentElement)
   } 
}

function createTableHeaderCell(){
const theadraw = document.getElementById("persontheadraw");
createTableCell("th",'Vezeteknev', theadraw);
const Keresztnev_createtablecell=createTableCell("th",'Keresztnev', theadraw);
createTableCell("th",'Házas', theadraw);
createTableCell("th",'Állat', theadraw);
Keresztnev_createtablecell.colSpan=2;

}

function rendertable(person_array){
    const tbody = document.getElementById("persontbody")
    tbody.innerHTML=""
    for (const pers of person_array) {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);

        createTableCell('td', pers.lastname, tr); // Vezetéknév
        createTableCell('td', pers.firstname1, tr); // Keresztnév 1
        createTableCell('td', pers.firstname2 !== undefined ? pers.firstname2 : '', tr); // Keresztnév 2
        createTableCell('td', pers.married ? 'igen' : 'nem', tr); // Házas
        createTableCell('td', pers.pet, tr); // Állat

        

        tr.addEventListener('click', function(e) {
            console.log('clicked');
            const selector = tbody.querySelector('.selected');
            if (selector != undefined) {
                selector.classList.remove('selected');
            }
            e.currentTarget.classList.add('selected');
        });
    }
}
