//import react from 'react';

const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name}, you are {heroName}
      </h1>
    </div>
  );
};

export default Greet;
