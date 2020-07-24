import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UsersTable from './usersTable';
import axios from 'axios';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import apiUrl from '../config.json';
import { ToastContainer, toast } from 'react-toastify';
import { getUsers, deleteUser } from '../services/fakeUserService';
import { getTypes } from '../services/fakeUserLevelService';
import { paginate } from '../utils/paginate';
import _ from 'lodash';
import SearchBox from './searchBox';
const apiEndpoint = apiUrl + '/users';

class Users extends Component {
  state = {
    users: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: '',
    selectedGenre: null,
    sortColumn: { path: 'membershipNumber', order: 'asc' },
  };

  async componentDidMount() {
    const { data: members } = await axios.get(
      'http://localhost:5000/api/users'
    );
    console.log(members);
    this.setState({ members });

    const genres = [{ _id: '', name: 'All Users' }, ...getTypes()];

    this.setState({ users: members, genres });
  }

  handleDelete = async (user) => {
    const originalUsers = this.state.users;
    const users = this.state.users.filter((d) => d._id !== user._id);

    this.setState({ users });

    try {
      await axios.delete(apiEndpoint + '/' + user._id);
      toast.success('Member has been removed!');
    } catch (ex) {
      toast.error('Failed to delete this member.');
      this.setState({ users: originalUsers });
    }
  };

  handleLike = (user) => {
    const users = [...this.state.users];
    const index = users.indexOf(user);
    users[index] = { ...users[index] };
    users[index].liked = !users[index].liked;
    this.setState({ users });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: '', currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      users: allUsers,
    } = this.state;

    let filtered = allUsers;
    if (searchQuery)
      filtered = allUsers.filter((m) =>
        m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allUsers.filter((m) => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const users = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: users };
  };

  render() {
    const { length: count } = this.state.users;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>Loading users...</p>;

    const { totalCount, data: users } = this.getPagedData();

    return (
      <div className='row'>
        {/* <div className='col-3'>
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div> */}
        <div className='col'>
          <Link
            to='/users/new'
            className='btn btn-cz'
            style={{ marginBottom: 20 }}
          >
            New User
          </Link>
          {/* <p>Showing {totalCount} users in the database.</p> */}
          <p>Showing {totalCount} users in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <UsersTable
            users={users}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Users;
