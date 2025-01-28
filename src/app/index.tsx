import LandingLayout from '../components/layouts/landing';
import AppProvider from './provider';

function App() {
  return (
    <AppProvider>
      <LandingLayout />
    </AppProvider>
  );
}

export default App;
