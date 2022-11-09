function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost normal-case text-xl">Bitian Zhang</a>
    </div>
  )
}

function Button({ color, style, text }) {
  return <button className={`btn btn-${color} btn-${style} mx-2`}>{text}</button>
}

function Hero() {
  return (
    <div className="hero min-h-screen from-primary to-secondary bg-gradient-to-br">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hi, I'm Bitian</h1>
          <p className="py-6">a full-stack Software Engineer based in Los Angeles.</p>
          {/* <button className="btn btn-primary">Contact Me</button> */}
          <a href="https://bitian-zhang.netlify.app/"><Button color='primary' text='Portfolio' /></a>
          <a href="https://github.com/bzzz-coding"><Button color='secondary' text='GitHub' /></a>
          <a href="https://www.linkedin.com/in/bitian-zhang/"><Button color='neutral' text='LinkedIn' /></a>
          <a href="https://bzzz.hashnode.dev/"><Button color='accent' text='Blog' /></a>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>Copyright © 2022 - All right reserved by Bitian zhang</p>
      </div>
    </footer>
  )
}

// JSX allows us to use html with JavaScript and when running  a function, returns a JS object that Reacts uses to generate elements to put on the screen, can only return a single element

// ReactDOM library has a render method that "append" elements to the element selected (#root)
ReactDOM.render(
  <div>
    {/* <Navbar /> */}
    <Hero />
    {/* <Footer /> */}
  </div>, document.getElementById('root'))