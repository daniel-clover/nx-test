// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes, Link } from 'react-router-dom';

import { TestButton, Action } from '@clover/ui';

import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.demo}>
              <div>
                <TestButton>Hello from TestBed</TestButton>
              </div>
              <div>
                <Action href="#">Action component</Action>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
