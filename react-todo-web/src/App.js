import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>To-Do List</PageTitle>
        <div className={styles.app__wrapper}>
        <PageHeader>Joanne T - 2602127766</PageHeader>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
