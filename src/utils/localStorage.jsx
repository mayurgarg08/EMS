const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@e.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription:
          "Revamp the homepage design with a modern layout, responsive behavior across all devices, optimizing image assets, and improving user experience with better navigation flow.",
        taskDate: "2024-10-12",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription:
          "Attend the client meeting to gather complete project requirements, note down key deliverables, discuss the timeline, and clarify open questions regarding the feature set expectations and integration scope.",
        taskDate: "2024-10-10",
        category: "Meeting",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription:
          "Go through the issue tracker, replicate reported bugs, identify the root causes and write unit tests to ensure that the issues don't reappear in future releases.",
        taskDate: "2024-10-14",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Implement payment gateway",
        taskDescription:
          "Integrate a secure payment gateway for the e-commerce platform, ensuring compliance with security standards, refunds, and partial payments.",
        taskDate: "2024-10-15",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Improve SEO",
        taskDescription:
          "Conduct an audit on the website's SEO performance, identify high-priority areas for improvement, implement changes to title tags, meta descriptions, and headings, and monitor performance using analytics tools.",
        taskDate: "2024-10-16",
        category: "Marketing",
      },
    ],
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database optimization",
        taskDescription:
          "Analyze current database query performance, identify slow queries through profiling, refactor database schema if needed, add indexes where appropriate, and document all changes for future maintenance.",
        taskDate: "2024-10-11",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design new feature",
        taskDescription:
          "Create a set of detailed UI mockups for the new feature addition, including different states such as loading, error, and success, and collaborate with developers to ensure feasibility of the designs.",
        taskDate: "2024-10-09",
        category: "Design",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Data migration",
        taskDescription:
          "Migrate data from legacy database systems to the new platform, ensuring data integrity and minimal downtime, while updating data models for consistency with the new architecture.",
        taskDate: "2024-10-14",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Data backup setup",
        taskDescription:
          "Implement a robust data backup strategy, schedule regular backups, and test recovery processes to ensure data availability and integrity in case of failure.",
        taskDate: "2024-10-16",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database performance monitoring",
        taskDescription:
          "Set up a system to monitor database performance in real time, configure alerts for slow queries, and optimize queries that exceed performance thresholds.",
        taskDate: "2024-10-17",
        category: "Database",
      },
    ],
  },
  {
    id: 3,
    firstName: "Ravi",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription:
          "Create engaging slides for the upcoming client presentation, including project timelines, key metrics, product benefits, future roadmap, and anticipated impact, ensuring visually appealing graphics throughout.",
        taskDate: "2024-10-13",
        category: "Presentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code review",
        taskDescription:
          "Perform an in-depth code review of the latest feature branch, focusing on code quality, scalability, adherence to coding standards, identifying potential bugs, and providing constructive feedback to the developers.",
        taskDate: "2024-10-12",
        category: "Development",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API integration",
        taskDescription:
          "Integrate the third-party API to allow external services to access selected data, ensuring seamless functionality and robustness under high traffic conditions, while maintaining security standards.",
        taskDate: "2024-10-15",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Feature flag implementation",
        taskDescription:
          "Implement feature flags to enable or disable new features in production without redeployment, allowing for safer and faster releases.",
        taskDate: "2024-10-17",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Testing",
        taskDescription:
          "Execute thorough manual and automated testing on the new build, verify all test cases against acceptance criteria, document found bugs, prioritize severity levels, and report issues for immediate resolution.",
        taskDate: "2024-10-08",
        category: "QA",
      },
    ],
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write documentation",
        taskDescription:
          "Update the project documentation thoroughly, covering architecture diagrams, installation procedures, API references, frequently asked questions, and provide examples of common integration patterns.",
        taskDate: "2024-10-13",
        category: "Documentation",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Set up CI/CD",
        taskDescription:
          "Implement a robust CI/CD pipeline including automatic testing, building, deployment stages, ensure rollback strategies are in place, and configure alerting mechanisms for build failures and deployment errors.",
        taskDate: "2024-10-11",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Conduct security audit",
        taskDescription:
          "Perform a comprehensive security audit of the application, identifying potential vulnerabilities, reviewing user access controls, and suggesting improvements to ensure the system is resistant to common cyber threats.",
        taskDate: "2024-10-15",
        category: "Security",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Incident response plan",
        taskDescription:
          "Create an incident response plan to ensure rapid action in case of a security breach, defining roles and steps for immediate containment, investigation, and recovery.",
        taskDate: "2024-10-17",
        category: "Security",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "DevOps training",
        taskDescription:
          "Lead a training session for the team on best practices for DevOps, including version control, automated testing, and deployment pipelines.",
        taskDate: "2024-10-18",
        category: "DevOps",
      },
    ],
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "UI redesign",
        taskDescription:
          "Redesign the user interface focusing on a modern, clean aesthetic, improving accessibility standards (WCAG compliance), optimizing component reusability, and ensuring mobile-first responsiveness throughout the application.",
        taskDate: "2024-10-14",
        category: "Design",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy new build",
        taskDescription:
          "Coordinate with DevOps team to deploy the latest build, verify deployment success post-release, conduct smoke testing on production, and monitor system health through observability tools after deployment.",
        taskDate: "2024-10-09",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client feedback",
        taskDescription:
          "Gather detailed feedback from clients post-product launch, categorize responses into feature requests, bugs, and general suggestions, and summarize findings into an actionable insights report for the team.",
        taskDate: "2024-10-12",
        category: "Support",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "User research",
        taskDescription:
          "Conduct user research to understand pain points, user preferences, and usability challenges, then present the findings to the team to inform future feature prioritization and improvements.",
        taskDate: "2024-10-15",
        category: "UX Research",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Competitor analysis",
        taskDescription:
          "Research and analyze the latest competitors' features, UI/UX designs, and marketing strategies to help guide future product improvements and differentiate our offerings.",
        taskDate: "2024-10-16",
        category: "Marketing",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];
  return { employees, admin };
};
