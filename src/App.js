import logo from './logo.svg';
import './App.css';
import { Popconfirm, message } from 'antd';
import { Popover, Button } from 'antd';

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

function App() {
  return (
    <div className="kiosk-container2 center-center">
      <div className="kiosk-camera2 center-center">
        <img className="bgmap" src="https://i.imgur.com/mQd6FgQ.jpg" />
        <div className="articles container">
          <div className="article current">
            <div>
              <p className="item pos1">
                <span className="pin hvr-pulse">

                  <Popconfirm
                    title="Are you sure to delete this task?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <a href="#">
                      <Popover content={content} title="Area A">
                        <i className="fa fa-map-marker" style={{ color: '#FF8066' }} />
                      </Popover>
                    </a>
                  </Popconfirm>
                </span>
              </p>
            </div>
          </div>
          <div className="article">
            <div>
              <p className="item pos2">
                <span className="pin hvr-pulse">
                  <Popconfirm
                    title="Are you sure to delete this task?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <a href="#">
                      <Popover content={content} title="Area C">
                        <i className="fa fa-map-marker" style={{ color: '#FF8066' }} />
                      </Popover>
                    </a>
                  </Popconfirm>
                </span>
              </p>
            </div>
          </div>
          <div className="article">
            <div>
              <p className="item pos3">
                <span className="pin hvr-pulse">
                  <Popconfirm
                    title="Are you sure to delete this task?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <a href="#">
                      <Popover content={content} title="Area B">
                        <i className="fa fa-map-marker" style={{ color: '#FF8066' }} />
                      </Popover>
                    </a>
                  </Popconfirm>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
