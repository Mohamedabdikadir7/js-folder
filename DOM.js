// document.getElementsByTagName("h1")[0]
// h1.textContent('zeytun')
// textContent.body.append('h1')

// const h1Element = document.getElementsByTagName("h1")[0];
// h1Element.textContent = 'Zeytun';
//  document.getElementsByClassName('dom')


 // creating a new h1 
 const head = document.createElement("h1")
 head.textContent = 'DOMlearning'
document.body.append(head)

// creating a new p
const paragraph1 = document.createElement("p")
paragraph1.textContent = 'welcome to LOBOI'
document.body.append(paragraph1)

// paragraph1.remove();

// creating a new h1 
let name1 = document.createElement('h3')
name1.textContent = 'welcome to mombasa'
document.body.append(name1)

const head1 = document.createElement("h1")
head.textContent = 'DOMlearning'
document.body.append(head1)
head1.remove()

// replacing an existing one / p

let paragraph2 = document.getElementsByTagName('p')[2]
paragraph2.textContent = 'welcome to wajir'

// replacing an h1

let head2 = document.getElementsByTagName('h1')[1]
head2.textContent = 'welcome to kilifi'