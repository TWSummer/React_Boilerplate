import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>
        <main className="main-area">
          <aside>Aside</aside>
          <section>Section</section>
        </main>
      </div>
    );
  }
}

export default HomePage;
