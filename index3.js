import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'


let billionaires = [
  {
    name: 'Bill Gates',
    email: 'billg@microsoft.com',
    photoURL: 'https://frontarm.com/courses/react-fundamentals/bill-gates.jpg'
  },
  {
    name: 'Jeff Bezos',
    email: 'jeff@amazon.com',
    photoURL: 'https://frontarm.com/courses/react-fundamentals/jeff-bezos.jpg'
  },
  {
    name: 'Mark Zuckerberg',
    email: 'zuck@fb.com'
  },
]

let billionaires2 = billionaires.map(el => ({
  ...el,
  initials: el.name.split(' ').map(name => name[0].toUpperCase()).join('')
}))

function getAvatar(contact) {
  if (contact.photoURL) {
    return <img src={contact.photoURL} alt=""/>
  } else {
    return contact.initials
  }
}
  
let elements = billionaires2.map(contact => (  
  <div className='Contact' key={contact.email}>
    <div className='Contact-avatar'> {getAvatar(contact)}</div>
    <span className='Contact-name'>{contact.name}</span>
    <a href={'mailto:'+contact.email}>
      {contact.email}
    </a>
  </div>
))


ReactDOM.render(
  <div className='ContactList'>{elements}</div>,
  document.getElementById('root')
)
