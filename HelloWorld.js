import React from 'react'

class HelloWorld extends React.Component{

    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = {
          name: 'World'
        }
      }

      render() {
        return (
          <div>
            <p>Hello,  {this.state.name}</p>
            <button onClick={() => this.setState({ name: 'World' })}>
              World
            </button>

            <button onClick={() => this.setState({ name: 'Friend' })}>
              Friend
            </button>

            <button onClick={() => this.setState({ name: 'React' })}>
              React
            </button>
          </div>
        )
      }
}


export default HelloWorld