'use client';

import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Button,
  Stack,
  useColorMode,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import Logo from '@/public/images/Confido.webp';
import Image from 'next/image';
import { NavLink } from './NavLink';
import Link from 'next/link';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="#0F1F33"
      px={8}
      width="100dvw"
      sx={{
        position: 'fixed',
        zIndex: 100,
        width: '100%',
        top: 0,
        left: 0,
        marginBottom: '1.45rem',
      }}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        alignContent={'center'}
        alignSelf={'center'}
        textAlign={'center'}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '300px',
          }}>
          <NavLink nav="/">
            <Image src={Logo} alt="Confido Logo" height={48} priority />
          </NavLink>
          <Stack direction={'row'} spacing={7} display={{ base: 'none', lg: 'flex' }}>
            <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
          </Stack>
        </Box>

        <Box display={{ base: 'none', md: 'flex' }} color="whitesmoke" alignItems={'center'}>
          <NavLink nav="/developer-center">Developer</NavLink>
          <NavLink nav="/solutions">Law Firms</NavLink>
          <NavLink nav="/pricing">Pricing</NavLink>
          <NavLink nav="/contact">Contact</NavLink>
          <NavLink nav="/about">About</NavLink>
        </Box>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7} display={{ base: 'none', lg: 'flex' }}>
            <Button>Schedule a Demo</Button>
            <Button
              onClick={() => {
                window.open('https://app.confidolegal.com', '_blank');
              }}>
              Sign-In
            </Button>
          </Stack>
          <IconButton
            size="md"
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ base: 'flex', lg: 'none' }}
            onClick={onOpen}
          />
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button> Confido
            Legal
          </DrawerHeader>

          <DrawerBody>
            <Stack as="nav" spacing={4}>
              <NavLink nav="/developer-center">Developer</NavLink>
              <NavLink nav="/solutions">Law Firms</NavLink>
              <NavLink nav="/pricing">Pricing</NavLink>
              <NavLink nav="/contact">Contact</NavLink>
              <NavLink nav="/about">About</NavLink>
              <Button>Schedule a Demo</Button>
              <Button
                onClick={() => {
                  window.open('https://app.confidolegal.com', '_blank');
                }}>
                Sign-In
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
