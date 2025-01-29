import { icons } from './Icons';

export const experiences = [
  {
    time: 'May 2024 - Aug 2024',
    position: 'Software Engineer Intern',
    company: { label: 'HSBC', url: 'https://www.hsbc.com.sg/' },
    achievements: [
      'Developed frontend for displaying structured products to relationship managers under private banking',
      'Implemented frontend caching mechanism to store API responses, reducing repeated API calls and improving load times by 40%',
      'Analysed and migrated validation logic from legacy system to new platform, ensuring alignment with underlying business processes and improving system integrity',
      'Piloted LLM-powered chatbot using prompt engineering for directing new users to bank products',
    ],
    techStack: [
      icons['typescript'],
      icons['react'],
      icons['redux'],
      icons['axios'],
      icons['jest'],
      icons['git'],
      icons['jenkins'],
      icons['sonarqube'],
    ],
  },
  {
    time: 'Aug 2022 - May 2023',
    position: 'Teaching Assistant',
    company: {
      label: 'National University of Singapore',
      description: 'CS2030S Programming Methodology II',
      url: 'https://www.nus.edu.sg/',
    },
    achievements: [
      'Conducted weekly lab sessions for 12 undergraduates on object-oriented design principles and functional programming in Java',
      'Graded assignments and provided timely feedback on code quality, correctness, and design',
    ],
    techStack: [icons['java'], icons['git'], icons['bash']],
  },
  {
    time: 'May 2022 - Aug 2022',
    position: 'Software Engineer Intern',
    company: {
      label: 'Computing for Voluntary Welfare Organisations',
      description:
        'We build software infrastructure for voluntary welfare organizations',
      url: 'https://www.comp.nus.edu.sg/~vwo/',
    },
    achievements: [
      'Automated 12 quarterly case reports by developing statistical reporting features with Excel exporting',
      'Streamlined onboarding of 3 organisations by refactoring case management system using facade pattern',
      'Implemented activity registration feature for senior activity booking app with an elderly-centric UI',
    ],
    techStack: [
      icons['typescript'],
      icons['react'],
      icons['redux'],
      icons['mui'],
      icons['ionic'],
      icons['rubyOnRails'],
      icons['postgresql'],
      icons['mysql'],
      icons['git'],
      icons['docker'],
    ],
  },
];
