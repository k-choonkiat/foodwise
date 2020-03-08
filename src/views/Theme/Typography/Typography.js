import React, { Component } from 'react';

class Typography extends Component {
  render() {
    return (
      <div className="animated fadeIn">
      
        <div className="card">
          <div className="card-header">
            Display headings
          </div>
          <div className="card-body">
            <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using
              a <strong>display heading</strong>—a larger, slightly more opinionated heading style.</p>
            <div className="bd-example bd-example-type">
              <table className="table">
                <tbody>
                  <tr>
                    <td><span className="display-1">Display 1</span></td>
                  </tr>
                  <tr>
                    <td><span className="display-2">Display 2</span></td>
                  </tr>
                  <tr>
                    <td><span className="display-3">Display 3</span></td>
                  </tr>
                  <tr>
                    <td><span className="display-4">Display 4</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
       </div>
         
      
    );
  }
}

export default Typography;
