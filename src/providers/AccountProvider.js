import React, { Component } from 'react';
const AccountContext = React.createContext();
export const AccountConsumer = AccountContext.Consumer;
//provides account info to the entire app

class AccountProvider extends Component {
  state = {
    username: 'Fooman234',
    datejoined: '12/12/12',
    membershiplevel: 'Silver',
    updateAccount: (account) => this.updateAccount(account),
  }

  updateAccount = (account) => {
    this.setState({ ...account })
  }

	render() {
		return(
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>
    )
	}
}

export default AccountProvider;
