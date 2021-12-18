import logo from './logo.svg';
import './App.css';
import Amplify, { PubSub } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';
import Session from './components/session'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

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
}));

PubSub.subscribe('justpoker').subscribe({
  next: data => console.log('Message received', data),
  error: error => console.error(error),
  close: () => console.log('Done'),
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to={"session"}>
          <button>Start new session</button>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/session" element={<Session/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
