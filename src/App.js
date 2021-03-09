import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ContactPage from './pages/ContactPage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import ProjectPage from './pages/ProjectPage.js';

const App = () => {
  return (
    <Router>
      <main>
        <Route path='/' component={HomePage} exact />
        <Route path='/proyectos' component={ProjectsPage} exact />
        <Route path='/contacto' component={ContactPage} exact />
        <Route path='/proyectos/:id' component={ProjectPage} />
      </main>
    </Router>
  );
};

export default App;
