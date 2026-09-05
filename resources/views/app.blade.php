<!doctype html>
<html lang="en-GB">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#f8f6f0">
    <title>Kim Ward — Software developer & maker</title>
    <meta name="description"
        content="I'm Kim, a British software developer with a soft spot for Laravel. I build web products, useful tools and things that make life a little simpler.">
    <link rel="canonical" href="https://kimward.co.uk/">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://kimward.co.uk/">
    <meta property="og:title" content="Kim Ward — Software developer & maker">
    <meta property="og:description"
        content="Web products, useful tools and a soft spot for Laravel. A little about me and the things I build.">
    <meta property="og:image" content="https://kimward.co.uk/social-card.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Kim Ward. Software developer and maker. Thoughtful code. Useful things.">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="preload" href="{{ Vite::asset('public/fonts/dm-sans-latin.woff2') }}" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="{{ Vite::asset('public/fonts/instrument-serif-latin.woff2') }}" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="{{ Vite::asset('public/fonts/instrument-serif-italic-latin.woff2') }}" as="font" type="font/woff2" crossorigin>
    <script type="application/ld+json">
        @verbatim
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kim Ward",
            "url": "https://kimward.co.uk/",
            "jobTitle": "Software developer",
            "email": "hello@kimward.co.uk",
            "sameAs": [
                "https://github.com/wardy484",
                "https://www.linkedin.com/in/kim-ward-90884643",
                "https://www.upwork.com/freelancers/kimward4"
            ]
        }
        @endverbatim
    </script>
    @vite('src/styles.css')
</head>

<body id="top">
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header shell">
        <a class="brand" href="#top" aria-label="Kim Ward, home">kim ward<svg viewBox="0 0 300 300"
                aria-hidden="true">
                <path fill="currentColor"
                    d="M135 18h30l9 91 59-70 22 22-64 66 91 8v30l-91 9 70 59-22 22-66-64-8 91h-30l-9-91-59 70-22-22 64-66-91-8v-30l91-9-70-59 22-22 66 64z" />
            </svg></a>
        <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a class="nav-contact" href="#contact">Say hello <span aria-hidden="true">↗</span></a>
        </nav>
    </header>
    <main id="main" tabindex="-1">
        <section class="hero shell" aria-labelledby="hero-title">
            <div class="hero-intro"><img src="/images/kim-ward.png" alt="" width="48" height="48"
                    fetchpriority="high">
                <p>Hi, I’m Kim.<br><span>Software developer & maker</span></p>
            </div>
            <div class="hero-grid">
                <div>
                    <h1 id="hero-title">Thoughtful code.<br><em>Useful things.</em></h1>
                    <p class="hero-description">I’m a British developer who enjoys turning a good idea into something
                        people can actually use. Mostly with Laravel. Always with care.</p>
                    <div class="hero-actions"><a class="button" href="#work">A few things I’ve worked on <span
                                aria-hidden="true">↓</span></a><a class="text-link" href="#about">A little about me
                            <span aria-hidden="true">↗</span></a></div>
                </div>
                <div class="maker-art" aria-hidden="true">
                    <div class="art-orbit orbit-one"></div>
                    <div class="art-orbit orbit-two"></div>
                    <svg class="maker-flower" viewBox="0 0 300 300" fill="none">
                        <path fill="currentColor"
                            d="M135 18h30l9 91 59-70 22 22-64 66 91 8v30l-91 9 70 59-22 22-66-64-8 91h-30l-9-91-59 70-22-22 64-66-91-8v-30l91-9-70-59 22-22 66 64z" />
                        <circle cx="150" cy="150" r="24" fill="#f8f6f0" />
                    </svg>
                    <span class="art-note">A little curiosity goes a long way.</span>
                    <span class="art-coordinate">KW — A WORK IN PROGRESS</span>
                </div>
            </div>
            <div class="hero-footnote">
                <p><span class="status-dot" aria-hidden="true"></span> Currently building at <a
                        href="https://tutorful.co.uk/">Tutorful <span aria-hidden="true">↗</span></a></p>
                <p>Laravel at heart. Curious by nature.</p>
            </div>
        </section>

        <section class="work-section shell section-space" id="work" aria-labelledby="work-title">
            <div class="section-heading">
                <div>
                    <p class="eyebrow"><span>01</span> Selected work</p>
                    <h2 id="work-title">Built, shipped,<br><em>still improving.</em></h2>
                </div>
                <p>A mix of day-to-day product engineering,<br class="desktop-break"> open-source tools and things
                    built out of curiosity.</p>
            </div>
            <article class="featured-project">
                <div class="tutorful-art" aria-hidden="true">
                    <span class="project-art-label">tutorful<span>↗</span></span>
                    <div class="learning-art"><span class="learning-word">Room to<br><i>grow.</i></span><svg
                            viewBox="0 0 220 240" class="growing-shape" fill="none">
                            <path d="M110 232V44" stroke="currentColor" stroke-width="3" />
                            <path d="M110 158C35 160 11 112 17 65c54-1 97 30 93 93Z" fill="#bccdb4" />
                            <path d="M111 203c70 0 98-42 92-89-56 0-97 35-92 89Z" fill="#dce3c8" />
                            <path d="M110 99C64 84 57 36 75 8c40 14 62 58 35 91Z" fill="#e7b78b" />
                            <path d="M110 160 40 91m70 111 70-62M110 99 82 34" stroke="#284e3d" stroke-width="2" />
                        </svg></div>
                    <div class="art-footer"><span>PEOPLE × LEARNING × SOFTWARE</span><span>01 / PRODUCT</span></div>
                </div>
                <div class="featured-copy">
                    <p class="eyebrow">Ongoing · Product engineering</p>
                    <h3>Tutorful</h3>
                    <p>Software that helps people find the right tutor and keep learning.</p>
                    <p>I work on the product behind it: evolving an established Laravel application, improving everyday
                        workflows and making changes that hold up in a live system.</p>
                    <div class="tags"><span>Laravel</span><span>PHP</span><span>Product development</span></div><a
                        class="text-link" href="https://tutorful.co.uk/">Visit Tutorful <span
                            aria-hidden="true">↗</span></a>
                </div>
            </article>
            <div class="project-grid">
                <article class="project">
                    <div class="project-visual deploy-art" aria-hidden="true">
                        <div class="terminal" aria-hidden="true">
                            <div class="terminal-top"><span></span><span></span><span></span>
                                <p>your next deployment</p>
                            </div>
                            <div class="terminal-code"><span>~/your-project</span>
                                <p><b>❯</b> php artisan envoyer:deploy</p>
                                <div class="terminal-rule"></div>
                                <p class="terminal-caption">One less trip to the browser.<span>↗</span></p>
                            </div>
                        </div>
                        <span class="visual-index" aria-hidden="true">02 / DEVELOPER TOOLING</span>
                    </div>
                    <div class="project-title">
                        <h3><a href="https://github.com/wardy484/envoyer-deploy">Envoyer Deploy</a></h3><span
                            aria-hidden="true">↗</span>
                    </div>
                    <p>A small Laravel package to trigger Envoyer deployments from Artisan. Built to make a familiar
                        task a little simpler.</p>
                    <div class="tags"><span>Open source</span><span>Laravel package</span></div>
                </article>
                <article class="project">
                    <div class="project-visual shiplog-art" aria-hidden="true">
                        <div class="workflow" aria-hidden="true">
                            <p class="workflow-heading">Small change.<br><em>Clear evidence.</em></p>
                            <div class="workflow-steps">
                                <span>01<br><b>Issue</b></span><i>→</i><span>02<br><b>Build</b></span><i>→</i><span>03<br><b>Review</b></span>
                            </div>
                        </div>
                        <span class="visual-index" aria-hidden="true">03 / EXPLORATION</span>
                    </div>
                    <div class="project-title">
                        <h3><a href="https://github.com/wardy484/agent-pr-proof-demo">ShipLog</a></h3><span
                            aria-hidden="true">↗</span>
                    </div>
                    <p>A small Laravel demo exploring how coding agents can take a focused issue through to a reviewable
                        pull request, with tests and visual evidence.</p>
                    <div class="tags"><span>Experiment</span><span>Laravel</span><span>AI workflows</span></div>
                </article>
            </div>
            <div class="work-footer"><span>There’s usually something else on the go.</span><a class="text-link"
                    href="https://github.com/wardy484">Have a look around my GitHub <span
                        aria-hidden="true">↗</span></a></div>
        </section>

        <section class="about-section section-space" id="about" aria-labelledby="about-title">
            <div class="shell about-grid">
                <div>
                    <p class="eyebrow"><span>02</span> A little about me</p>
                    <h2 id="about-title">I like making<br><em>things simpler.</em></h2>
                    <div class="about-signature"><img src="/images/kim-ward.png" alt="Kim Ward" width="64"
                            height="64" loading="lazy">
                        <div><span class="signature">Kim</span>
                            <p>Developer. Perpetual tinkerer.</p>
                        </div>
                    </div>
                </div>
                <div class="about-copy">
                    <p class="large-copy">The bit I enjoy most is taking something complicated and finding a
                        straightforward way through it.</p>
                    <p>Laravel is my home ground. I like its conventions, its ecosystem and the way a few well-chosen
                        lines can do a proper job. I care just as much about what happens on the other side of the
                        screen.</p>
                    <p>Much of my work is at Tutorful, building and improving a product people use every day. Outside
                        that, I make small tools, explore ideas and follow whatever has caught my attention.</p>
                    <p>I’m happiest when I’m building something useful, with people who care about the details.</p>
                    <div class="toolkit"><span class="eyebrow">Usually within reach</span>
                        <ul aria-label="Technologies I work with">
                            <li>Laravel</li>
                            <li>PHP</li>
                            <li>Vue</li>
                            <li>JavaScript</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="approach-section shell section-space" aria-labelledby="approach-title">
            <div class="section-heading">
                <div>
                    <p class="eyebrow"><span>03</span> How I work</p>
                    <h2 id="approach-title">A few things<br><em>I come back to.</em></h2>
                </div>
                <p>Good software is as much about judgement<br class="desktop-break"> as it is about writing code.</p>
            </div>
            <div class="principles">
                <article><span class="principle-number">01 /</span>
                    <h3>Understand it first.</h3>
                    <p>Find out what someone actually needs, how things work today and what would make a useful
                        difference.</p>
                </article>
                <article><span class="principle-number">02 /</span>
                    <h3>Keep it straightforward.</h3>
                    <p>Use the tools and patterns that fit. Build what’s needed, and leave room for the next person to
                        understand it.</p>
                </article>
                <article><span class="principle-number">03 /</span>
                    <h3>Care about the finish.</h3>
                    <p>Small, reviewable changes. Useful tests. Check the real thing, and pay attention to the bits
                        people will notice.</p>
                </article>
            </div>
        </section>
        <section class="contact-section" id="contact" aria-labelledby="contact-title">
            <div class="shell">
                <div class="contact-top">
                    <p class="eyebrow"><span>04</span> Get in touch</p>
                    <svg class="contact-star" viewBox="0 0 300 300" aria-hidden="true">
                        <path fill="currentColor"
                            d="M135 18h30l9 91 59-70 22 22-64 66 91 8v30l-91 9 70 59-22 22-66-64-8 91h-30l-9-91-59 70-22-22 64-66-91-8v-30l91-9-70-59 22-22 66 64z" />
                    </svg>
                </div>
                <h2 id="contact-title">Something in mind?<br><em>Let’s have a chat.</em></h2>
                <p>A project, a question, or just a shared interest.<br>You’re welcome to drop me a line.</p><a
                    class="contact-email" href="mailto:hello@kimward.co.uk">hello@kimward.co.uk <span
                        aria-hidden="true">↗</span></a>
                <div class="contact-bottom"><span>Find me elsewhere</span>
                    <div><a href="https://github.com/wardy484">GitHub <span aria-hidden="true">↗</span></a><a
                            href="https://www.linkedin.com/in/kim-ward-90884643">LinkedIn <span
                                aria-hidden="true">↗</span></a><a
                            href="https://www.upwork.com/freelancers/kimward4">Upwork <span
                                aria-hidden="true">↗</span></a></div>
                </div>
            </div>
        </section>
    </main>
    <footer class="site-footer shell"><a class="brand" href="#top" aria-label="Kim Ward, back to top">kim
            ward<svg viewBox="0 0 300 300" aria-hidden="true">
                <path fill="currentColor"
                    d="M135 18h30l9 91 59-70 22 22-64 66 91 8v30l-91 9 70 59-22 22-66-64-8 91h-30l-9-91-59 70-22-22 64-66-91-8v-30l91-9-70-59 22-22 66 64z" />
            </svg></a>
        <p>© {{ date('Y') }} Kim Ward</p><a class="back-top" href="#top">Back to top <span
                aria-hidden="true">↑</span></a>
    </footer>
</body>

</html>
