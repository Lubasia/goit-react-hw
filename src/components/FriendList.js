import React from 'react';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
    <ul class="friend-list">
        {friends.map(friend => (<li class="item" key={friend.id}>
  <span class="status"></span>
  <img class="avatar" src={friend.avatar} alt="" width="48" />
            <p class="name">{friend.name}</p>
</li>))}
  
</ul>
    
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnlyne: PropTypes.bool.isRequired,
        })
    )

}

export default FriendList;