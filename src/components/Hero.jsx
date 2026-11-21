function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">

                <p className="greeting">Hello, I'm</p>

                <h1>Jason Ruano</h1>

                <h2>Aspiring Software Developer</h2>

                <p className="hero-description">
            I enjoy building software, exploring new technologies,
            and turning creative ideas into meaningful digital experiences.
                </p>

                <div className="hero-buttons">
                <a href="#projects" className="btn primary-btn">
                    View My Projects
                </a>

                <a href="#contact" className="btn secondary-btn">
                    Contact Me
                </a>
                </div>

            </div>
        </section>
    );
}