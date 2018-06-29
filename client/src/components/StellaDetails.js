import React from 'react';
import { Icon, Statistic } from 'semantic-ui-react';

const StellaDetails = () => (
  <Statistic.Group widths='five'>
    <Statistic inverted style={styles.space}>
    <Statistic.Value><a style={styles.link} target='_blank' href='https://www.cars.com/research/ford-e250-1997/'><Icon name='truck' /></a>
      </Statistic.Value>            
      <Statistic.Label><a style={styles.link} target='_blank' href='https://www.cars.com/research/ford-e250-1997/'>Ford E250 Cargo Van</a></Statistic.Label>
    </Statistic>
    <Statistic inverted style={styles.space}>
      <Statistic.Value>
        <Icon name='plug' />
      </Statistic.Value>
      <Statistic.Label>City 11/Hwy 16/Comb 13</Statistic.Label>
    </Statistic>
    <Statistic inverted style={styles.space}>
      <Statistic.Value>
        <Icon name='cogs' />
      </Statistic.Value>
      <Statistic.Label>V8, 5.4 Liter</Statistic.Label>
    </Statistic>
    <Statistic inverted style={styles.space}>
      <Statistic.Value>
        <Icon name='bed' />
      </Statistic.Value>
      <Statistic.Label>256.5 cu.ft. cargo space</Statistic.Label>
    </Statistic>
    <Statistic inverted style={styles.space}>
      <Statistic.Value>
        <Icon name='plus' />
      </Statistic.Value>
      <Statistic.Label>4x4 & 4" lift</Statistic.Label>
    </Statistic>
  </Statistic.Group>
)

const styles = {
  link: {
    color: "rgba(255,255,255,.9)",
  },
  space: {
    padding: "0 10px 0 10px",
  },
}

export default StellaDetails;