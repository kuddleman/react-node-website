import React, { useState } from 'react';

const Feedback = () => {

    const [ values, setValues ] = useState({
      name: '',
      email: '',
      message: '',
      phone: '',
      uploadedFiles: [],
      buttonText: 'Submit',
      uploadPhotosButtonText: 'Upload files'
    })

    //destructure state variables:

    const { name, email, message, phone, uploadedFiles, buttonText, uploadPhotosButtonText } = values

    //event handlers:
    const handleChange = () => {
      console.log('handle change!')
    }

    const handleSubmit = () => {
      console.log('handle submit!')
    }

   
  

    const feedbackForm = () => (
      <React.Fragment>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="text-muted">Description</label>
            <textarea onChange={handleChange('message')} 
                      type="text" 
                      className="form-control" 
                      value={message} 
                      required
            >    
            </textarea>
          </div>
          <div className="form-group">
            <label className="text-muted">Your Name</label>
            <input type="text" 
                   className="form-control"
                   onChange={handleChange('name')} 
                   value={name} 
                   required
            />
          </div>
          <div className="form-group">
            <label className="text-muted">Your Email</label>
            <input type="email" 
                   className="form-control"
                   onChange={handleChange('email')} 
                   value={email} 
                   required
            />
          </div>
          <div className="form-group">
            <label className="text-muted">Your Best Phone Number</label>
            <input type="number"
                   className="form-control" 
                   onChange={handleChange('phone')} 
                   value={phone} 
                   required
            />
          </div>

          <button className="btn btn-outline-primary btn-block">{buttonText}</button>

        </form>
      </React.Fragment>
    )

  return (
            <div className="p-5">
              {feedbackForm()}
            </div>
         )
}


export default Feedback;