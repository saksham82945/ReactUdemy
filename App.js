/**
 * This comment block visualizes the HTML structure we want to create using React:
 * <div id="parent">
 *   <div id="child">
 *     <h1></h1>
 *   </div>
 * </div>
 */

// React.createElement is the core React API to create React Elements (which are just JavaScript objects).
// It takes 3 arguments: the HTML tag name, an object for attributes/props, and the children (content or other elements).
const parent = React.createElement( 
    "div", // 1st argument: HTML element tag (a 'div')
    {id: "parent"}, // 2nd argument: Attributes object. Here we set id="parent"
    // 3rd argument: Children of the parent div. Here we pass multiple children as arguments
    React.createElement("div", 
        {id: "child"}, // Sets id="child" for the first inner div
        [ // When passing multiple children to an element, we put them inside an array
         React.createElement("h1", {}, " i am a h1 tag "), // Creates an <h1> element with empty props
         React.createElement("h2", {}, " i am a h2 tag "), // Creates an <h2> element with empty props
        ]
    ),
    React.createElement("div", 
        {id: "child2"}, // Sets id="child2" for the second inner div
        [ // Another array for the children of "child2"
         React.createElement("h1", {}, " i am a h1 tag "), // Creates another <h1>
         React.createElement("h2", {}, " i am a h2 tag "), // Creates another <h2>
        ]
    )
);

// Note: In real applications, we use JSX instead of writing React.createElement manually.
// JSX is a syntax extension for JavaScript that looks like HTML and gets compiled to React.createElement behind the scenes.

    // Below is a commented-out simple example of creating a single heading
    // const heading = React.createElement(
    //     "h1", // Tag name
    //      {id: "heading", xyz: "abc"}, // Attributes/props passed to the element
    //       " Hello world from React"); // The text content inside the h1

    //       console.log(heading); // Logging this shows that a React Element is actually a normal JavaScript Object, not an HTML element yet.

    // const root = ReactDOM.createRoot(document.getElementById("root"));

    // root.render(heading);

// Logging 'parent' to the console to show that it is a complex JavaScript object describing the UI tree.
console.log(parent); 

// ReactDOM.createRoot tells React where it should attach its virtual DOM to the actual browser DOM.
// We are selecting the <div id="root"> element from index.html to act as the root container.
const root = ReactDOM.createRoot(document.getElementById("root"));

// The render method takes our React Element object (parent) and converts it into real HTML elements, 
// injecting them into the root div we created above.
root.render(parent);