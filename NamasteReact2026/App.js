/**
 * <div id="parent">
 * <div id="child">
 * <h1></h1>
 * </div>
 * </div>
 *  React
 */

const parent = React.createElement( "div",
    {id: "parent"},
    React.createElement("div", 
        {id: "child"},[
         React.createElement("h1",{}," i am a h1 tag "),
         React.createElement("h2",{}," i am a h2 tag "),
]),
 React.createElement("div", 
        {id: "child2"},[
         React.createElement("h1",{}," i am a h1 tag "),
         React.createElement("h2",{}," i am a h2 tag "),
         ]),
);

// JSX 


    // const heading = React.createElement(
    //     "h1",
    //      {id: "heading", xyz="abc"},// attrubutes 
    //       " Hello world from React"); // props

    //       console.log(heading); // object 

    // const root = ReactDOM.createRoot(document.getElementById("root"));

    // root.render(heading);
console.log(parent); // object 

const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);