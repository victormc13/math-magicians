import './Home.css';

function Home() {
  return (
    <div className="welcome-container">
      <h2 className="welcome-title">
        Welcome to our page!
      </h2>
      <section className="welcome-msg">
        <p>
          Math-magicians is an engaging and interactive website
          built with React to captivate mathematics enthusiasts interests.
          This Single Page App(SPA) offers users a range of intriguing features,
          including the ability to perform basic calculations
          and discover thought-provoking math-related quotes.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>
    </div>
  );
}

export default Home;
