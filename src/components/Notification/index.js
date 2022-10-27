// Write your code here
import {Component} from 'react'
import {GrFormClose} from 'react-icons/gr'
import './index.css'

class Notification extends Component {
  render() {
    const {children} = this.props
    return (
      <div className="container">
        {children}
        <div>
          <GrFormClose />
        </div>
      </div>
    )
  }
}

export default Notification
