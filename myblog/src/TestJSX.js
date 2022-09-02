// this is the app component
function TestJSX() {
  const title = "welcome to the react world";
  const today = "02/09/2022";
  // React will conver string and render it
  const arr = [0, 1, 2];
  // However, object or boolean can not be display:
  const res = true;
  // const person = { name: "Henry", age: "30" };
  const link = "http://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>my first app component</h1>
        <h2>{title} </h2>
        <p>today's data is: {today}</p>
        <p>counting numbers: {arr}</p>
        <p>try to display boolean: {res}</p>
        {/* the below code will caused error */}
        {/* <p>try to display object: {person}</p> */}
      </div>
      <div>
        <a href={link}>Google Link</a>
      </div>
    </div>
  );
}

// we always export our component function so that we can use it in other files.
// as you can see we import app.js in the index.js file.
export default TestJSX;
