import tw from 'twin.macro';

export const Wrapper = tw.div`
 flex justify-center items-center h-screen w-screen bg-green-100
`;

export const Card = tw.div`
  border-2 border-gray-200 bg-white shadow-lg w-11/12 md:w-9/12 h-auto md:py-8 py-4 rounded-sm flex flex-col items-center
`;

export const Form = tw.form`flex flex-col w-11/12 md:w-9/12`;

export const Title = tw.h4`
  text-center text-2xl text-teal-900 font-bold md:mb-6 lg:mb-8 mb-4
`;

export const InputErrMess = tw.p`md:-mt-6 -mt-4 text-lg text-red-600  md:mb-4 mb-2 font-normal`;

export const Label = tw.label`text-xl text-teal-900 font-bold`;

export const Input = tw.input`
 outline-none border-2 border-gray-300 bg-gray-100 rounded-md md:mb-6 mb-4 py-2 pl-2 font-bold text-gray-700
`;

export const ShowPassword = tw.span`md:-mt-6 -mt-4 md:mb-6 mb-4`;

export const Submit = tw.button`rounded-md py-2 px-8 bg-green-600 text-center text-2xl font-bold text-teal-900`;
