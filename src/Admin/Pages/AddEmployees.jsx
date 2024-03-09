import React from 'react'

function AddEmployees() {
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="row pad-botm">
          <div className="col-md-12">
            <h4 className="header-line">Add Employee</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="panel panel-info">
              
              <div className="panel-body">
                <form role="form">
                  <div className="form-group">
                    <label>Employee Name</label>
                    <input className="form-control" type="text" />
                  
                  </div>
                  <div className="form-group">
                    <label>Employee Email</label>
                    <input className="form-control" type="text" />
                  
                  </div>
                  
                  <div className="form-group">
                    <label>Select Role</label>
                    <select className="form-control">
                      <option>Select Role</option>
                      <option>Project Manager</option>
                      <option>Color Consultant</option>
                      <option>Marketing Specialist</option>
                      <option>Safety Officer</option>
                      <option>Safety Officer</option>
                    </select>
                  </div>
                  <hr />
                  
                  <hr />
                  <div className="form-group">
                    <label>Expertise</label>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultValue />Painting Techniques
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultValue />Product Knowledge
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultValue />Color Matching
                      </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultValue />Project Management
                      </label>
                    </div>
                  </div>
                  <hr />
                  
                </form></div>
              <button type="submit" className="btn btn-info">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployees