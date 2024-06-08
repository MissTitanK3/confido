'use client';

import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const JobAccordian: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);
  console.log(searchTerm?.toLowerCase().includes('full cycle sales rep'));

  return (
    <>
      <Input
        placeholder="Search Jobs..."
        value={searchTerm || ''}
        onChange={(event) => setSearchTerm(event.target.value)}
        mb={4}
        maxW={400}
      />
      <Accordion allowMultiple width="80%" mx="auto">
        {(searchTerm === '' || 'Full Cycle Sales Rep'.toLowerCase().includes(searchTerm.toLowerCase())) && (
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Full Cycle Sales Rep
                    </Box>
                    {isExpanded ? (
                      <MinusIcon
                        fontSize="24px"
                        backgroundColor="green"
                        borderRadius="50%"
                        padding="4px"
                        margin="10px"
                        color="white"
                      />
                    ) : (
                      <AddIcon
                        fontSize="24px"
                        backgroundColor="green"
                        borderRadius="50%"
                        padding="4px"
                        margin="10px"
                        color="white"
                      />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box textAlign="left" mx="auto" p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
                    <Text textIndent="3rem" mb={4}>
                      Confido Legal is a fast-growing platform that helps legal technology companies and law firms embed
                      payments and finance features into their products and financial workflows.
                    </Text>
                    <Text textIndent="3rem" mb={4}>
                      By adding financial flexibility at the point where lawyers and clients transact, we increase the
                      number of people who can access the justice system and expand the addressable market for our law
                      firm clients. We are looking for a sales rep to join us on this mission.
                    </Text>
                    <Text textIndent="3rem" mb={4}>
                      The ideal candidate must have a strong sense of responsibility and willingness to manage the full
                      sales process from lead generation to account activation.
                    </Text>
                    <Text textIndent="3rem" mb={4}>
                      This is a non-commissioned position. One of our values is to promote a culture of mutual support,
                      and we feel the sales commission structure doesn&apos;t align with this value. We realize this
                      isn&apos;t for everyone.
                    </Text>

                    <Heading as="h2" size="lg" mb={4}>
                      Role Responsibilities
                    </Heading>
                    <List spacing={2} mb={4} listStyleType="initial" pl="3rem">
                      <ListItem>Generating leads from cold phone, email and LinkedIn outreach</ListItem>
                      <ListItem>Converting warm leads to sales appointments</ListItem>
                      <ListItem>
                        Following our highly consultative sales process to move the right law firms through our sales
                        funnel
                      </ListItem>
                      <ListItem>Running product demos for qualified firms</ListItem>
                      <ListItem>Ensuring signed accounts activate and get the most out of our platform</ListItem>
                    </List>

                    <Heading as="h2" size="lg" mb={4}>
                      Qualifications
                    </Heading>
                    <Text mb={4}>The ideal candidate will be strong in the following areas:</Text>
                    <List spacing={2} mb={4} listStyleType="initial" pl="3rem">
                      <ListItem>
                        History of success in a sales role (This need not be a formal sales role; many roles involve
                        sales even if sales isn&apos;t in the title)
                      </ListItem>
                      <ListItem>Willingness to learn, listen and be coached</ListItem>
                      <ListItem>Excellent organization and time management skills</ListItem>
                      <ListItem>Willingness to call on cold leads by phone, email and other media</ListItem>
                      <ListItem>Ability to engage cold prospects and set sales appointments</ListItem>
                      <ListItem>Ability to follow an established sales process</ListItem>
                      <ListItem>Ability to ask effective questions, listen and qualify a firm</ListItem>
                      <ListItem>Effective verbal and written communication skills</ListItem>
                      <ListItem>Ability to run effective software demos</ListItem>
                      <ListItem>Ability to effectively leverage customer relationship management technology</ListItem>
                    </List>

                    <Heading as="h2" size="lg" mb={4}>
                      Our Team
                    </Heading>
                    <Text mb={4}>
                      Becoming a part of Confido Legal will allow you to shape a growing team and build leadership
                      skills. Here are some of the benefits we offer:
                    </Text>
                    <List spacing={2} mb={4} listStyleType="initial" pl="3rem">
                      <ListItem>$60,000 starting salary</ListItem>
                      <ListItem>Fully remote role with 2 weeks of onsite meetings per year</ListItem>
                      <ListItem>Open PTO</ListItem>
                      <ListItem>Fully paid medical, vision, dental insurance</ListItem>
                    </List>

                    <Text mb={4}>
                      It is critical to keep our core principles front and center in the decisions we make each day.
                      These are the principles that guide how we operate:
                    </Text>
                    <List spacing={2} mb={4} listStyleType="initial" pl="3rem">
                      <ListItem>We believe in purpose over profit</ListItem>
                      <ListItem>We believe that each team member is an owner</ListItem>
                      <ListItem>We believe we thrive in a culture of mutual support</ListItem>
                      <ListItem>We believe in building for the long term</ListItem>
                    </List>
                    <Flex w="100%" justify="center">
                      <Link href="/" passHref>
                        <Button>Apply Now</Button>
                      </Link>
                    </Flex>

                    <Text fontSize="sm" color="gray.600" mt={4}>
                      Confido Legal is an equal opportunity employer, and all qualified applicants will receive
                      consideration for employment without regard to race, color, religion, sex, national origin, sexual
                      orientation, gender identity/expression, age, disability status, protected veteran status, or any
                      other characteristic protected by law.
                    </Text>
                  </Box>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        )}
        {(searchTerm === '' || 'Senior Full Stack Engineer'.toLowerCase().includes(searchTerm.toLowerCase())) && (
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Senior Full Stack Engineer (Position Filled)
                    </Box>
                    {isExpanded ? (
                      <MinusIcon
                        fontSize="24px"
                        backgroundColor="green"
                        borderRadius="50%"
                        padding="4px"
                        margin="10px"
                        color="white"
                      />
                    ) : (
                      <AddIcon
                        fontSize="24px"
                        backgroundColor="green"
                        borderRadius="50%"
                        padding="4px"
                        margin="10px"
                        color="white"
                      />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box textAlign="left" mx="auto" p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
                    <Text textIndent="3rem" mb={4}>
                      Confido Legal is a fast-growing fintech platform that helps legal technology companies and law
                      firms embed payments and finance features into their products and financial workflows.
                    </Text>
                    <Text textIndent="3rem" mb={4}>
                      By adding financial flexibility at the point where lawyers and clients transact, we increase the
                      number of people who can access the justice system and expand the addressable market for our law
                      firm clients. We are looking for a software engineer to join us on this mission.
                    </Text>
                    <Text textIndent="3rem" mb={4}>
                      The ideal candidate must have a strong sense of responsibility and willingness to independently
                      solve problems, find solutions and build scalable solutions.
                    </Text>
                    <Text textIndent="3rem" mb={4}>
                      We’re building a state-of-the-art GraphQL API that gives developers a central point to access all
                      the financial products they need to deliver embedded payments and finance features to their law
                      firm clients. We’re developers building for developers.
                    </Text>
                    <Text textIndent="3rem" mb={4}>
                      We’re building a small team of highly skilled and highly efficient engineers. Our engineers are
                      expected to work on every piece of the application, from frontend to dev-ops and everything in
                      between. Our product is twofold. We maintain a GraphQL API that allows other developers to embed
                      financial functionality into their apps. We also maintain a SaaS application, where law firm users
                      can manage their settings and accept payments. You will have a lot of responsibility and your work
                      will directly affect the success of the company.
                    </Text>
                    <Text textIndent="3rem" mb={4}>
                      We put a lot of thought and effort into the architecture and design of our code. We write code
                      that is reliable, maintainable, and easy to read.
                    </Text>

                    <Heading as="h2" size="lg" mb={4}>
                      Role Responsibilities
                    </Heading>
                    <List spacing={2} mb={4} listStyleType="initial" pl="3rem">
                      <ListItem>Design, build, deploy, debug and maintain an amazing financial platform</ListItem>
                      <ListItem>Conduct architecture design and product design</ListItem>
                      <ListItem>Write clean code that is easy to read, maintainable and testable</ListItem>
                      <ListItem>Design and implement product specifications</ListItem>
                      <ListItem>
                        Work with the marketing and sales teams to understand business requirements and help translate
                        those requirements into technical architecture and design
                      </ListItem>
                      <ListItem>
                        Become an expert on technical aspects of the platform, capable of reviewing design and code,
                        merging code to the master branch, making deployments and troubleshooting the production
                        platform
                      </ListItem>
                      <ListItem>Build automated regression tests</ListItem>
                      <ListItem>Conduct code reviews</ListItem>
                      <ListItem>
                        Develop a high degree of empathy for our clients and build that perspective into the code
                      </ListItem>
                      <ListItem>Actively participate in company strategic planning</ListItem>
                    </List>

                    <Heading as="h2" size="lg" mb={4}>
                      Technology Stack
                    </Heading>
                    <List spacing={2} mb={4} listStyleType="initial" pl="3rem">
                      <ListItem>Typescript - all code is written in Typescript</ListItem>
                      <ListItem>MySQL - hosted in the cloud on an AWS RDS instance</ListItem>
                      <ListItem>
                        React and Next.js - frontend is a mixture of older SPAs written in React and newer Next.js apps.
                        Currently transitioning all pages to Next.js
                      </ListItem>
                      <ListItem>AWS - all infrastructure is deployed on AWS. We use Pulumi for IaC</ListItem>
                      <ListItem>Docker & ECS - services run in Docker containers and run in ECS clusters</ListItem>
                      <ListItem>GraphQL - our external facing API is GraphQL</ListItem>
                      <ListItem>Figma - we use Figma to design UI/UX - our developers do a lot of this</ListItem>
                    </List>
                    <Text mb={4}>
                      An ideal candidate is an expert in three or more of the above (Typescript required) and has 5+
                      years of experience as a software engineer.
                    </Text>

                    <Heading as="h2" size="lg" mb={4}>
                      Our Team
                    </Heading>
                    <Text mb={4}>
                      Becoming a part of Confido Legal will allow you to shape a growing team and build leadership
                      skills. Here are some of the benefits we offer:
                    </Text>
                    <List spacing={2} mb={4} listStyleType="initial" pl="3rem">
                      <ListItem>$120,000 - $180,000 starting salary</ListItem>
                      <ListItem>Fully remote role with 2 weeks of onsite meetings per year</ListItem>
                      <ListItem>Open PTO</ListItem>
                      <ListItem>Fully paid medical, vision, dental insurance</ListItem>
                      <ListItem>Stock options</ListItem>
                    </List>

                    <Text mb={4}>
                      It is critical to keep our core principles front and center in the decisions we make each day.
                      These are the principles that guide how we operate:
                    </Text>
                    <List spacing={2} mb={4} listStyleType="initial" pl="3rem">
                      <ListItem>We believe in purpose over profit</ListItem>
                      <ListItem>We believe that each team member is an owner</ListItem>
                      <ListItem>We believe we thrive in a culture of mutual support</ListItem>
                      <ListItem>We believe in building for the long term</ListItem>
                    </List>

                    <Flex w="100%" justify="center">
                      <Link href="/" passHref>
                        <Button>Apply Now</Button>
                      </Link>
                    </Flex>

                    <Text fontSize="sm" color="gray.600" mt={4}>
                      Confido Legal is an equal opportunity employer, and all qualified applicants will receive
                      consideration for employment without regard to race, color, religion, sex, national origin, sexual
                      orientation, gender identity/expression, age, disability status, protected veteran status, or any
                      other characteristic protected by law.
                    </Text>
                  </Box>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        )}
      </Accordion>
    </>
  );
};

export default JobAccordian;
