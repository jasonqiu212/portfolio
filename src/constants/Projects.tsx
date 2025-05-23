import HaveAnot from '../assets/haveanot.png';
import PeerPrep from '../assets/peerprep.png';
import Teammates from '../assets/teammates.png';
import { icons } from './Icons';

export const projects = [
  {
    name: 'have anot?',
    url: 'https://www.build.gov.sg/have-anot/',
    descriptions: [
      'A chatbot that helps public officers to solve problems by recommending existing digital products. It enables public officers to minimize the need for bespoke systems, saving both cost and time.',
      "Created for Open Government Products's Build for Good 2024.",
    ],
    techStack: [
      icons['typescript'],
      icons['react'],
      icons['mantine'],
      icons['langchain'],
      icons['git'],
    ],
    links: [
      {
        label: 'View the code on GitHub',
        url: 'https://github.com/jasonqiu212/HaveAnot',
      },
    ],
    imageUrl: HaveAnot,
  },
  {
    name: 'TEAMMATES',
    url: 'https://teammatesv4.appspot.com/web/front/home',
    descriptions: [
      'An open source peer evaluation website used by over 1 million users and 1,100 universities.',
      'As a project maintainer, I review pull requests and triage bug reports from external contributors. I previously enhanced web accessibility and mobile responsiveness, and co-led the migration from Google Datastore to SQL.',
    ],
    techStack: [
      icons['typescript'],
      icons['angular'],
      icons['jest'],
      icons['java'],
      icons['docker'],
      icons['git'],
    ],
    links: [
      {
        label: 'View the code on GitHub',
        url: 'https://github.com/TEAMMATES/teammates',
      },
    ],
    imageUrl: Teammates,
  },
  {
    name: 'PeerPrep',
    url: 'https://peerprep.zoeang.dev/',
    descriptions: [
      'A platform for programmers to practice technical interviews by matching with others to practice LeetCode questions. Features include collaborative coding pad, code execution, video calling, and practice history.',
      'Built this app as the frontend developer on a team of five.',
    ],
    techStack: [
      icons['typescript'],
      icons['react'],
      icons['mantine'],
      icons['socketio'],
      icons['axios'],
      icons['express'],
      icons['mongodb'],
      icons['mongoose'],
      icons['docker'],
      icons['git'],
    ],
    links: [
      {
        label: 'View the code on GitHub',
        url: 'https://github.com/CS3219-AY2425S1/cs3219-ay2425s1-project-g39',
      },
    ],
    imageUrl: PeerPrep,
  },
];
