import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Tin Dev Studios - Modern Web Apps & Software Solutions';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(41, 121, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(46, 224, 172, 0.1) 0%, transparent 50%)',
          padding: '80px',
        }}
      >
        {/* Company Name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            letterSpacing: '0.05em',
            background: 'linear-gradient(135deg, #ffffff 0%, #e3f2fd 30%, #2EE0AC 70%, #2979FF 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
            display: 'flex',
          }}
        >
          TIN DEV STUDIOS
        </div>

        {/* Accent Line */}
        <div
          style={{
            width: 200,
            height: 6,
            background: 'linear-gradient(90deg, #2EE0AC 0%, #2979FF 100%)',
            borderRadius: 3,
            marginBottom: 40,
            display: 'flex',
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 42,
            color: '#ffffff',
            opacity: 0.9,
            fontWeight: 500,
            lineHeight: 1.4,
            marginBottom: 20,
            display: 'flex',
          }}
        >
          Modern Web Apps &
        </div>
        <div
          style={{
            fontSize: 42,
            color: '#ffffff',
            opacity: 0.9,
            fontWeight: 500,
            lineHeight: 1.4,
            marginBottom: 60,
            display: 'flex',
          }}
        >
          Software Solutions
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: 28,
            color: '#94a3b8',
            display: 'flex',
          }}
        >
          Dallas, TX
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}