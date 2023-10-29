import Random from './components/Random';
import Tag from './components/Tag'

export default function App() {
  return (
    <div className='w-full min-h-screen max-h-max flex flex-col background'>
      <h1 className='bg-white rounded-lg text-3xl font-bold mt-[40px] text-center ml-[25px] mr-[25px] py-[13px] '>RANDOM GIF's</h1>
      <div className='flex flex-col w-full items-center'>
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
