const heading = React.createElement("h1",{
    
    id:"titile",

}, "Heading 1");

const heading2 = React.createElement("h2",{
    
    id: "title2",

},"Heading 2");

const container = React.createElement("div",{
    
    id:"cover",
    
},[heading,heading2]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container)

// using reactDom because we are reading from dom 
