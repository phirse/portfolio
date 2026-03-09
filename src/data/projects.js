const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.',
    image: `${import.meta.env.BASE_URL}projects/project-1.svg`,
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management tool with real-time updates, drag-and-drop boards, and team workspaces.',
    image: `${import.meta.env.BASE_URL}projects/project-2.svg`,
    tech: ['React', 'Firebase', 'CSS Modules'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A weather dashboard that displays current conditions, forecasts, and interactive maps using multiple weather APIs.',
    image: `${import.meta.env.BASE_URL}projects/project-3.svg`,
    tech: ['JavaScript', 'REST APIs', 'Chart.js'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 4,
    title: 'AI Chat Interface',
    description:
      'A clean chat interface for interacting with language models, featuring markdown rendering and conversation history.',
    image: `${import.meta.env.BASE_URL}projects/project-4.svg`,
    tech: ['React', 'Python', 'FastAPI', 'WebSocket'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export default projects
