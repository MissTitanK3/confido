import { Heading } from '@chakra-ui/react';
import React from 'react';
import ScrollableGallery, { Opinion } from './ScrollGallery';
import AnnMarie from '@/public/images/people/Ann_Marie.webp';
import Jacqueline from '@/public/images/people/Jacqueline_Horani.webp';
import Judie from '@/public/images/people/Judie_Saunders.jpg';

const opinions: Opinion[] = [
  {
    id: 1,
    image: AnnMarie,
    imageAlt: 'Ann Marie',
    opinion: [
      `Confido Legal has significantly streamlined our accounts receivable process. It's easy to create a secure payment link that I can send through our regular billing system or in an email. The Confido Legal panel makes it easy to check whether payments have been made, and follow-up with clients on a timely basis regarding outstanding balances. It takes a fraction of the time compared to our prior process. Thank you, Confido!`,
    ],
    name: 'Anne-Marie E. Sargent',
    title: 'Connor & Sargent, PLLC',
  },
  {
    id: 2,
    image: Jacqueline,
    imageAlt: 'Jacqueline Horani',
    opinion: [
      `I'm proud to be a client of Confido Legal and Gravity Payments and have had the most human vendor experience since signing up. I get an excellent and simple user experience for my clients (extremely important as I've had so many issues with ZellePay and PayPal), low fees and a responsive and innovative customer support team that actually lets me help collaborate on creating a more meaningful product, AND I get to support a company that values their employees (min. $70k salary for all) and cares about giving back in meaningful ways.`,
    ],
    name: 'Jacqueline Horani',
    title: 'Horani Law, PLLC',
  },
  {
    id: 3,
    image: Judie,
    imageAlt: 'Judie Saunders',
    opinion: [
      `I learned about Confido Legal through their podcast Financially Legal. After my first episode I reached out to Confido, because the show was packed with actionable legal tips.`,
      `From my first interaction with Confido Legal I received high touch service. The entire customer service experience from setting up my account to receiving online payments is stress free and easy.`,
      `More importantly, my clients love the friction free online payments process which allows them to quickly pay bills with credit or debit cards.`,
      `Like many law firms, I used another well known online payment provider for client billing but after comparing the fees, customer service and ease of use, I now encourage other attorneys to switch to Confido Legal.`,
    ],
    name: 'Judie Saunders',
    title: 'Law Offices of Judie Saunders',
  },
];

function WhatClientsSay() {
  return (
    <>
      <Heading sx={{ margin: '5rem auto 0 auto', textAlign: 'center' }} as="h2">
        What Our Clients Are Saying
      </Heading>
      <ScrollableGallery opinions={opinions} />
    </>
  );
}

export default WhatClientsSay;
