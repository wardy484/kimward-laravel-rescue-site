<!doctype html>
<html lang="en-GB">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#f6f7f4">
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
    <meta property="og:image:alt" content="Kim Ward. Software developer. Laravel, web products and mobile apps.">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="preload" href="{{ Vite::asset('public/fonts/dm-sans-latin.woff2') }}" as="font" type="font/woff2"
        crossorigin>
    <link rel="preload" href="{{ Vite::asset('public/fonts/instrument-serif-latin.woff2') }}" as="font"
        type="font/woff2" crossorigin>
    <link rel="preload" href="{{ Vite::asset('public/fonts/instrument-serif-italic-latin.woff2') }}" as="font"
        type="font/woff2" crossorigin>
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
        <a class="brand" href="#top" aria-label="Kim Ward, home">Kim Ward</a>
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
                <p>Software developer<br><span>Laravel · Web · Mobile</span></p>
            </div>
            <div class="hero-grid">
                <div>
                    <h1 id="hero-title">Hi, I’m Kim.<br><em>I build software.</em></h1>
                    <p class="hero-description">I’m a British developer working across Laravel, web products and mobile
                        apps. I like making complicated things simpler, and building software that earns its place in
                        someone’s day.</p>
                    <div class="hero-actions"><a class="button" href="#work">A few things I’ve worked on <span
                                aria-hidden="true">↓</span></a><a class="text-link" href="#about">A little about me
                            <span aria-hidden="true">↗</span></a></div>
                </div>
                <figure class="hero-project">
                    <a class="hero-project-link" href="#plates-and-plans-title"
                        aria-label="Read about my work on Plates & Plans">
                        <div class="hero-screens" aria-hidden="true">
                            <img class="hero-screen hero-screen-back" src="/images/projects/plates-week-plan.webp"
                                width="500" height="954" alt="" fetchpriority="high">
                            <img class="hero-screen hero-screen-front" src="/images/projects/plates-recipes.webp"
                                width="500" height="952" alt="" fetchpriority="high">
                        </div>
                    </a>
                    <figcaption><span>Plates & Plans</span><span>Flutter + Laravel <span
                                aria-hidden="true">↗</span></span></figcaption>
                </figure>
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
                    <h2 id="work-title">A few things<br><em>I’ve worked on.</em></h2>
                </div>
                <p>Product engineering for a tutoring marketplace,<br class="desktop-break"> a fitness app and a meal-planning app.</p>
            </div>
            <article class="featured-project case-study" aria-labelledby="tutorful-title">
                <div class="case-study-image"><img src="/images/projects/tutorful.png" width="1000" height="750"
                        loading="lazy" decoding="async"
                        alt="Tutorful product screenshots showing tutor search, messaging and lesson scheduling.">
                </div>
                <div class="featured-copy">
                    <p class="eyebrow">Lead Software Engineer · Ongoing</p>
                    <h3 id="tutorful-title">Tutorful</h3>
                    <p>Hands-on engineering across a live tutoring marketplace.</p>
                    <p>I joined Tutorful in 2018 and moved into a Lead Software Engineer role in 2021. My work spans
                        booking and pricing, Stripe billing, messaging, onboarding, APIs and the admin tools that
                        support the team.</p>
                    <p class="contribution-note">It’s sustained product work: making useful changes, testing them
                        properly and keeping an established application running well.</p>
                    <div class="tags"><span>Laravel</span><span>Vue.js</span><span>MySQL</span><span>Stripe</span>
                    </div>
                    <a class="text-link" href="https://tutorful.co.uk/">Visit Tutorful <span
                            aria-hidden="true">↗</span></a>
                </div>
            </article>
            <article class="featured-project case-study" aria-labelledby="sgs-title">
                <div class="case-study-image"><img src="/images/projects/sgs.png" width="1000" height="750"
                        loading="lazy" decoding="async"
                        alt="Strong Girl Society app screenshots showing training programmes, community and activity tracking.">
                </div>
                <div class="featured-copy">
                    <p class="eyebrow">Laravel backend developer</p>
                    <h3 id="sgs-title">Strong Girl Society</h3>
                    <p>Stabilising the backend of an existing fitness app.</p>
                    <p>I took over the Laravel backend and worked alongside the mobile developer on training programmes,
                        recipes, community features and integrations including Strava and RevenueCat. The work involved
                        fixing unfinished functionality and making the backend more dependable.</p>
                    <p class="contribution-note">My contribution was to the backend. The React Native interface shown
                        here was built by the mobile team.</p>
                    <div class="tags"><span>Laravel</span><span>PHP</span><span>API
                            integrations</span><span>Debugging</span></div>
                    <a class="text-link" href="https://apps.apple.com/us/app/sgs/id6738397927">View the app <span
                            aria-hidden="true">↗</span></a>
                </div>
            </article>
            <article class="featured-project case-study" aria-labelledby="plates-and-plans-title">
                <div class="case-study-image"><img src="/images/projects/plates-and-plans.png" width="1000"
                        height="750" loading="lazy" decoding="async"
                        alt="Plates and Plans app screenshots showing weekly meal plans, daily check-ins and recipes.">
                </div>
                <div class="featured-copy">
                    <p class="eyebrow">Full-stack mobile developer</p>
                    <h3 id="plates-and-plans-title">Plates & Plans</h3>
                    <p>A nutrition and meal-planning app, built with Flutter and Laravel.</p>
                    <p>I built most of the mobile app before handover: implementing supplied designs in Flutter,
                        building the Laravel APIs and product logic, and integrating RevenueCat subscriptions.</p>
                    <p class="contribution-note">My work was on the mobile app. These screenshots show the released
                        product, which may include changes made after handover.</p>
                    <div class="tags"><span>Flutter</span><span>Laravel</span><span>RevenueCat</span><span>API
                            development</span></div>
                    <a class="text-link" href="https://apps.apple.com/ca/app/plates-plans/id6756631706">View the app
                        <span aria-hidden="true">↗</span></a>
                </div>
            </article>
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
    <footer class="site-footer shell"><a class="brand" href="#top" aria-label="Kim Ward, back to top">Kim
            Ward</a>
        <p>© {{ date('Y') }} Kim Ward</p><a class="back-top" href="#top">Back to top <span
                aria-hidden="true">↑</span></a>
    </footer>
</body>

</html>
