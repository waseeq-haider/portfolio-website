import React, { useState, useEffect } from 'react';

const SkillGame = () => {
    const [gameState, setGameState] = useState<'start' | 'playing' | 'win'>('start');
    const [terminalLines, setTerminalLines] = useState<string[]>(['[SYSTEM] INITIALIZING SECURITY CHALLENGE...']);
    const [input, setInput] = useState('');
    const [currentStep, setCurrentStep] = useState(0);

    const challenges = [
        { q: 'Enter the default port for HTTP:', a: '80', skill: 'Network Fundamentals' },
        { q: 'Identify the tool used for packet sniffing (starts with W):', a: 'wireshark', skill: 'Packet Analysis' },
        { q: 'Command to list all files in Linux:', a: 'ls', skill: 'Linux Mastery' },
        { q: 'Nmap flag for service version detection:', a: '-sv', skill: 'Penetration Testing' }
    ];

    const handleInput = (e: React.FormEvent) => {
        e.preventDefault();
        const normalizedInput = input.toLowerCase().trim();
        const currentChallenge = challenges[currentStep];

        if (normalizedInput === currentChallenge.a) {
            setTerminalLines(prev => [...prev, `> ${input}`, `[SUCCESS] UNLOCKED: ${currentChallenge.skill}`]);
            if (currentStep + 1 < challenges.length) {
                setCurrentStep(prev => prev + 1);
            } else {
                setGameState('win');
            }
        } else {
            setTerminalLines(prev => [...prev, `> ${input}`, `[ERROR] ACCESS DENIED. RETRY.`]);
        }
        setInput('');
    };

    if (gameState === 'start') {
        return (
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h2 style={{ color: '#000080' }}>SECURITY_CHALLENGE.EXE</h2>
                <p>Prove your skills to unlock the master profile.</p>
                <button 
                    onClick={() => setGameState('playing')}
                    style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#c0c0c0', border: '2px solid #fff', borderRightColor: '#000', borderBottomColor: '#000' }}
                >
                    START_HACK()
                </button>
            </div>
        );
    }

    if (gameState === 'win') {
        return (
            <div style={{ textAlign: 'center', padding: '20px', color: '#28a745' }}>
                <h2>[ ACCESS GRANTED ]</h2>
                <p>Waseeq's full skill set is now available.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {challenges.map(c => (
                        <div key={c.skill} style={{ border: '1px solid #28a745', padding: '5px' }}>
                            {c.skill} [MASTERED]
                        </div>
                    ))}
                </div>
                <button 
                    onClick={() => {setGameState('start'); setCurrentStep(0); setTerminalLines(['[SYSTEM] REBOOTING...']);}}
                    style={{ marginTop: '20px', padding: '5px 15px', cursor: 'pointer' }}
                >
                    PLAY AGAIN
                </button>
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#000', color: '#00ff41', padding: '10px', fontFamily: 'monospace' }}>
            <div style={{ flex: 1, overflowY: 'auto' }}>
                {terminalLines.map((line, i) => <div key={i}>{line}</div>)}
                <div style={{ marginTop: '10px' }}>[CHALLENGE {currentStep + 1}/{challenges.length}]</div>
                <div>{challenges[currentStep].q}</div>
            </div>
            <form onSubmit={handleInput} style={{ display: 'flex', marginTop: '10px' }}>
                <span>&gt;&nbsp;</span>
                <input 
                    autoFocus
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{ backgroundColor: 'transparent', border: 'none', color: '#00ff41', outline: 'none', flex: 1, fontFamily: 'monospace' }}
                />
            </form>
        </div>
    );
};

export default SkillGame;
