import React from 'react';
import './CongratsPopup.css';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RefreshIcon from '@mui/icons-material/Refresh';
import HomeIcon from '@mui/icons-material/Home';

const CongratsPopup = ({
    show,
    title = "Congratulations!",
    message,
    stats = [],
    onPlayAgain,
    onBackToMenu,
    playAgainText = "Play Again",
    backToMenuText = "Back to Menu"
}) => {
    if (!show) return null;

    return (
        <div className="congrats-overlay">
            <div className="congrats-popup">
                <div className="congrats-animation">
                    <div className="trophy-icon">
                        <EmojiEventsIcon style={{ fontSize: 80 }} />
                    </div>
                    <div className="confetti-container">
                        {[...Array(50)].map((_, i) => (
                            <div
                                key={i}
                                className="confetti"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'][Math.floor(Math.random() * 5)]
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="congrats-content">
                    <h2 className="congrats-title">{title}</h2>
                    {message && <p className="congrats-message">{message}</p>}

                    <div className="congrats-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="congrats-actions">
                        {onPlayAgain && (
                            <button className="congrats-btn btn-primary" onClick={onPlayAgain}>
                                <RefreshIcon /> {playAgainText}
                            </button>
                        )}
                        {onBackToMenu && (
                            <button className="congrats-btn btn-outline" onClick={onBackToMenu}>
                                <HomeIcon /> {backToMenuText}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CongratsPopup;
