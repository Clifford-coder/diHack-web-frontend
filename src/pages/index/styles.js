import tw, { styled } from 'twin.macro';
import { SectionHeading, SectionSubheading } from '../../components/misc';

export const Header = tw.div`px-6 bg-green-600 h-auto md:grid md:grid-cols-2 `;

export const ColOneOfHeader = tw.div`md:col-span-1 md:p-10 p-2`;

export const Label = tw.label`text-xl text-teal-900 font-bold text-left!`;

export const SelectVoice = tw.select`rounded-md bg-gray-200 w-11/12 p-2 md:p-6`;

export const SelectOptin = tw.option`w-11/12`;

export const DeafIllustration = tw.img`md:w-4/5 h-auto w-auto`;

export const ColTwoOfHeader = styled.div`
  ${tw`flex justify-center items-center flex-col md:p-10 p-2`}
`;

export const Heading = styled(SectionHeading)`
  ${tw`text-teal-900`}
`;

export const Subheading = tw(SectionSubheading)`text-teal-900`;

export const Main = tw.div`bg-green-100 pb-16`;

export const MainHeading = tw(Heading)`text-teal-900! pt-10 text-center`;

export const MainSubheading = tw(Subheading)`text-center`;

export const Navigations = tw.ul`text-center`;

export const H4 = tw.h4`font-bold text-xl text-gray-600 mt-2 md:mt-6`;

export const TextBox = tw.div`border-2 border-gray-200 rounded-md w-11/12 p-4 md:p-8 `;

export const Navigation = styled.li`
  ${({ red }) => {
    switch (red) {
      case 'yes':
        return tw`bg-red-600 text-white hover:text-red-600`;
      default:
        return tw`bg-green-600 text-teal-700`;
    }
  }}
  ${tw`inline-block font-medium! cursor-pointer rounded-full md:px-4 md:py-2 
	text-2xl md:text-3xl lg:text-4xl px-2 py-1
	 normal-case! lg:m-4 md:m-2 m-1 hover:bg-white hover:shadow-inner hover:scale-105 transform transition-all duration-300`}
`;

export const SpeechToTextWrap = styled.div`
  ${({ isRed }) =>
    isRed
      ? tw`hover:bg-red-600 hover:text-white border-2 border-red-600 bg-white`
      : tw`hover:bg-green-600 hover:text-white border-2 border-green-600 bg-white`}
  ${tw`rounded-full cursor-pointer mt-4  h-24 w-24 flex items-center justify-center`}
`;
export const Microphone = tw.i`text-4xl font-bold`;

export const TextArea = tw.textarea`outline-none w-full md:w-11/12 md:mt-4 mt-2 border-2 border-gray-300 bg-gray-100 rounded-md md:mb-6 mb-4 py-2 pl-2 font-bold text-gray-700`;
export const AudioPlayerWrapper = tw.div`w-full -mt-8 h-auto py-8 px-12 rounded-md bg-white mx-auto overflow-hidden`;
export const Audio = tw.audio`w-full focus:outline-none mt-2`;
export const Source = tw.source``;

// md:bg-gradient-to-l md:from-white md:via-blue-300  md:to-blue-600 bg-gradient-to-t from-white via-green-300 to-blue-600
