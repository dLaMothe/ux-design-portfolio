# UX Design Portfolio

A modern, object-oriented UX design portfolio built with React and TypeScript, showcasing case studies, skills, tools, books, and achievements.

## 🎯 Project Overview

This portfolio demonstrates advanced object-oriented programming principles while creating a beautiful, functional web application for UX designers. It features:

- **Object-Oriented Architecture**: All portfolio items (case studies, skills, tools, books, achievements) are modeled as classes with inheritance, encapsulation, and polymorphism
- **Design Patterns**: Strategy pattern for sorting, Manager pattern for portfolio management
- **Modern React**: Built with React 18, TypeScript, and modern hooks
- **Beautiful UI**: Clean, responsive design with smooth animations
- **Type Safety**: Fully typed with TypeScript for better development experience

## 🏗️ Object-Oriented Design

### Class Hierarchy

```
PortfolioItem (Abstract Base Class)
├── CaseStudy
├── Skill
├── Tool
├── Book
└── Achievement
```

### Key OOP Principles Demonstrated

1. **Inheritance**: All portfolio items extend the base `PortfolioItem` class
2. **Encapsulation**: Private properties with public getters/setters
3. **Abstraction**: Abstract methods that must be implemented by subclasses
4. **Polymorphism**: Common interface for all portfolio items
5. **Strategy Pattern**: Pluggable sorting strategies
6. **Factory Pattern**: Portfolio manager creates and manages objects

### Core Classes

- **`PortfolioItem`**: Abstract base class with common properties (id, title, description, timestamps)
- **`CaseStudy`**: Represents UX case studies with client, role, challenge, solution, outcome
- **`Skill`**: Represents design skills with proficiency levels and categories
- **`Tool`**: Represents design tools with proficiency and usage tracking
- **`Book`**: Represents books with reading status, ratings, and reviews
- **`Achievement`**: Represents certifications and awards with verification
- **`PortfolioManager`**: Manages all portfolio items with filtering and sorting

## 🚀 Features

### Portfolio Sections

- **Hero Section**: Introduction with key statistics
- **Case Studies**: Detailed project showcases with process and outcomes
- **Skills**: Categorized skills with proficiency levels
- **Tools**: Design tools and technologies with usage tracking
- **Books**: Reading list with ratings and status tracking
- **Achievements**: Certifications and awards with verification
- **About**: Personal information and design philosophy
- **Contact**: Contact information and social links

### Technical Features

- **Type-Safe Data Models**: All portfolio data is strongly typed
- **Filtering & Sorting**: Advanced filtering and multiple sorting strategies
- **Responsive Design**: Works seamlessly on all device sizes
- **Smooth Animations**: Powered by Framer Motion
- **Modern Icons**: Beautiful icons from Lucide React
- **Clean Architecture**: Separation of concerns with clear data layer

## 🛠️ Installation & Setup

1. **Clone the repository**

```bash
git clone <repository-url>
cd ux-design-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm start
```

4. **Build for production**

```bash
npm run build
```

## 📦 Dependencies

### Core Dependencies

- `react` - UI library
- `react-dom` - React DOM renderer
- `react-router-dom` - Client-side routing
- `typescript` - Type safety and better developer experience

### UI & Animation

- `framer-motion` - Smooth animations and transitions
- `lucide-react` - Beautiful, customizable icons

### Development Dependencies

- `@types/react` - TypeScript definitions for React
- `@types/react-dom` - TypeScript definitions for React DOM
- `react-scripts` - Build tooling and development server

## 🎨 Customization

### Adding New Portfolio Items

1. **Extend the base class**:

```typescript
export class MyNewItem extends PortfolioItem {
  // Add specific properties and methods
}
```

2. **Implement abstract methods**:

```typescript
public getDisplayInfo(): string {
  return `${this.title} - Custom display info`;
}

public toJSON(): Record<string, any> {
  return {
    ...baseProperties,
    customProperty: this.customValue
  };
}
```

3. **Add to Portfolio Manager**:

```typescript
// Add management methods in PortfolioManager class
public addMyNewItem(item: MyNewItem): void {
  this._myNewItems.set(item.id, item);
}
```

### Styling

The project uses a custom CSS system with utility classes similar to Tailwind CSS. Modify `src/App.css` and `src/index.css` to customize the design.

### Sample Data

Sample portfolio data is generated in `App.tsx`. Replace this with your own data or integrate with a CMS/API.

## 🏆 Object-Oriented Features Showcased

1. **Inheritance Hierarchy**: Clean class inheritance with shared functionality
2. **Encapsulation**: Private fields with controlled access via getters/setters
3. **Polymorphism**: Common interface for all portfolio items
4. **Abstraction**: Abstract base class with template methods
5. **Strategy Pattern**: Interchangeable sorting algorithms
6. **Factory Pattern**: Centralized object creation and management
7. **Method Overriding**: Specialized implementations in derived classes
8. **Type Safety**: Strong typing throughout the application
9. **SOLID Principles**: Single responsibility, open/closed, interface segregation

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using React, TypeScript, and Object-Oriented Programming principles.
