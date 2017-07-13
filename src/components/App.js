import React, { Component } from 'react'

class App extends Component {
  render () {
    return <div className='main'>
      <div className='introtext'>
        <h1>Hey, what's up?</h1>
        <h2>I'm Danny Shenker, a junior front end developer who recently graduated from The Iron Yard</h2>
      </div>
      {/* <p>{this.state.bio}</p> */}
      {/* <div>
        <img className='intropic' src={this.state.profile} />
      </div> */}
      <div className='photosofprojects'>
        <div className='one'>
          <a href='http://jabberdexicon.dannyshenker.surge.sh/'><div className='img' /></a>
          <p>This is the "Jabberdexicon," a glossary of terms we created for new programmers to get acquainted with some of our jargon.</p>
        </div>
        <div className='chuckNorris'>
          <a href='https://github.com/dannyoceanxo'><img src='images/chucknorris.JPG' height='300px' width='280px' /></a>
          <p>Just hanging out with my best friend Chuck Norris</p>
        </div>
        <div className='two'>
          <a href='http://roadtoregionals.dannyshenker.surge.sh/'><div className='img' /></a>
          <p>For my final project at The Iron Yard I created the Road to Regionals app.  This takes your scores from the 2017 CrossFit Open and guides you to making it to next year's Regionals with suggested workouts and articles.</p>
        </div>
      </div>
      <footer>
        <div className='completedprojects'>
          <h4>Check out some other projects I've worked on:</h4>
          <div className='snowman'>
            <a href='http://snowman.dannyoceanxo.surge.sh'><img src='images/snowmanscreenshot.png' height='150px' width='300px' /></a>
          </div>
          <div className='colorpicker'>
            <a href='http://sassy-color-picker.dannyshenker.surge.sh/'><img src='images/colorpickerscreenshot.png' height='300px' width='265px' /></a>
          </div>
          <div className='shoutbox'>
            <a href='http://shoutbox.dannyshenker.surge.sh'><img src='images/shoutboxscreenshot.png' height='205px' width='215px' /></a>
          </div>
          <div className='roshambo'>
            <a href='http://one-list.dannyshenker.surge.sh/'><img src='images/onelist.png' height='225px' width='215px' /></a>
          </div>
        </div>
        {/* <div className='design'>
          <h1>No Clique</h1>
        </div> */}
        {/* <div className='skills'>
          <h4>HTML, CSS, JavaScript, React, MobX</h4>
        </div> */}
        <div className='copyrightSocialMedia'>
          <a href='https://www.instagram.com/dannyoceanxo/'><img src='/images/instagram2.png' height='50px' width='50px' /></a>
          <a href='https://github.com/dannyoceanxo/'><img src='/images/waltercat.png' height='50px' width='50px' /></a>
          <h5>Copyright 2017, Danny Shenker.  Built with &hearts; at The Iron Yard</h5>
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
