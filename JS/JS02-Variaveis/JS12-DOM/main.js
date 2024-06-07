const firstTitle = document.getElementById('firstTitle1');

firstTitle.style.color = 'Red';

const getByClass = document.getElementsByClassName('getClass');
console.log(getByClass);

for(let i = 0; i < getByClass.length; i++) {
    getByClass[1].style.color = 'blue';
}
console.log(getByClass); 




const byName = document.getElementsByName('child');

byName.forEach(item = (count, index) => {
    byName[index].style.color = 'blue'
});


const byTagName = document.getElementsByTagName('p');

for(let i = 0; i < byTagName.length; i++) {
    byTagName[i].style.color = 'white';
    byTagName[i].style.fontSize = '20px'
    byTagName[i].style.boxShadow = '4px 4px 4px black'
    byTagName[i].style.border = '2px solid black'
    byTagName[i].style.padding = '10px'
    byTagName[i].style.borderRadius = '100px'
    byTagName[i].style.backgroundColor = '#665'
    byTagName[i].style.textAlign = 'center'
    byTagName[i].style.fontFamily = 'arial'
    byTagName[i].style.fontWeight = '700'
    byTagName[i].style.width = '9%'
    byTagName[i].style.display = 'flex'
    byTagName[i].style.justifyContent = 'center'
    byTagName[i].style.height = '15vh'
    byTagName[i].style.alignItems = 'center'
    

    if( i % 2 == 0) {
        byTagName[i].style.backgroundColor = '#ffff8'
    } else {
        byTagName[i].style.backgroundColor = 'black'
    }

    if (i % 2 == 0) {
        byTagName[i].style.color = 'black'
    } else {
        byTagName[i].style.color = '#665'
    }
}

const remove = document.getElementById('remove1');
remove.remove();


console.log(byTagName);

