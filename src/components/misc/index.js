import tw, { styled } from 'twin.macro';

export const Container = tw.div`font-bold text-4xl`;

export const SectionHeading = tw.h1`font-bold text-2xl md:text-5xl lg:text-6xl uppercase`;

export const SectionSubheading = tw.h3`text-xl md:text-3xl lg:text-4xl font-normal capitalize`;

export const PrimaryButton = styled.span`
  ${({ color }) => {
    switch (color) {
      case 'red':
        return tw`bg-red-600 text-white `;
      default:
        return tw`bg-green-600 text-teal-900 `;
    }
  }}
  ${tw` px-4 rounded-md text-xl font-bold cursor-pointer`}
`;
