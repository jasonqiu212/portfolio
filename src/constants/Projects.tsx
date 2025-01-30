import HaveAnot from '../assets/haveanot.png';
import PeerPrep from '../assets/peerprep.png';
import { icons } from './Icons';

export const projects = [
  {
    name: 'have anot?',
    url: 'https://www.build.gov.sg/have-anot/',
    descriptions: [
      'A chatbot that helps public officers to solve problems by recommending existing digital products. It enables public officers to minimize the need for completely bespoke systems, saving both cost and time.',
      "have anot? was created for Open Government Products's Build for Good 2024 hackathon.",
    ],
    techStack: [
      icons['typescript'],
      icons['react'],
      icons['mantine'],
      icons['langchain'],
    ],
    links: ['github.com'],
    imageUrl: HaveAnot,
  },
  {
    name: 'TEAMMATES',
    url: 'https://teammatesv4.appspot.com/web/front/home',
    descriptions: [
      'An open source peer evaluation website used by over 1,100 universities.',
    ],
    techStack: [icons['typescript'], icons['angular'], icons['java']],
    links: ['github.com'],
    imageUrl: PeerPrep,
  },
];
