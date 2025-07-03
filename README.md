# Jasfer S. Daniel’s Pokémon-Themed Portfolio

Welcome to my interactive, Pokémon-inspired personal portfolio! This site showcases my projects, skills, experience, and more—all styled like a living Pokédex.

---

## Table of Contents

1. [About the Project](#about-the-project)
2. [All Features](#all-features)
3. [Demo](#demo)
4. [Getting Started](#getting-started)

   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running Locally](#running-locally)

5. [Usage & Customization](#usage--customization)
6. [Deployment](#deployment)
7. [License](#license)
8. [Acknowledgements](#acknowledgements)

---

## About the Project

This portfolio transforms the web browsing experience into a playful journey through the world of Pokémon. It features a Pokédex-style UI, animated Gengar characters, themed carousels, and interactive elements (like evolution sliders and battling experience cards). Whether you’re here to explore my skills, check out my projects, or just relax watching Gengar snooze, there’s something for every Pokémon fan and recruiter alike.

## All Features

- **Pokédex Theming**: Consistent color palette, pixel borders, and monospace text for that retro Game Boy feel.
- **Responsive Design**: Fully mobile-friendly layouts for all sections.
- **Animated Hero Sections**: Floating, flickering text and bobbing Gengar animations.
- **Image Comparison Slider**: Slide between portraits or evolutions.
- **Carousels**: Featured projects with uniform image sizing and navigation controls.
- **Filterable Project Grid**: Clickable filters (System, Web App, Design).
- **Accordion About Section**: Expandable panels covering introduction, soft skills, and tech skills.
- **Battle-Style Experience**: Typing effect headers, HP bars, and entrance animations.
- **Education Timeline**: Interactive Gengar avatar that traverses to each level.
- **Lightbox**: Click any image to view it full-size in an overlay.
- **Sleeping Gengar**: A relaxing animation on the About page.
- **Meta Tags & SEO**: Open Graph, Twitter Card, and favicon setup for GitHub Pages.

## Demo

Check it out live: [https://J3V2.github.io/Personal-Profile/](https://J3V2.github.io/Personal-Profile/)

## Getting Started

These instructions will get you a copy of the project up and running locally for development and testing.

### Prerequisites

- Node.js & npm (optional for automated scripts)
- Git installed and a GitHub account

### Installation

No build step is required—this is a static site built with HTML, CSS, and vanilla JavaScript.

### Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/J3V2/Personal-Profile.git
   cd Personal-Profile
   ```

2. Serve the files. You can use VS Code Live Server, Python’s simple HTTP server, or any static file server. For example:

   ```bash
   # Python 3.x
   python -m http.server 8080
   open http://localhost:8080
   ```

## Usage & Customization

- **Content**: Edit the HTML in the `layout` and `pages` folders.
- **Styles**: Modify CSS variables in `variables.css` for quick theming.
- **Scripts**: Update `header-footer.js`, `project.js`, or `about.js` for interactive logic.
- **Assets**: Swap out Pokémon icons or avatars by placing new images in `assets/images`.

## Deployment

1. Push your changes to GitHub:

   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. Ensure GitHub Pages is enabled in the repository settings.
3. Your site will automatically update at `https://<username>.github.io/Personal-Profile/`.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Acknowledgements

- Inspired by the Pokémon franchise and classic Game Boy UI.
- Avatars and icons by [Icon8](https://icons8.com/) and free resources.
- Images in Google and Background Removed in [remove.photo](https://remove.photos/)
- Pokémon Ball and Gengar Evolution from [ph.portal-pokemon.com](http://ph.portal-pokemon.com/play/pokedex)
- Thank you to the open source community for tools and examples!
