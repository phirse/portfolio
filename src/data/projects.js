const projects = [
  {
    id: 1,
    title: 'KeyChron E-Commerce Website',
    description:
      'I created a clone of the KeyChron Thailand website, a keyboard e-commerce platform. The tech stack included Figma, MySQL Workbench, HTML, CSS, and JavaScript. Through this project, I learned the basics of these languages to strengthen my development fundamentals. The most challenging aspect was ensuring seamless integration between the frontend and backend.',
    image: `${import.meta.env.BASE_URL}projects/project-1.png`,
    tech: ['HTML', 'JavaScript', 'CSS', 'MySQL', 'Figma'],
  },
  {
    id: 2,
    title: 'Project Tracking System',
    description:
      'I built this Online Classroom Platform to practice building complex, interactive web applications. Using React for the frontend and Node.js with SQL for the backend. A key achievement in this project was implementing the logic for assignment creation and grading, as well as handling different user permissions securely. ',
    image: `${import.meta.env.BASE_URL}projects/project-2.png`,
    tech: ['React', 'MySQL', 'CSS', 'JavaScript', 'HTML', 'Figma'],
  },
  {
    id: 3,
    title: 'ERP System (Codebase from IDURAR)',
    description:
      'A weather dashboard that displays current conditions, forecasts, and interactive maps using multiple weather APIs.',
    image: `${import.meta.env.BASE_URL}projects/project-3.png`,
    tech: ['JavaScript', 'Node.js','Express', 'MongoDB', 'React', 'HTML', 'CSS'],
  },
]

export default projects
