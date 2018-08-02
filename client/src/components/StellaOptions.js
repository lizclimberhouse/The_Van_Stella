import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import pic1 from '../images/mountains1.jpg'
import pic2 from '../images/mountains.png'
import pic3 from '../images/tree.png'
import { BackFade2 } from './StyledComp'

class StellaOptions extends React.Component {

  render() {
    const { option } = this.props
    if (option == 'GettingStella') {
      return(
        <BackFade2>
          <Header as='h2'>Getting Stella</Header>
          <Image size='large' src={pic1} size='small' floated='left' />
          <p>
            Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem,
            est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum
            ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
            ex natum rebum iisque. Te est latine definitiones. Quot wisi
            nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
            fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
          </p>
          <Image src={pic2} size='small' floated='right' />
          <p>
            Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
            nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
            fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. Te est latine definitiones. Quot wisi
            nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
            fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
          </p>
          <p>
            Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores
            adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete
            utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
            convenire mnesarchum eu per, quas minimum postulant per id. Te est latine definitiones. Quot wisi
            nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
            fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. Eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
            convenire mnesarchum eu per, quas minimum postulant per id. Te est latine definitiones. Quot wisi
            nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
            fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
          </p>
        </BackFade2>
      )
    }
    else if (option === "CleanOut") {
      return(
        <BackFade2>
          <Header as='h2'>Clean Out</Header>
          <Image size='large' src={pic3} size='small' floated='left' />
          <p>
            Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem,
            est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum
            ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
            ex natum rebum iisque. Te est latine definitiones. Quot wisi
            nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
            fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
          </p>
          <Image src={pic2} size='small' floated='right' />
          <p>
            Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
            nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
            fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. Te est latine definitiones. Quot wisi
            nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
            fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
          </p>
          <p>
            Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores
            adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete
            utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
            convenire mnesarchum eu per, quas minimum postulant per id. Te est latine definitiones. Quot wisi
            nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
            fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
          </p>
        </BackFade2>
      )
    }
    else {
      return(
        <BackFade2>
          <Header as='h2'>Rebuild</Header>
          <Image size='large' src={pic2} size='small' floated='left' />
          <p>
            Teeum doming things eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem,
            est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum
            ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
            ex natum rebum iisque. Te est latine definitiones. Quot wisi
            nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
            fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
          </p>
          <Image src={pic3} size='small' floated='right' />
          <p>
            Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi
            nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
            fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in. Te est latine definitiones. Quot wisi
            nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
            fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
          </p>
          <p>
            Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores
            adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete
            utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
            convenire mnesarchum eu per, quas minimum postulant per id. Te est latine definitiones. Quot wisi
            nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix
            fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
          </p>
        </BackFade2>
      )
    }
  }
}

export default StellaOptions