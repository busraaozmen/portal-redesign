import { useEffect, useMemo, useState } from 'react';
import { useUsers, useFilteredUsers } from '@/hooks';
import SearchInput from '@/components/SearchInput';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const {data, isLoading} = useUsers();
  const filteredUsers = useFilteredUsers(data?.users, query);

  return (
    <div className="App">
      <header className="App-header">
        <SearchInput className={'App-header-search'} query={query} setQuery={setQuery} />
      </header>
      <main>
        <ul>
          {filteredUsers?.map((user) => (
            <li key={user.id}>{user.firstName} {user.lastName}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
