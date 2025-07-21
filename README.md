# 30-Day Intimacy Calendar

A beautiful, interactive web application designed to help couples strengthen their relationship through daily practices focused on deepening connection, improving communication, and building lasting intimacy.

## ✨ Features

- **📅 Interactive Calendar**: Browse through 30 carefully curated daily activities
- **✅ Progress Tracking**: Mark days as complete and track your journey using localStorage
- **🎨 Beautiful UI**: Clean, modern design with smooth transitions and responsive layout
- **📱 Mobile Friendly**: Fully responsive design that works on all devices
- **🚀 Fast Navigation**: Client-side routing with smooth page transitions
- **💾 Persistent Progress**: Your completion status is saved locally and persists between sessions
- **🎯 Activity Details**: Each day includes detailed instructions, time requirements, and success metrics

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Static site generator with modern architecture
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide Icons](https://lucide.dev/)** - Beautiful, customizable icons
- **[Astro Transitions](https://docs.astro.build/en/guides/view-transitions/)** - Smooth client-side navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/intimacy-calendar.git
   cd intimacy-calendar
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start the development server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see the application running.

### Build for Production

```bash
yarn build
# or
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BackToCalendar.astro
│   ├── CalendarGrid.astro
│   ├── CalendarHeader.astro
│   ├── CompletionTracker.astro
│   ├── DayCard.astro
│   ├── DayHeader.astro
│   ├── DayNavigation.astro
│   ├── DaySidebar.astro
│   ├── HowToUse.astro
│   └── MarkAsDone.astro
├── content/             # Content collections
│   ├── config.ts        # Content collection configuration
│   └── days/           # Individual day markdown files
├── layouts/            # Page layouts
│   └── Layout.astro
├── pages/              # Application pages
│   ├── index.astro     # Calendar overview
│   └── day/
│       └── [slug].astro # Individual day pages
└── styles/
    └── global.css      # Global styles
```

## 📝 Content Management

Each day's content is stored in Markdown files located in `src/content/days/`. Each file includes:

- **Frontmatter**: Metadata like day number, title, task description, time required, etc.
- **Content**: Rich markdown content with detailed instructions and guidance
- **Optional fields**: Steps, questions, rules, activities, examples, and ideas

Example day file structure:

```markdown
---
day: 1
title: 'Deep Connection Conversation'
task: 'Have a meaningful conversation using guided questions'
timeRequired: '30-45 minutes'
when: 'Evening'
success: 'Both partners feel heard and more connected'
---

# Day 1: Deep Connection Conversation

Your detailed content goes here...
```

## 🎯 How It Works

1. **Browse the Calendar**: The homepage displays all 30 days as interactive cards
2. **Explore Activities**: Click on any day to see detailed instructions and guidance
3. **Track Progress**: Mark days as complete using the "Mark as Done" button
4. **Monitor Journey**: Completed days show visual indicators throughout the calendar
5. **Navigate Smoothly**: Use the navigation controls to move between days

## 🎨 Design System

- **Color Palette**: Rose and pink gradients with green success indicators
- **Typography**: Clean, readable fonts with proper hierarchy
- **Layout**: Card-based design with consistent spacing and shadows
- **Icons**: Lucide icon set for consistency and clarity
- **Animations**: Subtle hover effects and smooth transitions

## 🔧 Development

### Adding New Days

1. Create a new markdown file in `src/content/days/`
2. Follow the existing frontmatter structure
3. Add your content in markdown format
4. The application will automatically generate the page and include it in the calendar

### Customizing Styles

The project uses Tailwind CSS for styling. You can:

- Modify the `tailwind.config.js` for theme customization
- Add custom styles in `src/styles/global.css`
- Use Tailwind utilities directly in components

### Component Architecture

The application follows a component-based architecture:

- **Reusable components** for common UI elements
- **Props-based configuration** for flexibility
- **TypeScript interfaces** for type safety
- **Astro's island architecture** for optimal performance

## 📊 Progress Tracking

Progress is tracked using localStorage with the following features:

- **Persistent storage**: Survives browser restarts and navigation
- **Cross-page sync**: Completion status updates across all pages
- **Visual feedback**: Immediate UI updates when marking days complete
- **Statistics ready**: Built-in functions for progress analytics

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install`         | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/) for optimal performance
- Icons by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Inspired by the importance of nurturing relationships
