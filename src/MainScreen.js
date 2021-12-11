import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Hero from './Hero.js';

function MainScreen() {
  return (
    <div>

      <NavBar />
      <Hero 
        title="Our Company"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        btnLabel1="Buy Now"
        btnLabel2="Learn More"
      />
      <Footer />

    </div>
  );
}

export default MainScreen;