import React from 'react';
import { Table, Header } from 'semantic-ui-react';

class StellaDetails extends React.Component {

  render() {
    return(
      <div>
      <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Vehicle</Table.HeaderCell>
        <Table.HeaderCell>MPG</Table.HeaderCell>
        <Table.HeaderCell>ENGINE</Table.HeaderCell>
        <Table.HeaderCell>SEATS</Table.HeaderCell>
        <Table.HeaderCell>CARGO SPACE</Table.HeaderCell>
        <Table.HeaderCell>UPGRADES</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4'>
          <a target='_blank' href='https://www.cars.com/research/ford-e250-1997/'>Ford Econoline E250 Cargo Van</a>
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>City 11/Hwy 16/Comb 13 MPG</Table.Cell>
        <Table.Cell>
          V8, 5.4 Liter
        </Table.Cell>
        <Table.Cell>
          2 seats
        </Table.Cell>
        <Table.Cell>
          256.5 cu.ft.
        </Table.Cell>
        <Table.Cell>
          4x4
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </div>
    )
  }
}

export default StellaDetails;