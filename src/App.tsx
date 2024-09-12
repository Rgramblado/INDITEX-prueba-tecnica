import React from 'react';
import { useAppContext } from './contexts/app.context';

const App: React.FC = () => {
  console.log(process.env);
  const { isProduction } = useAppContext();

  return (
    <div>
      <h1>Mi aplicación React</h1>
      {isProduction ? (
        <p>Estamos en modo producción</p>
      ) : (
        <p>Estamos en modo desarrollo</p>
      )}
    </div>
  );
};

export default App;
