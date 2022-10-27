// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Alert Notifications</h1>
        <div className="notification-container">
          <Notification>
            <div className="close">
              <div>
                <div className="message-container">
                  <AiFillCheckCircle className="success-icon" />
                  <h1 className="text-success">Success</h1>
                </div>
                <div className="desc">
                  <p className="msg-text">
                    You can access all the files in the folder
                  </p>
                </div>
              </div>
            </div>
          </Notification>
          <Notification>
            <div className="close">
              <div>
                <div className="message-container">
                  <RiErrorWarningFill className="danger-icon" />
                  <h1 className="text-error">Error</h1>
                </div>
                <div className="desc">
                  <p className="msg-text">
                    Sorry, you are not authorized to have access to delete the
                    file
                  </p>
                </div>
              </div>
            </div>
          </Notification>
          <Notification>
            <div className="close">
              <div>
                <div className="message-container">
                  <MdWarning className="warning-icon" />
                  <h1 className="text-warning">Warning</h1>
                </div>
                <div className="desc">
                  <p className="msg-text">
                    Viewers of this file can see comments and suggestions
                  </p>
                </div>
              </div>
            </div>
          </Notification>
          <Notification>
            <div className="close">
              <div>
                <div className="message-container">
                  <MdInfo className="info-icon" />
                  <h1 className="text-info">Info</h1>
                </div>
                <div className="desc">
                  <p className="msg-text">
                    Anyone on the internet can view these files"
                  </p>
                </div>
              </div>
            </div>
          </Notification>
        </div>
      </div>
    )
  }
}

export default AlertNotifications
