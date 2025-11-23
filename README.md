# Beautiful Portfolio with Storm Intro

A stunning, modern portfolio website built with React and featuring an animated storm background using Three.js shaders.

## Features

- 🌩️ **Animated Storm Background** - Beautiful storm effect using Three.js and GLSL shaders
- 🎨 **Modern Design** - Sleek, professional design with your custom color theme
- 📱 **Responsive** - Fully responsive design that works on all devices
- ⚡ **Fast** - Built with Vite for lightning-fast development and builds
- 🎯 **Smooth Animations** - Smooth scrolling and interactive elements

## Color Theme

- **Primary Accent**: Luxe Gold (`#F4C95D`)
- **Primary Background**: Midnight Sapphire (`#0A1238`)
- **Secondary Accent**: Royal Cyber Blue (`#1C4EEA`)
- **Soft Highlight**: Soft Metallic Gold (`#FFE7B3`)
- **Dark BG**: Slate Black (`#0D0F14`)
- **Section/Card BG**: Carbon Grey (`#23262F`)
- **Text**: Mist White (`#F5F7FA`)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
my_portfolio/
├── src/
│   ├── components/
│   │   ├── StormCanvas.jsx    # Storm animation component
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Hero.jsx           # Hero section
│   │   ├── About.jsx          # About section
│   │   ├── Skills.jsx         # Skills section
│   │   ├── Projects.jsx       # Projects section
│   │   └── Contact.jsx        # Contact section
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML entry point
├── package.json
└── vite.config.js
```

## Customization

1. **Personal Information**: Update the content in `src/components/Hero.jsx`, `About.jsx`, `Skills.jsx`, `Projects.jsx`, and `Contact.jsx`

2. **Color Theme**: Modify the CSS variables in `src/index.css` under `:root`

3. **Projects**: Edit the `projects` array in `src/components/Projects.jsx`

4. **Skills**: Update the `skills` array in `src/components/Skills.jsx`

## Technologies Used

- React 18
- Vite
- Three.js
- GLSL Shaders
- CSS3

## License

MIT License - feel free to use this project for your own portfolio!
