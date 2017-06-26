import React, { Component } from 'react'

class App extends Component {
  render () {
    return <div className='main'>
      <div className='introtext'>
        <h1>Hey, what's up?</h1>
        <h2>I'm Danny Shenker, a junior front end developer at The Iron Yard</h2>
      </div>
      <p>{this.state.bio}</p>
      {/* <div>
        <img className='intropic' src={this.state.profile} />
      </div> */}
      <div className='paragraphsaboutstuff' />
      <div className='photosofprojects'>
        <div className='one'>
          <a href='https://github.com/dannyoceanxo/jabberdexicon'><div className='img' /></a>
          <p>This is the "Jabberdexicon," a glossary of terms we created for new programmers to get acquainted with some of our jargon.</p>
        </div>
        <div className='two'>
          <a href='https://github.com/dannyoceanxo/roadtoregionals'><div className='img' /></a>
          <p>For my final project at The Iron Yard I created the Road to Regionals app.  This takes your scores from the 2017 CrossFit Open and guides you to making it to next year's Regionals with suggested workouts and articles.</p>
        </div>
      </div>
      <footer>
        <div className='stuffilike'>
          <h4>Check out some stuff I like:</h4>
          <a href='http://noeql.com'><img src='images/noeql.png' height='150px' width='300px' /></a>
          <a href='http://minidoughnutfactory.com'><img src='images/minidonutfactory.png' /></a>
          <a href='http://cigarcitycrossfit.com'><img src='images/cigarcity.png' height='205px' width='215px' /></a>
          <a href='http://crossfit813.com'><img src='images/cf813.jpg' height='225px' width='215px' /></a>
        </div>
        <div className='socialmedia'>
          <h4>Get @ me</h4>
          <a href='https://www.instagram.com/dannyoceanxo'><img src='images/instagram.jpeg' border-radius='.5em' /></a>
          <a href='https://www.nocliqueny.com'><img src='images/noclique.jpg' height='205px' width='245px' /></a>
          <a href='https://github.com/dannyoceanxo'><img src='images/octocat.png' height='205px' width='250px' /></a>
        </div>
        <div className='copyright'>
          <h5>Copyright 2017, Danny Shenker.  Built with ambivalence at The Iron Yard</h5>
        </div>
      </footer>
    </div>
  }

  state = {
    bio: [],
    profile: [],
    name: [],
    repos: []
  }

 // When this react component mounts
  componentDidMount () {
   // the URL to "get" todo items
    const url = 'https://api.github.com/users/dannyoceanxo'
   // make an AJAX request to that URL
    window.fetch(url)
     // fetch returns a promsise, which yeilds the "response", we call it 'r'
     // The response has a method json(), that returns another promise
     .then(r => r.json())
     // then JSON is done parsing, the promise will yeild the "data"
     .then(data => {
       // use the data as the state for our items
       this.setState({
         profile: data.avatar_url,
         bio: data.bio,
         name: data.name,
         repos: data.repos_url
       })
     })
  }
 }

export default App
