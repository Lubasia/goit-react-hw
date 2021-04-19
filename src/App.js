import React from 'react';
import 'modern-normalize/modern-normalize.css';
import Profile from './components/Profile/Profile';
import user from '../src/users.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from '../src/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from '../src/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';


const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
</>
);




export default App;

