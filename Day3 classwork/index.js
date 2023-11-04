function App() {
    return React.createElement("div", { className: "app-container" },
      React.createElement("h1", null, "Rohit's first React Web Page"),
      React.createElement("div", { className: "content-container" },
        React.createElement("p", null, "This is a paragraph inside the first div."),
      ),
      React.createElement("div", { className: "content-container" },
        React.createElement("p", null, "This is a paragraph inside the second div."),
        React.createElement("a", { href: "https://www.example.com" }, "Click me"),
      ),
      React.createElement("div", { className: "content-container" },
        React.createElement("p", null, "This is a paragraph inside the third div."),
      ),
      React.createElement("div", { className: "content-container" },
        React.createElement("p", null, "This is a paragraph inside the fourth div."),
      )
    );
  }
  
  ReactDOM.render(React.createElement(App), document.getElementById("root"));
  