import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../services/authService';
import Joi from 'joi-browser';
import Form from './common/form';
import axios from 'axios';
import { apiUrl } from '../config.json';
import Dashboard from './admin/dashboard';
import LoginForm from './loginForm';
const apiEndpoint = apiUrl + '/ads';

export default class AdForm extends Form {
  state = {
    data: {
      title: '',
      description: '',
      requiredAmount: null,
    },
    errors: {},
    filename: 'Choose File',
    file: {},
    setUploadedFile: {},
    user: { role: '' },
  };

  async componentDidMount() {
    let user = auth.getCurrentUser();
    if (user) {
      const { data } = await axios.get(apiUrl + '/users/' + user._id);
      user = data[0];
      this.setState({ user });
    } else if (!user) {
      user = {
        _id: null,
      };
      this.setState({ user });
    }
  }

  schema = {
    title: Joi.string().required().min(25).max(40).label('Title'),
    description: Joi.string().required().min(50).label('Description'),
    status: Joi.string().label('Status'),
    requiredAmount: Joi.number()
      .required()
      .min(1)
      .max(1000000)
      .label('Required Amount'),
    raisedAmount: Joi.number(),
    imgUrl1: Joi.string(),
  };

  onFileChange = (e) => {
    const file = e.target.files[0];
    this.setState({ file });

    let filename = e.target.files[0].name;
    this.setState({ filename });
  };

  doSubmit = async () => {
    const formData = new FormData();
    formData.append('file', this.state.file);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { fileName, filePath } = res.data;

      const setUploadedFile = { fileName, filePath };
      this.setState({ setUploadedFile });

      console.log(setUploadedFile);
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }

    const result = await axios.post(apiEndpoint, {
      ...this.state.data,
      imageUrl: `http://localhost:3000${this.state.setUploadedFile.filePath}`,
      userId: this.state.user._id,
      userImage: this.state.user.imageUrl,
      userName: this.state.user.name,
      userPhone: this.state.user.phone,
      date: new Date(),
    });
    if (result) {
      toast.success('Your ad has been successfully added!');
    } else {
      toast.error('Oh something went wrong');
    }

    const data = { title: '', description: '' };

    this.setState({ data });
  };

  render() {
    if (this.state.user.role === 'Admin') {
      return <Dashboard />;
    }
    if (this.state.user.role === undefined) {
      return <LoginForm />;
    }
    return (
      <div className='container my-5'>
        <button
          onClick={() => this.props.history.goBack()}
          className='btn btn-cz'
        >
          Go Back
        </button>
        <h1>Post an Ad</h1>
        <ToastContainer />
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput(
              'title',
              'Title',
              'text',
              'Enter the title of your Ad'
            )}
            {this.renderTextArea(
              'description',
              'Description',
              'text',
              'Enter the description of the Ad'
            )}
            {this.renderInput(
              'requiredAmount',
              'Required Amount',
              'number',
              'Enter the required amount'
            )}

            <div className='row'>
              <div className='col-3'>
                <label htmlFor='Upload'>Upload an Image</label>
                <div className='custom-file mb-3'>
                  <input
                    type='file'
                    className='custom-file-input'
                    id='customFile'
                    onChange={this.onFileChange}
                  />
                  <label className='custom-file-label' htmlFor='customFile'>
                    {this.state.filename}
                  </label>
                </div>
              </div>
            </div>

            {this.renderButton('Submit')}
          </form>
        </div>
      </div>
    );
  }
}
