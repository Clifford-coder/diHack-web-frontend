import tw from 'twin.macro';
import { SectionSubheading } from '../../components/misc';

export const Wrapper = tw.div`md:px-12 px-4 flex flex-col md:pt-20 pt-10 bg-green-100 `;

export const HomeBut = tw.div`
md:pb-8 font-bold text-blue-900 cursor-pointer
`;

export const Heading = tw(
  SectionSubheading
)`mx-auto md:pb-8  font-bold normal-case! text-gray-700`;

export const ContentWrap = tw.div`md:grid md:grid-cols-3 lg:grid-cols-4 mx-auto justify-between md:gap-6`;

export const VideoCard = tw.div`shadow-md bg-white cursor-pointer my-4 md:my-0`;

export const VideoCardImg = tw.img`lg:w-56 lg:h-56`;

export const VideoCardChannelWrap = tw.div`flex`;

export const VideoCardChannelLogo = tw.img``;

export const VideoCardDate = tw.p``;

export const VideoCardTitle = tw.h4`text-xl p-2 text-teal-900 font-bold lg:w-56`;
