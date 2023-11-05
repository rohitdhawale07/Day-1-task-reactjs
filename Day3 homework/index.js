// Define a functional component for the web page content
function WebPageContent() {
    return React.createElement("div", { className: "content" },
      React.createElement("h1", null, "Topics Covered"),
      React.createElement(
        'ul',
        null,
        React.createElement('li', null, 'Let vs Const'),
        React.createElement('li', null, 'Destructuring'),
        React.createElement('li', null, 'Rest Vs Spread'),
        React.createElement('li', null, 'Modules HOF')
      ),

      React.createElement("a", null, "Getting started with web"),

      React.createElement(
        'ul',
        null,
        React.createElement('li', null, 'Open a simple text editor like Notepad (Windows) or TextEdit (Mac).'),
        React.createElement('li', null, 'Write some HTML to create a basic web page with headings, paragraphs, and links.'),
        React.createElement('li', null, 'Save the file with the .html extension.'),
        React.createElement('li', null, 'Open the file in your web browser to see your web page.')
      ),

      React.createElement("a", null, "HTML- Structring the web"),

      React.createElement(
        'ul',
        null,
        React.createElement('li', null, React.createElement("h4", null, "Start with a Document Type Declaration (DOCTYPE).")),
        React.createElement('li', null, 'The DOCTYPE declaration tells the browser which version of HTML youre using. For modern web development, you can use HTML5'),
        React.createElement('li', null, React.createElement("h4", null, "Create the HTML Document")),
        React.createElement('li', null, 'Open your HTML document with the <html> tag.'),
        React.createElement('li', null, 'Inside the <html> tag, you have two main sections: <head> and <body>'),
        React.createElement('li', null, React.createElement("h4", null, "Head Section (Metadata)")),
        React.createElement('li', null, 'The <head> section contains metadata about the web page. This information doesnt appear on the actual page but provides important details to the browser and search engines.'),
        React.createElement('li', null, React.createElement("h4", null, "Body Section (Content)")),
        React.createElement('li', null, 'The <body> section is where you place the visible content of your web page.'),
        React.createElement('li', null, 'In body tag there may be headings, anchor tags, lists, image tags, or div tags'),
        ),
      React.createElement("p", null, "This is a very basic HTML structure. As you learn, you can add more elements and attributes to create more complex and interactive web pages."),
      React.createElement("a", null, "CSS- Styling the web page"),
      React.createElement("p", null, "You can adjust these styles and add more properties as needed to achieve the desired look for your web page. Additionally, for more complex styling, you might consider using external CSS files or CSS-in-JS libraries for better organization and maintainability of your styles."),
      
    );
  }
  
  function App() {
    return React.createElement("div", { className: "app-container" },
      React.createElement(WebPageContent),
    );
  }
  
  ReactDOM.render(React.createElement(App), document.getElementById("root"));
  