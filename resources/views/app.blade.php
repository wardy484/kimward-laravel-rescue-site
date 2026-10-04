<!doctype html>
<html lang="en-GB">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#fff8ef">
    <title>Kim Ward | Laravel & AI Developer</title>
    <meta name="description"
        content="I'm Kim Ward, a UK developer who helps businesses solve problems with software. Laravel specialist, building with AI every day.">
    <link rel="canonical" href="https://kimward.co.uk/">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://kimward.co.uk/">
    <meta property="og:site_name" content="Kim Ward">
    <meta property="og:locale" content="en_GB">
    <meta property="og:title" content="Kim Ward | Laravel & AI Developer">
    <meta property="og:description"
        content="I'm Kim Ward, a UK developer who helps businesses solve problems with software. Laravel specialist, building with AI every day.">
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
            "@graph": [
                {
                    "@type": "WebSite",
                    "@id": "https://kimward.co.uk/#website",
                    "url": "https://kimward.co.uk/",
                    "name": "Kim Ward",
                    "inLanguage": "en-GB",
                    "publisher": { "@id": "https://kimward.co.uk/#person" }
                },
                {
                    "@type": "ProfilePage",
                    "@id": "https://kimward.co.uk/#profile",
                    "url": "https://kimward.co.uk/",
                    "name": "Kim Ward | Laravel & AI Developer",
                    "inLanguage": "en-GB",
                    "isPartOf": { "@id": "https://kimward.co.uk/#website" },
                    "mainEntity": { "@id": "https://kimward.co.uk/#person" }
                },
                {
                    "@type": "Person",
                    "@id": "https://kimward.co.uk/#person",
                    "name": "Kim Ward",
                    "url": "https://kimward.co.uk/",
                    "image": "https://kimward.co.uk/images/kim-ward.png",
                    "jobTitle": "Software developer",
                    "description": "UK developer who helps businesses solve problems with software. Laravel specialist, building with AI.",
                    "email": "hello@kimward.co.uk",
                    "sameAs": [
                        "https://github.com/wardy484",
                        "https://www.linkedin.com/in/kim-ward-90884643",
                        "https://www.upwork.com/freelancers/kimward4"
                    ]
                }
            ]
        }
        @endverbatim
    </script>
    @vite('src/styles.css')
</head>

<body id="top">
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header shell">
        <a class="brand" href="#top" aria-label="Kim Ward, home">
            <span class="brand-mark" aria-hidden="true">K</span>
            Kim Ward
        </a>
        <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a class="nav-contact" href="#contact">Say hello</a>
        </nav>
    </header>
    <main id="main" tabindex="-1">
        <section class="hero shell" aria-labelledby="hero-title">
            <div class="hero-copy">
                <p class="hello-pill"><span class="status-dot" aria-hidden="true"></span> Lead engineer at <a
                        href="https://tutorful.co.uk/">Tutorful</a></p>
                <h1 id="hero-title">Hi, I’m Kim.<br><em>I build software.</em></h1>
                <p class="hero-description">I help businesses solve problems with software. Tell me what’s getting
                    in the way and I’ll find the simplest fix.</p>
                <p class="hero-description">Need a specialist? Laravel is my home ground, with Vue and Flutter
                    alongside. And I build with AI coding agents every day.</p>
                <div class="hero-actions">
                    <a class="button" href="#work">See my work <span aria-hidden="true">↓</span></a>
                    <a class="button button-soft" href="#contact">Say hello</a>
                </div>
                <ul class="stack" aria-label="Things I work with">
                    <li class="peach">Laravel</li>
                    <li class="mint">Flutter</li>
                    <li class="lilac">Vue</li>
                    <li class="butter">Stripe</li>
                    <li class="sky">APIs</li>
                    <li class="peach">Testing</li>
                    <li class="mint">AI</li>
                </ul>
            </div>
            <a class="hero-project" href="#plates-and-plans-title" aria-label="Read about my work on Plates & Plans">
                <span class="blob blob-one" aria-hidden="true"></span>
                <span class="blob blob-two" aria-hidden="true"></span>
                <span class="hero-screens" aria-hidden="true">
                    <img class="hero-screen hero-screen-back" src="/images/projects/plates-week-plan.webp"
                        width="500" height="954" alt="" fetchpriority="high">
                    <img class="hero-screen hero-screen-front" src="/images/projects/plates-recipes.webp"
                        width="500" height="952" alt="" fetchpriority="high">
                </span>
                <span class="hero-project-label">Plates & Plans · Flutter + Laravel <span aria-hidden="true">↗</span></span>
            </a>
        </section>

        <section class="work-section shell section-space" id="work" aria-labelledby="work-title">
            <div class="section-heading">
                <p class="eyebrow">Selected work</p>
                <h2 id="work-title">Things I’ve <em>worked on.</em></h2>
            </div>

            <article class="project project-peach" aria-labelledby="tutorful-title">
                <div class="project-image">
                    <video controls preload="none" playsinline width="1280" height="720"
                        poster="/videos/tutorful.webp" aria-label="Video showing my work on Tutorful: messaging, booking and Stripe billing.">
                        <source src="/videos/tutorful.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="project-copy">
                    <p class="eyebrow">Lead Software Engineer · 2018–now</p>
                    <h3 id="tutorful-title">Tutorful</h3>
                    <p class="project-lede">Hands-on engineering on a live tutoring marketplace.</p>
                    <p>Booking, pricing, Stripe billing, messaging, onboarding, APIs and the admin tools behind
                        them. Lead since 2021.</p>
                    <ul class="tags" aria-label="Technologies">
                        <li>Laravel</li><li>Vue.js</li><li>MySQL</li><li>Stripe</li>
                    </ul>
                    <a class="text-link" href="https://tutorful.co.uk/">Visit Tutorful <span aria-hidden="true">↗</span></a>
                </div>
            </article>

            <article class="project project-mint" aria-labelledby="sgs-title">
                <div class="project-image">
                    <video controls preload="none" playsinline width="1280" height="720"
                        poster="/videos/sgs.webp" aria-label="Video showing the Strong Girl Society app and the Laravel backend I worked on.">
                        <source src="/videos/sgs.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="project-copy">
                    <p class="eyebrow">Laravel backend · Fitness app</p>
                    <h3 id="sgs-title">Strong Girl Society</h3>
                    <p class="project-lede">Took over and stabilised the backend of a fitness app.</p>
                    <p>Training programmes, recipes, community features, plus Strava and RevenueCat integrations.
                        Finished half-built features and made the whole thing dependable.</p>
                    <p class="note">Backend only. The React Native app was built by the mobile team.</p>
                    <ul class="tags" aria-label="Technologies">
                        <li>Laravel</li><li>PHP</li><li>Integrations</li><li>Debugging</li>
                    </ul>
                    <a class="text-link" href="https://apps.apple.com/us/app/sgs/id6738397927">View the app <span aria-hidden="true">↗</span></a>
                </div>
            </article>

            <article class="project project-lilac" aria-labelledby="plates-and-plans-title">
                <div class="project-image">
                    <video controls preload="none" playsinline width="1280" height="720"
                        poster="/videos/plates-and-plans.webp" aria-label="Video showing the Plates & Plans app: weekly meal plans and recipes.">
                        <source src="/videos/plates-and-plans.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="project-copy">
                    <p class="eyebrow">Flutter + Laravel · Meal planning</p>
                    <h3 id="plates-and-plans-title">Plates & Plans</h3>
                    <p class="project-lede">Built most of a meal-planning app, front to back.</p>
                    <p>Flutter screens from supplied designs, Laravel APIs and product logic, and RevenueCat
                        subscriptions.</p>
                    <p class="note">Screenshots show the released app, which may include changes after handover.</p>
                    <ul class="tags" aria-label="Technologies">
                        <li>Flutter</li><li>Laravel</li><li>RevenueCat</li><li>APIs</li>
                    </ul>
                    <a class="text-link" href="https://apps.apple.com/ca/app/plates-plans/id6756631706">View the app <span aria-hidden="true">↗</span></a>
                </div>
            </article>

            <p class="work-footer">Always something else on the go. <a class="text-link"
                    href="https://github.com/wardy484">Poke around my GitHub <span aria-hidden="true">↗</span></a></p>
        </section>

        <section class="about-section shell section-space" id="about" aria-labelledby="about-title">
            <div class="about-card">
                <div class="about-intro">
                    <div class="about-photo-wrap">
                        <img class="about-photo" src="/images/kim-ward.png" alt="Kim Ward" width="120" height="120"
                            loading="lazy">
                    </div>
                    <p class="eyebrow">About me</p>
                    <h2 id="about-title">I like making things <em>simpler.</em></h2>
                </div>
                <div class="about-copy">
                    <p class="large-copy">My favourite part of the job is finding the straightforward way through
                        something complicated.</p>
                    <p>Laravel is home. I love its conventions, its ecosystem, and how a few well-chosen lines can
                        do a proper job.</p>
                    <p>Day job: Tutorful, improving a product people use every day. The rest of the time: small
                        tools, side projects and whatever’s caught my attention.</p>
                    <p>Lately I’ve gone deep on AI. I use coding agents in my daily work and build tools that keep
                        their output small, tested and easy to review.</p>
                </div>
            </div>
        </section>

        <section class="approach-section shell section-space" aria-labelledby="approach-title">
            <div class="section-heading">
                <p class="eyebrow">How I work</p>
                <h2 id="approach-title">Three things I <em>come back to.</em></h2>
            </div>
            <div class="principles">
                <article class="principle-butter">
                    <span class="principle-number" aria-hidden="true">1</span>
                    <h3>Understand it first.</h3>
                    <p>What’s actually needed, how it works today, and what would make a real difference.</p>
                </article>
                <article class="principle-sky">
                    <span class="principle-number" aria-hidden="true">2</span>
                    <h3>Keep it simple.</h3>
                    <p>Use the patterns that fit. Build what’s needed. Leave it clear for the next person.</p>
                </article>
                <article class="principle-peach">
                    <span class="principle-number" aria-hidden="true">3</span>
                    <h3>Care about the finish.</h3>
                    <p>Small, reviewable changes. Useful tests. Check the real thing, not just the green tick.</p>
                </article>
            </div>
        </section>

        <section class="contact-section shell section-space" id="contact" aria-labelledby="contact-title">
            <div class="contact-card">
                <span class="blob blob-three" aria-hidden="true"></span>
                <span class="blob blob-four" aria-hidden="true"></span>
                <p class="eyebrow">Get in touch</p>
                <h2 id="contact-title">Got a problem to solve? <em>Let’s chat.</em></h2>
                <a class="contact-email" href="mailto:hello@kimward.co.uk">hello@kimward.co.uk</a>
                <div class="contact-links">
                    <a href="https://github.com/wardy484">GitHub <span aria-hidden="true">↗</span></a>
                    <a href="https://www.linkedin.com/in/kim-ward-90884643">LinkedIn <span aria-hidden="true">↗</span></a>
                    <a href="https://www.upwork.com/freelancers/kimward4">Upwork <span aria-hidden="true">↗</span></a>
                </div>
            </div>
        </section>
    </main>
    <footer class="site-footer shell">
        <p>© {{ date('Y') }} Kim Ward</p>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
    </footer>
</body>

</html>
