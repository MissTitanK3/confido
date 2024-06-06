'use client';

import React from 'react';
import FooterLogo from '@/public/images/Confido_footer_logo_icon.webp';
import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';
import '../app/globals.css';

type Props = {};

function Footer({}: Props) {
  const currentYear = new Date().getFullYear();
  return (
    <Box mb="2rem" textAlign="center">
      <Flex mt="1rem" justify="center" gap="1rem" alignContent="center">
        <Image src={FooterLogo} alt="Confido Logo" height={50} width={70} />
        <Flex flexDir="column" justify="center" textAlign="center">
          <Flex>
            <Link className="spec-link" href="">
              Financially Legal
            </Link>{' '}
            &nbsp; | &nbsp;{' '}
            <Link className="spec-link" href="">
              Support Center
            </Link>
          </Flex>
          <Flex justify="space-evenly" textAlign="center" mt={2}>
            <Link className="spec-link-social" href="#">
              <FaXTwitter />
            </Link>
            <Link className="spec-link-social" href="#">
              <FaLinkedin />
            </Link>
            <Link className="spec-link-social" href="#">
              <FaYoutube />
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex mt="1rem" justify="center" gap="1rem"></Flex>
      <Box mt="1rem">
        <Heading as="h3" size="md" mb="0.5rem">
          Practice Areas
        </Heading>
        <Link className="spec-link" href="/business-law">
          Business Law
        </Link>
        &nbsp; |&nbsp;
        <Link className="spec-link" href="/criminal-law">
          Criminal Law
        </Link>
        &nbsp;|&nbsp;
        <Link className="spec-link" href="/outsourced-general-counsel">
          Outsourced General Counsel
        </Link>
        &nbsp;|&nbsp;
        <Link className="spec-link" href="/mediation">
          Mediation
        </Link>
        &nbsp;|&nbsp;
        <Link className="spec-link" href="/immigration-law">
          Immigration Law
        </Link>
        &nbsp;|&nbsp;
        <Link className="spec-link" href="/civil-rights-law">
          Civil Rights Law
        </Link>
        &nbsp;|&nbsp;
        <Link className="spec-link" href="/litigation">
          Litigation
        </Link>
        &nbsp;|&nbsp;
        <Link className="spec-link" href="/intellectual-property-law">
          Intellectual Property Law
        </Link>
        &nbsp;|&nbsp;
        <Link className="spec-link" href="/family-law">
          Family Law
        </Link>
        &nbsp;|&nbsp;
        <Link className="spec-link" href="/bankruptcy-law">
          Bankruptcy Law
        </Link>
        &nbsp;|&nbsp;
        <Link className="spec-link" href="/elder-law">
          Elder Law
        </Link>
        &nbsp; |&nbsp;
        <Link className="spec-link" href="/estate-and-probate">
          Estate and Probate
        </Link>
      </Box>
      <Box mt="1rem">
        <Text as="span">{currentYear} Confido Legal</Text> &nbsp;|&nbsp;
        <Link className="spec-link" href="/privacy-policy">
          Privacy Policy
        </Link>{' '}
        |
        <Link className="spec-link" href="/terms-and-conditions">
          Terms and Conditions
        </Link>{' '}
        &nbsp;|&nbsp;
        <Link className="spec-link" href="/disclaimer">
          Disclaimer
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
