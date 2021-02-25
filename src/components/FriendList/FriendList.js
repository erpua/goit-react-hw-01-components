import React from 'react';

import PropTypes from 'prop-types';

import styles from './FriendList.module.css';

import FriendListItem from './FriendListItem';

const FriendsList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} friend={friend} />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendsList;
