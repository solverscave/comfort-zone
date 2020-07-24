import React, { Component } from 'react';
import Table from './common/table';
import { Link } from 'react-router-dom';

class UsersTable extends Component {
  columns = [
    { path: 'membershipNumber', label: 'Membership Number' },
    {
      path: 'name',
      label: 'Name',
      // content: (user) => <Link to={`/users/${user._id}`}>{user.name}</Link>,
    },
    { path: 'phone', label: 'Phone' },
    { path: 'address', label: 'Address' },
    // { path: 'dailyRentalRate', label: 'Sector' },
    {
      key: 'delete',
      content: (user) => (
        <button
          className='btn-danger btn'
          onClick={() => this.props.onDelete(user)}
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { users, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={users}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default UsersTable;
