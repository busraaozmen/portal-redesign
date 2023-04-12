import { useState } from 'react';
import { useUsers, useFilteredUsers } from '@/hooks';
import { SearchInput, CustomerList } from '@/components';
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
        <CustomerList users={filteredUsers} />
      </main>
    </div>
  );
}

export default App;
