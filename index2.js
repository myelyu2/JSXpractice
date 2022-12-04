import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

let billionaires = [
  { name: 'Bill Gates', email: 'billg@microsoft.com', a:1, V: true, itakdalee:'1000000RAZ' },
  { name: 'Jeff Bezos', email: 'jeff@amazon.com' },
  { name: 'Mark Zuckerberg', email: 'zuck@fb.com' },
]

let billionaires4 = billionaires.map(el => ({
  ...el, 
  initials: el.name.split(' ').map(name => name[0]).join("")
}))

let elements = billionaires4.map(el => {
  return(
  <div className='Contact' key={el.email}>
    <div className='Contact-avatar'>{el.initials}</div>
    <span className='Contact-name'>{el.name}</span>
    <a href={'mailto:' + el.email}> {el.email} </a>
  </div>
  )
})

ReactDOM.render(
  <div className='ContactList'>{elements}</div>,
  document.getElementById('root')
)




