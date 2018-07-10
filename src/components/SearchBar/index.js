import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { get, invoke } from 'lodash';
import Wrapper from './Wrapper';
import Input from './Input';

class SearchBar extends Component {
  state = { isEmpty: true, value: '' };

  handleChange = e => {
    const value = get(e, ['target', 'value']);
    invoke(this.props, 'onChange', e, { ...this.props, value });
    this.setState({ isEmpty: value === '', value });
  };

  render() {
    return (
      <Wrapper>
        <Input
          ref={input => (this.input = input)}
          onChange={this.handleChange}
          value={this.state.value}
          placeholder="Type something"
        />
      </Wrapper>
    );
  }
}

SearchBar.defaultProps = {
  minCharacters: 1,
  onChange: () => {}
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  minCharacters: PropTypes.number
};

export default SearchBar;
