<?php
date_default_timezone_set("Africa/Kigali");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server time | Scent Stories</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header">
        <a class="wordmark" href="index.html" aria-label="Scent Stories home"><span class="wordmark-icon" aria-hidden="true">S</span><span>Scent <span class="wordmark-light">Stories</span></span></a>
        <nav aria-label="Main navigation">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">Our story</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="server-time.php" aria-current="page">Server time</a></li>
            </ul>
        </nav>
        <a class="header-cta" href="index.html#collection">Explore scents <span aria-hidden="true">↗</span></a>
    </header>
    <main id="main-content">
        <section class="page-hero page-hero-compact">
            <p class="eyebrow"><span class="eyebrow-line"></span>A moment in time</p>
            <h1>Right now,<br><em>in Kigali.</em></h1>
            <p>Local time at Scent Stories, wherever you are reading from.</p>
        </section>
        <section class="time-card section-wrap">
            <p class="eyebrow">Current local time</p>
            <p class="server-time"><?php echo htmlspecialchars(date("l, d F Y — H:i:s"), ENT_QUOTES, "UTF-8"); ?></p>
            <p class="time-zone">Africa / Kigali</p>
            <a class="text-link" href="index.html">Back to the stories <span aria-hidden="true">→</span></a>
        </section>
    </main>
    <footer class="site-footer">
        <a class="wordmark footer-wordmark" href="index.html"><span class="wordmark-icon" aria-hidden="true">S</span><span>Scent <span class="wordmark-light">Stories</span></span></a>
        <p>Small moments. Lasting notes.</p>
        <nav aria-label="Footer navigation"><a href="about.html">Our story</a><a href="contact.html">Contact</a><a href="server-time.php">Server time</a></nav>
        <small>&copy; 2026 Scent Stories. Made with care.</small>
    </footer>
</body>
</html>
