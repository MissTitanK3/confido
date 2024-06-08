import { Box } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';

type GrayscaleImageProps = {
  src: StaticImageData;
  alt: string;
  srcHeight?: number;
  srcWidth?: number;
};

export default function GrayscaleImage({ src, alt, srcHeight = 120, srcWidth = 120 }: GrayscaleImageProps) {
  return (
    <Box m="1rem">
      <Box
        as="div"
        sx={{
          filter: 'grayscale(100%)',
          transition: 'filter 0.3s',
          ':hover': {
            filter: 'grayscale(0%)',
          },
        }}>
        <Image src={src} alt={alt} width={srcWidth} height={srcHeight} />
      </Box>
    </Box>
  );
}
