import { useEffect, useState } from 'react'
import './App.css'
import { Battery, Signal, Wifi } from 'lucide-react'

interface PhoneDisplayProps {
  display: boolean
}

const PhoneDisplay: React.FC<PhoneDisplayProps> = ({ display }) => {
  if (!display) return null
  /**
   * Gets the current time formatted as a string in 'HH:mm' format (24-hour clock).
   *
   * @returns {string} The current time in 'HH:mm' format.
   */
  const time = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return (
    <>
      <div className='min-h-screen flex items-center justify-center p-6'>
        {/* iPhone 14 Pro Max frame */}
        <div className='w-[420px] h-[900px] bg-black rounded-[60px] p-4 relative shadow-2xl border-8 border-gray-800'>
          {/* Screen */}
          <div className='w-full h-full bg-black rounded-[48px] relative overflow-hidden'>
            {/* Dynamic Island */}
            <div className='absolute left-1/2 -translate-x-1/2 top-2 w-[126px] h-[34px] bg-black rounded-full z-20'>
              {/* Front camera */}
              <div className='absolute right-6 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gray-950 ring-1 ring-gray-800'></div>
              {/* FaceID sensors */}
              <div className='absolute left-6 top-1/2 -translate-y-1/2 w-6 h-2 rounded-full bg-gray-950 ring-1 ring-gray-800'></div>
            </div>

            {/* Status Bar */}
            <div className='absolute top-3 left-0 right-0 px-6 flex justify-between items-center'>
              <div className='text-white text-sm font-medium'>{time}</div>
              <div className='flex items-center gap-2'>
                <Signal className='w-4 h-4 text-white' />
                <Wifi className='w-4 h-4 text-white' />
                <Battery className='w-4 h-4 text-white' />
              </div>
            </div>

            {/* Wallpaper and Content */}
            <div className='w-full h-full z-10 wallpaper'>
              {/* App Grid */}
              <div className='grid grid-cols-4 gap-6 p-6 pt-24 '>
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className='aspect-square rounded-2xl bg-white backdrop-blur-md flex items-center justify-center shadow-lg'
                  >
                    <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-white to-white'></div>
                  </div>
                ))}
              </div>

              {/* Dock */}
              <div className='absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-20 bg-white backdrop-blur-md rounded-2xl flex items-center justify-around px-4'>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className='w-14 h-14 rounded-xl bg-gradient-to-br from-white to-white'
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function App() {
  const [display, setDisplay] = useState(true)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log('Received event:', event)
      if (event.data.type === 'open') {
        setDisplay(true)
      } else if (event.data.type === 'close') {
        setDisplay(false)
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return (
    <div className='phone-box'>
      <PhoneDisplay display={display} />
    </div>
  )
}

export default App
