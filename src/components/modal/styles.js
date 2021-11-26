import tw, { styled } from 'twin.macro';
import ReactModalAdaptor from '../helpers/ReactModalAdaptor';

export const StyledModal = styled(ReactModalAdaptor)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;

export const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-teal-700`;

export const CloseIcon = tw.i`text-3xl`;
