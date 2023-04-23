import { logo } from '../assets'


const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className= "flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button type="button"
        onClick={() => window.open('https://github.com/FUPharah')}
        className="black_btn" >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize whatever with <br className="max-md:hidden" />
        <span className="orange_gradient">ChatGpt</span>
      </h1>

      <h2 className="desc">
        This tool is a text summarizer that uses OpenAI GPT-4 to summarize your text for you.
      </h2>
    </header>
  )
}

export default Hero
