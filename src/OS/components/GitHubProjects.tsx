import React, { useEffect, useState } from 'react';

const GitHubProjects = ({ username }: { username: string }) => {
    const [repos, setRepos] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setRepos(data.slice(0, 6)); // Show top 6
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [username]);

    if (loading) return <div style={{ color: '#000', padding: '20px', textAlign: 'center' }}>Searching local drive...</div>;

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5px', marginTop: '10px' }}>
            {repos.map(repo => (
                <a 
                    key={repo.id} 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                        border: '1px solid #808080', 
                        padding: '10px', 
                        textDecoration: 'none', 
                        color: '#000',
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        backgroundColor: '#fff',
                        boxShadow: 'inset -1px -1px #fff, inset 1px 1px #808080'
                    }}
                >
                    <div style={{ fontSize: '24px' }}>📁</div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{repo.name}</div>
                        <div style={{ fontSize: '11px', color: '#444' }}>
                            {repo.description || 'System file: github_repo_details.dll'}
                        </div>
                    </div>
                    <div style={{ fontSize: '10px', color: '#666', minWidth: '80px', textAlign: 'right' }}>
                        {repo.language || 'Binary'} <br />
                        {repo.stargazers_count} stars
                    </div>
                </a>
            ))}
        </div>
    );
};

export default GitHubProjects;
