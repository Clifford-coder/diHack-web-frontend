import tw from 'twin.macro';
import ReactModalAdaptor from '../helpers/ReactModalAdaptor';

export const StyledModal = tw(ReactModalAdaptor)``;

export const ContentCenter = tw.div`flex items-center flex-col`;

export const CloseIconWrap = tw.div`flex justify-end pb-10`;

export const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-teal-700`;

export const CloseIcon = tw.i`text-3xl`;
