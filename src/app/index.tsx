import LandingLayout from '../components/layouts/LandingLayout';
import AppProvider from './Provider';

function App() {
  return (
    <AppProvider>
      <LandingLayout />
    </AppProvider>
  );
}

export default App;
