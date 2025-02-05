import React, { useEffect } from 'react';

const AdSenseHorizontal: React.FC = () => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', minHeight: '100px' }}
      data-ad-client="ca-pub-5161705954627943"
      data-ad-slot="1345119377"
      data-ad-format="horizontal"
      data-full-width-responsive="false"
    ></ins>
  );
};

export default AdSenseHorizontal;