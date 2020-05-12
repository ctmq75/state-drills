import React from 'react';

class RouletteGun extends React.Component{
    static defaultProps = {
        bulletInChamber: 8
        }
    state = {
        chamber: null,
        spinningTheChamber: false,
      }
    componentWillUnmount() {
        clearTimeout(this.timeout)
      }
    handleClicks = () => {
        this.setState({
          spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
          const randomChamber = Math.ceil(Math.random() * 8)
    
          this.setState({
            chamber: randomChamber,
            spinningTheChamber: false,
          })
        }, 2000)
      }
    formatResponse() {
        const {chamber, spinningTheChamber} = this.state
        const {bulletInChamber} = this.props
        if (spinningTheChamber) {
          return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
          return 'BANG!!!!!'
        } else {
          return 'you are safe!'
        }
      }
    render() {
        return (
          <div className='RouletteGun'>
            <p>{this.formatResponse()}</p>
            <button onClick={this.handleClicks}>
              Pull the trigger!
            </button>
          </div>
        )
      }
    }


export default RouletteGun