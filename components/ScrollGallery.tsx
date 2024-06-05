import { Box, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useRef } from 'react';
import OpinionCard from './OpinionCard';
import { StaticImageData } from 'next/image';
import '../app/globals.css';

export interface Opinion {
  id: number;
  image: StaticImageData;
  imageAlt: string;
  opinion: string[];
  name: string;
  title: string;
}

interface ScrollableGalleryProps {
  opinions: Opinion[];
}

const ScrollableGallery: React.FC<ScrollableGalleryProps> = ({ opinions }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const scroll = (direction: 'left' | 'right') => {
    const { current } = containerRef;
    if (current) {
      if (direction === 'left') {
        current.scrollBy({ left: -current.offsetWidth / 2, behavior: 'smooth' });
        if (current.scrollLeft === 0) {
          current.scrollLeft = current.scrollWidth - current.offsetWidth;
        }
      } else {
        current.scrollBy({ left: current.offsetWidth / 2, behavior: 'smooth' });
        if (current.scrollLeft + current.offsetWidth >= current.scrollWidth) {
          current.scrollLeft = 0;
        }
      }
    }
  };

  return (
    <Box position="relative" overflow="hidden" maxW={{ base: 'full', lg: '1000px' }} mx="auto">
      <Flex ref={containerRef} overflowX="scroll" className="hide-scrollbar" scrollBehavior="smooth" width="full">
        {opinions.map((opinion) => (
          <Box key={opinion.id} display="inline-block" width={400} flex="0 0 auto" px={10} my={10} mx={10}>
            <OpinionCard
              image={opinion.image}
              imageAlt={opinion.imageAlt}
              opinion={opinion.opinion}
              name={opinion.name}
              title={opinion.title}
            />
          </Box>
        ))}
      </Flex>
      {!isMobile && (
        <>
          <IconButton
            aria-label="Scroll left"
            icon={<ChevronLeftIcon />}
            position="absolute"
            top="50%"
            left="0"
            transform="translateY(-50%)"
            onClick={() => scroll('left')}
          />
          <IconButton
            aria-label="Scroll right"
            icon={<ChevronRightIcon />}
            position="absolute"
            top="50%"
            right="0"
            transform="translateY(-50%)"
            onClick={() => scroll('right')}
          />
        </>
      )}
    </Box>
  );
};

export default ScrollableGallery;
