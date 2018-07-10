import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { get, invoke } from 'lodash';
import Wrapper from './Wrapper';
import Input from './Input';

class Searchbox extends Component {
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
          placeholder="Search something"
        />
      </Wrapper>
    );
  }
}

Searchbox.defaultProps = {
  minCharacters: 1,
  onChange: () => {}
};

Searchbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  minCharacters: PropTypes.number
};

export default Searchbox;
