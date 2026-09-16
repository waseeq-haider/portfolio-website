import React, { useState } from 'react';

const ContactCard: React.FC = () => {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string, label: string) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
            setCopied(label);
            setTimeout(() => setCopied(null), 2000);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '600px', margin: '0 auto' }}>
            {/* Header Dialog */}
            <div
                style={{
                    backgroundColor: '#000080',
                    color: '#fff',
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <div style={{ fontWeight: 'bold', fontSize: '13px' }}>
                    🌐 DIRECT COMM LINK // Waseeq Haider
                </div>
                <div style={{ fontSize: '11px', color: '#00ff41', fontFamily: 'monospace' }}>
                    ● STATUS: ONLINE
                </div>
            </div>

            {/* Main Info Card */}
            <div
                style={{
                    backgroundColor: '#f5f5f5',
                    border: '2px solid #fff',
                    borderRightColor: '#808080',
                    borderBottomColor: '#808080',
                    padding: '16px',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                    <div
                        style={{
                            width: '50px',
                            height: '50px',
                            backgroundColor: '#000080',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            border: '2px solid #808080',
                        }}
                    >
                        WH
                    </div>
                    <div>
                        <h3 style={{ margin: 0, fontSize: '18px', color: '#000' }}>Waseeq Haider</h3>
                        <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#555' }}>
                            Cybersecurity Specialist & Software Developer | CEH
                        </p>
                        <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#777' }}>
                            📍 Muzaffarabad, Pakistan
                        </p>
                    </div>
                </div>

                {/* Contact Rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {/* Email */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            border: '1px solid #999',
                            padding: '8px 12px',
                        }}
                    >
                        <div>
                            <span style={{ fontSize: '11px', color: '#666', display: 'block' }}>EMAIL ADDRESS</span>
                            <a
                                href="mailto:waseeqyt@gmail.com"
                                style={{ fontSize: '13px', fontWeight: 'bold', color: '#000080', textDecoration: 'none' }}
                            >
                                waseeqyt@gmail.com
                            </a>
                        </div>
                        <button
                            onClick={() => copyToClipboard('waseeqyt@gmail.com', 'Email')}
                            style={{
                                padding: '4px 10px',
                                fontSize: '11px',
                                cursor: 'pointer',
                                backgroundColor: '#c0c0c0',
                                border: '2px solid #fff',
                                borderRightColor: '#000',
                                borderBottomColor: '#000',
                            }}
                        >
                            {copied === 'Email' ? '✓ Copied' : 'Copy'}
                        </button>
                    </div>

                    {/* Phone */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            border: '1px solid #999',
                            padding: '8px 12px',
                        }}
                    >
                        <div>
                            <span style={{ fontSize: '11px', color: '#666', display: 'block' }}>PHONE NUMBER</span>
                            <a
                                href="tel:+923170883933"
                                style={{ fontSize: '13px', fontWeight: 'bold', color: '#000080', textDecoration: 'none' }}
                            >
                                (+92) 317 0883933
                            </a>
                        </div>
                        <button
                            onClick={() => copyToClipboard('+923170883933', 'Phone')}
                            style={{
                                padding: '4px 10px',
                                fontSize: '11px',
                                cursor: 'pointer',
                                backgroundColor: '#c0c0c0',
                                border: '2px solid #fff',
                                borderRightColor: '#000',
                                borderBottomColor: '#000',
                            }}
                        >
                            {copied === 'Phone' ? '✓ Copied' : 'Copy'}
                        </button>
                    </div>

                    {/* GitHub */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            border: '1px solid #999',
                            padding: '8px 12px',
                        }}
                    >
                        <div>
                            <span style={{ fontSize: '11px', color: '#666', display: 'block' }}>GITHUB PROFILE</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#333' }}>github.com/waseeq-haider</span>
                        </div>
                        <a
                            href="https://github.com/waseeq-haider"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '4px 10px',
                                fontSize: '11px',
                                backgroundColor: '#c0c0c0',
                                border: '2px solid #fff',
                                borderRightColor: '#000',
                                borderBottomColor: '#000',
                                color: '#000',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                            }}
                        >
                            Open ↗
                        </a>
                    </div>

                    {/* Portfolio */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            border: '1px solid #999',
                            padding: '8px 12px',
                        }}
                    >
                        <div>
                            <span style={{ fontSize: '11px', color: '#666', display: 'block' }}>WEB PORTFOLIO</span>
                            <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#333' }}>waseeq-haider.github.io/Portfolio-web</span>
                        </div>
                        <a
                            href="https://waseeq-haider.github.io/Portfolio-web/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '4px 10px',
                                fontSize: '11px',
                                backgroundColor: '#c0c0c0',
                                border: '2px solid #fff',
                                borderRightColor: '#000',
                                borderBottomColor: '#000',
                                color: '#000',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                            }}
                        >
                            Open ↗
                        </a>
                    </div>
                </div>

                {/* Send Email Action Button */}
                <div style={{ marginTop: '16px', textAlign: 'center' }}>
                    <a
                        href="mailto:waseeqyt@gmail.com?subject=Inquiry%20from%20Portfolio%20Website"
                        style={{
                            display: 'inline-block',
                            backgroundColor: '#000080',
                            color: '#fff',
                            padding: '8px 20px',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            textDecoration: 'none',
                            border: '2px solid #fff',
                            borderRightColor: '#000',
                            borderBottomColor: '#000',
                        }}
                    >
                        ✉️ Send Email to Waseeq Haider
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
