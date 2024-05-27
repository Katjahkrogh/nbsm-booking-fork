import { Steps, ConfigProvider } from 'antd';
const items = [
  {
    title: '',
  },
  {
    title: '',
  },
  {
    title: '',
  },
  {
    title: '',
  },
];
const ProgressBar = ({ step }) => (
  <div className="md:w-[580px] flex justify-center items-center">
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1D3A36',
          colorText: '#FDFCF8',
          colorBorderBg: '#FDFCF8',
          colorSplit: '#1D3A36',
          colorTextDisabled: '#FDFCF8',
        },
      }}>
      <div className="my-5 text-white">
        <Steps
          current={step}
          size="small"
          labelPlacement="vertical"
          responsive={false}
          items={items}
        />
      </div>
    </ConfigProvider>
  </div>
);
export default ProgressBar;
