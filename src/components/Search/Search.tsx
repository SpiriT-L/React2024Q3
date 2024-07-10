import Input from '../Input';
// import { useState } from 'react';
// import Api from '../../services/api/api';

// export default function Search() {
//   const [query, setQuery] = useState('');

//   return (
//     <div>
//       <Input
//         type="text"
//         title="Search"
//         placeholder="Search..."
//         onChange={event => setQuery(event.target.value)}
//         value={query}
//       />
//       <Api />
//     </div>
//   );
// }

import { Component } from 'react';
import Api from '../../services/api/api';

interface MyState {
  inputValue: string;
}

class Search extends Component<{}, MyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    this.setState({ inputValue: newValue });
    localStorage.setItem('myInputValue', newValue);
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <Input
          type="text"
          title="Search"
          value={inputValue}
          onChange={this.handleInputChange}
          placeholder="Enter something..."
        />
        <p>Stored value: {localStorage.getItem('myInputValue')}</p>
        <Api />
      </div>
    );
  }
}

export default Search;
