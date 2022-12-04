let avatars = ["JN", "M"]
let names = ["James Nelson", "Me"]
let mails = ["james@frontarm.com", "me@example.com"]

const users = [
  { avatar: 'JN', name: 'James Nelson', mail: 'james@frontarm.com'},
  { avatar: 'M', name: 'Me', mail: 'me@example.com'}
]

const Title = ({title}) => (
  <h1 className="ContactList-title"> {title} </h1>
)
  
const Contact = ({user}) => (
  <div className = 'Contact'>
    <div className = 'Contact-avatar'> {user.avatar} </div>
    <span className = 'Contact-name'> {user.name} </span>
    <a href={'mailto:' + user.mail}> {user.mail} </a>
  </div>
)
  
const MyRoot = () => {
  return (
    <div className="ContactList">
      <Title title="Contacts"/>
      {
        users.map(user => <Contact key={user.mail} user={user}/>)
      }
    </div>
  )
}

// The `ReactDOM` variable is set by the second `<script>` tag
// in the above HTML file
let domNode = document.getElementById('root')
ReactDOM.render(<MyRoot />, domNode)
