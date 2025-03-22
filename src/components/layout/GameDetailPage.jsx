import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import apiClient from '../../services/api-client';
import { FaArrowLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from '../../assets/styles/GameDetail.module.css';

// Game detail page component
const GameDetailPage = () => {
  const { id } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const { data: game, isLoading } = useQuery({
    queryKey: ['game', id],
    queryFn: () => 
      apiClient
        .get(`/games/${id}`)
        .then(res => res.data)
  });

  if (isLoading) return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
    </div>
  );

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backButton}>
        <FaArrowLeft size={16} />
        <span>Back to Games</span>
      </Link>

      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <img 
              src={game.background_image} 
              alt={game.name}
              className={styles.gameImage}
            />
            <div className={styles.platformSection}>
              <div className={styles.platformTags}>
                {game.platforms?.map(p => (
                  <span key={p.platform.id} className={styles.platformTag}>
                    {p.platform.name}
                  </span>
                ))}
              </div>
            </div>
            <div className='flex gap-10'>
            <div className={styles.infoItem}>

            <p>{game.released}</p>
            </div>
            <div className={styles.infoItem}>

            <p>{game.rating}/5</p>
            </div>
            </div>

          </div>
          
          <div className={styles.details}>
            <h1 className={styles.title}>{game.name}</h1>
            
            <div>
              <p className={`${styles.description} ${isExpanded ? styles.expanded : ''}`}>
                {game.description_raw}
              </p>
              <button 
                className={styles.readMoreBtn}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                {isExpanded ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
              </button>
            </div>

            <div className={styles.infoSection}>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;