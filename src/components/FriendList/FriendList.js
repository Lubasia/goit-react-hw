import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => (
    <ul className={styles.friend__list}>
        {friends.map(friend => (<li className={styles.item} key={friend.id}>
            <span
                className={
                    friend.isOnline ? styles.Online : styles.Offline
                }
            ></span>
  <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
            <p className={styles.name}>{friend.name}</p>
</li>))}
  
</ul>
    
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )

}

export default FriendList;