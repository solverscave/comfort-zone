import React, { Component } from 'react';
import { paginate } from '../../../utils/paginate';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from '../../common/pagination';
import ListGroup from '../../common/listGroup';
import auth from '../../../services/authService';
import { apiUrl } from '../../../config.json';
const apiEndpoint = apiUrl + '/ads';

export default class AdsMembers extends Component {
  state = {
    ads: [],
    condition: [
      { _id: 0, name: 'All' },
      { _id: 1, name: 'new' },
      { _id: 2, name: 'used' },
    ],
    pageSize: 5,
    currentPage: 1,
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
      console.log(user);
    }

    const { data: ads } = await axios.get(apiEndpoint + '/user/' + user._id);
    this.setState({ ads });
  }

  handleDelete = async (ad) => {
    const originalAds = this.state.ads;
    const ads = this.state.ads.filter((a) => a._id !== ad._id);

    this.setState({ ads });

    try {
      await axios.delete(apiEndpoint + '/' + ad._id);
      toast.success('You ad is successfully deleted!');
    } catch (ex) {
      toast.error('Failed to delete the complain!');
      this.setState({ ads: originalAds });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleConditionSelect = (condition) => {
    this.setState({ selectedCondition: condition, currentPage: 1 });
    console.log(this.state.selectedCondition);
  };

  render() {
    console.log(this.state.ads);
    if (!this.state.ads.length)
      return (
        <div
          className='align-self-center justify-content-center text-center'
          style={{ padding: '100px' }}
        >
          <img src={require('../../../assets/icons/loading.gif')} alt='' />
        </div>
      );
    if (this.state.ads === 'No ad was found in the database under this user!')
      return (
        <h1
          className='align-self-center justify-content-center text-center'
          style={{ padding: '100px' }}
        >
          You haven't posted any ad! <br />
          <Link to='/advertisement/form' className='btn btn-cz'>
            Post an ad
          </Link>
        </h1>
      );
    const { ads: allAds, pageSize, currentPage } = this.state;

    const filtered =
      this.state.selectedCondition && this.state.selectedCondition._id
        ? allAds.filter(
            (i) => i.condition === this.state.selectedCondition.name
          )
        : allAds;

    const ads = paginate(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className='row'>
          <ToastContainer />
          <div className='col-3'>
            {
              <ListGroup
                items={this.state.condition}
                onItemSelect={this.handleConditionSelect}
                selectedItem={this.state.selectedCondition}
              />
            }
          </div>
          <div className='col-9'>
            <table className='table'>
              <thead style={{ color: '#fff', backgroundColor: ' #159570' }}>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Ads</th>
                  <th scope='col'>Posted by</th>
                  <th scope='col'>Condition</th>
                  <th scope='col'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {ads.map((ad) => (
                  <tr key={ad._id}>
                    <th scope='row'>{ads.indexOf(ad)}</th>
                    <td>
                      <Link to={`/advertisement/${ad._id}`}>{ad.title}</Link>
                    </td>
                    <td>{ad.userName}</td>
                    <td>{ad.condition}</td>
                    <td>
                      <button
                        className='btn btn-danger'
                        onClick={() => this.handleDelete(ad)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
