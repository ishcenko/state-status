import React from 'react';
import Counter from './components/Counter/Counter';

const App = () => (
  <>
    <h1>Стан компонента</h1>
    <Counter initialValue={1} />
  </>
);
export default App;
