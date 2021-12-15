import logo from './logo.svg';
import './App.css';
import Amplify, { PubSub } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:7b6e86a1-dd25-439a-933e-968a1063543a',
    region: 'us-east-1',
    identityPoolRegion: 'us-east-1',
    userPoolId: 'us-east-1_7u1mjfHck',
    userPoolWebClientId: '5ft7l91d192vgekcim0grou0lf'
  }
});

Amplify.addPluggable(new AWSIoTProvider({
  aws_pubsub_region: 'us-east-1',
  aws_pubsub_endpoint: 'wss://a2vj8u89yznrga-ats.iot.us-east-1.amazonaws.com/mqtt'
  //aws_pubsub_endpoint: 'wss://a2vj8u89yznrga-ats.iot.us-east-1.amazonaws.com/mqtt'
}));

PubSub.subscribe('justpoker').subscribe({
  next: data => console.log('Message received', data),
  error: error => console.error(error),
  close: () => console.log('Done'),
});

console.log("identityPoolId: " + process.env.REACT_APP_IDENTITY_POOL_ID)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Messages Received:
        </p>
      </header>
      <main>
        <ul>
          <li>Check the console...</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
