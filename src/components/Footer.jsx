import React from 'react'

function Footer() {
  return (
    <>
      <div className="flex items-center p-4 shadow-md h-[100px] w-full px-10">
        <div className="footer flex_middle">
          <div className="text cursor_pointer">
            <span style={{ marginBottom: '0.5em', fontSize: '0.8em' }}>
              {String.fromCodePoint('0X00A9')}
            </span>{' '}
            <a
              href="https://linkedin.com"
              target={'_blank'}
              rel="noreferrer nofollow"
            >
              Polygon Hackathon Project - CrowdUp
            </a>
            <span style={{ fontSize: '0.8em', fontWeight: '400' }}> 2022</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
