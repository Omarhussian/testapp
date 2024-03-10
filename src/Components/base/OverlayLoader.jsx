import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react'

const OverlayLoader = ({ Profile }) => {

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 50,
        // color: '#1F122F'
        color: Profile ? '#1F122F' : 'white'
      }}
      spin
    />
  );

  return (
    <div style={{ zIndex: '9999999' }} className='h-screen w-[100vw] fixed left-0 top-0 flex items-center justify-center'>
      <div className='bg-[#00000034] w-[100vw] h-screen absolute opacity-70'></div>
      <Spin indicator={antIcon} />
    </div>
  )
}

export default React.memo(OverlayLoader)