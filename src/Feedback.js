import React, { useState } from 'react';

const Feedback = () => {

    const [ values, setValues ] = useState({
      name: '',
      email: '',
      message: '',
      phone: '',
      uploadedFiles: [],
      buttonText: 'Submit',
      uploadPhotoButtonText: 'Upload files'
    })
    
  return (<div className="p-5">
              <p>Hello from FEEDBACK</p>
          </div>
         )
}


export default Feedback;