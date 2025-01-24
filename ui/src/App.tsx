import { useEffect, useState } from 'react';
import './App.css';

interface PhoneDisplayProps {
    display: boolean;
}

const PhoneDisplay: React.FC<PhoneDisplayProps> = ({ display }) => {
    if (!display) return null;

    return (
        <div className="phone-display">
            <h1 style={{ color: 'black' }}>PHONE DISPLAY</h1>
            <h1>IM GOING AHHHHHHHHHHHHHH</h1>
        </div>
    );
};

function App() {
    const [display, setDisplay] = useState(true);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            console.log('Received event:', event);
            if (event.data.type === 'open') {
                setDisplay(true);
            } else if (event.data.type === 'close') {
                setDisplay(false);
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return (
        <div className="phone-box">
            <PhoneDisplay display={display} />
        </div>
    );
}

export default App;
