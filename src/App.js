import logo from './logo.svg';
import './App.css';
import './Animate.css'



function App() {
  return (
   <div className="App">
      <header className="App-header">
        <h1 className="animated flipInY">Welcome to React World.</h1>
      

      
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="animated swing">Fun Facts about React JS.</h2>
        
        
              <div className="item" >
               
               <h3> 1. React Js is Beyond a Fad</h3>
              <p className="pa">
                  The rate of enterprise adoption of React Js has proven that it’s not just   
                  another development fad.Looking at the pedigree of companies that have 
                  adopted React Js, you’ll know it’s not going anytime soon. We can point 
                  to over a dozen; Facebook, Bloomberg, Discord, Skype, Instagram, and many
                   others.
                </p>
              
                
                <h3>2. Not a Framework, But a JavaScript Library</h3>
                 <p className="pa">   
                     This is one controversy about React Js that we have to put straight.
                      Even though most react professionals term it as a JavaScript framework,
                       the website of React says otherwise.React Js is a JavaScript library 
                       with attributes of a framework. It’s more tilted towards building 
                       interfaces than being a framework.
                    </p>
        
               
           
            </div>
          
          
       <br></br>
     
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>
    </div> 


  
  );
}

export default App;
