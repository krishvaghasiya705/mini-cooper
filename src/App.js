import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });

    return () => {
      Aos.refresh()
    };
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;