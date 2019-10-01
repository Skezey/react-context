import React from 'react';
import { Card } from 'semantic-ui-react';
import { AccountConsumer } from '../../providers/AccountProvider';

const Account = () => (
  <AccountConsumer>
    { value => (
      <Card>
        <Card.Content>
          <Card.Header>{value.username}</Card.Header>
        </Card.Content>
          <Card.Meta>
            Date Joined: {value.datejoined}
          </Card.Meta>
        <Card.Content>
          <p>Membership Level: {value.membershiplevel}</p>
        </Card.Content>
      </Card>
    )}
  </AccountConsumer>
)

export default Account;
