import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import GitHubProjects from './OS/components/GitHubProjects';
import SkillGame from './OS/components/SkillGame';

const OS = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [windows, setWindows] = useState<any[]>([
        { id: 'cv', title: 'Waseeq_Resume.exe', icon: '📝', active: true, z: 10 },
        { id: 'projects', title: 'C:\\Projects\\CyberSecurity', icon: '🔍', active: false, z: 1 },
        { id: 'game', title: 'Security_Breach_Game.exe', icon: '🎮', active: false, z: 1 },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const toggleWindow = (id: string) => {
        setWindows(prev => {
            const isClosing = prev.find(w => w.id === id)?.active;
            return prev.map(w => {
                if (w.id === id) return { ...w, active: !w.active, z: isClosing ? 1 : 100 };
                return { ...w, z: Math.max(1, w.z - 1) };
            });
        });
    };

    const Window = ({ id, title, children, width = '75%', height = '80%' }: any) => {
        const win = windows.find(w => w.id === id);
        if (!win || !win.active) return null;
        return (
            <div style={{
                position: 'absolute',
                top: id === 'cv' ? '5%' : id === 'game' ? '10%' : '15%',
                left: id === 'cv' ? '5%' : id === 'game' ? '12%' : '20%',
                width,
                height,
                backgroundColor: '#c0c0c0',
                border: '2px solid #fff',
                borderRightColor: '#000',
                borderBottomColor: '#000',
                display: 'flex',
                flexDirection: 'column',
                zIndex: win.z,
                boxShadow: '2px 2px 10px rgba(0,0,0,0.5)'
            }}>
                <div style={{
                    backgroundColor: '#000080',
                    color: '#fff',
                    padding: '3px 6px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    fontSize: '13px',
                    cursor: 'default'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span>🕹️</span> {title}
                    </div>
                    <button 
                        onClick={() => toggleWindow(id)}
                        style={{
                            backgroundColor: '#c0c0c0',
                            border: '1px solid #fff',
                            borderRightColor: '#444',
                            borderBottomColor: '#444',
                            padding: '0 4px',
                            cursor: 'pointer',
                            fontSize: '11px',
                            fontWeight: 'bold'
                        }}
                    >X</button>
                </div>
                <div style={{ 
                    flex: 1, 
                    overflowY: 'auto', 
                    padding: id === 'game' ? '0' : '20px', 
                    backgroundColor: id === 'game' ? '#000' : '#fff',
                    border: '1px solid #808080',
                    margin: '2px'
                }} className="custom-scrollbar">
                    {children}
                </div>
            </div>
        );
    };

    const DesktopIcon = ({ id, label, icon }: any) => (
        <div onDoubleClick={() => toggleWindow(id)} style={{ width: '80px', textAlign: 'center', cursor: 'pointer', padding: '10px' }}>
            <div style={{ fontSize: '42px', filter: 'drop-shadow(2px 2px #000)', transition: 'transform 0.1s' }}
                 onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                 onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                {icon}
            </div>
            <div style={{ color: '#fff', fontSize: '11px', marginTop: '4px', textShadow: '1px 1px #000', backgroundColor: windows.find(w => w.id === id)?.active ? '#000080' : 'transparent' }}>
                {label}
            </div>
        </div>
    );

    return (
        <div style={{ 
            height: '100%', 
            backgroundColor: '#008080', // Classic Teal
            position: 'relative',
            overflow: 'hidden',
            fontFamily: '"MS Sans Serif", Arial, sans-serif',
            userSelect: 'none'
        }}>
            {/* Desktop Icons */}
            <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <DesktopIcon id="cv" label="My Profile" icon="📄" />
                <DesktopIcon id="projects" label="Projects" icon="📁" />
                <DesktopIcon id="game" label="Skill Game" icon="🎮" />
            </div>

            {/* Resume Window */}
            <Window id="cv" title="Waseeq_Haider_CV.txt">
                <div style={{ borderBottom: '2px double #000', paddingBottom: '10px', marginBottom: '15px' }}>
                    <h1 style={{ margin: 0, fontSize: '28px' }}>Waseeq Haider</h1>
                    <p style={{ margin: '5px 0', color: '#666' }}>Cybersecurity Specialist | Full-Stack Web Developer</p>
                </div>
                <h3>[ CORE EXPERTISE ]</h3>
                <p>Metasploit, Burp Suite, Nmap, Wireshark, React.js, Linux Mastery.</p>
                <hr />
                <p>Certified Ethical Hacker (CEH) with a passion for building secure web applications.</p>
            </Window>

            {/* Projects Window */}
            <Window id="projects" title="GitHub Explorer">
                <GitHubProjects username="waseeq-haider" />
            </Window>

            {/* Game Window */}
            <Window id="game" title="Security Breach v1.0" width="60%" height="60%">
                <SkillGame />
            </Window>

            {/* Taskbar */}
            <div style={{
                height: '30px',
                backgroundColor: '#c0c0c0',
                borderTop: '2px solid #fff',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '2px',
                zIndex: 1000
            }}>
                <button style={{
                    fontWeight: 'bold',
                    padding: '2px 10px',
                    backgroundColor: '#c0c0c0',
                    border: '2px solid #fff',
                    borderRightColor: '#000',
                    borderBottomColor: '#000',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                }}>
                    <span style={{ fontSize: '16px' }}>🔳</span> Start
                </button>
                
                <div style={{ flex: 1, display: 'flex', gap: '5px', paddingLeft: '10px' }}>
                    {windows.filter(w => w.active).map(w => (
                        <div key={w.id} style={{
                            backgroundColor: '#c0c0c0',
                            border: '2px solid #000',
                            borderRightColor: '#fff',
                            borderBottomColor: '#fff',
                            padding: '0 10px',
                            fontSize: '11px',
                            display: 'flex',
                            alignItems: 'center',
                            minWidth: '100px'
                        }}>
                            {w.icon} {w.id.toUpperCase()}
                        </div>
                    ))}
                </div>

                <div style={{
                    border: '2px solid #808080',
                    borderRightColor: '#fff',
                    borderBottomColor: '#fff',
                    padding: '0 8px',
                    fontSize: '11px',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#c0c0c0'
                }}>
                    ⌚ {time}
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 16px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #dfdfdf; box-shadow: inset 1px 1px #808080; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #c0c0c0; border: 1px solid #fff; border-right-color: #808080; border-bottom-color: #808080; }
            `}</style>
        </div>
    );
};

ReactDOM.render(<OS />, document.getElementById('os-root'));
