import React from 'react';

const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hana", age: 5},
    {name: "Jiro"},
    {age: 15},
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>Hi, I am {props.name}, {props.age} years old!</div>
}

User.defaultProps = {
  name: "nanashi",
  age: 1
}


export default App;
