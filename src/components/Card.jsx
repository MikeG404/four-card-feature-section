import styles from './card.module.css';

export default function Card({title, text, src, alt, borderColor}) {
    return (
        <div className={`${styles.container}`} style={{borderTop: `0.4rem solid ${borderColor}`}}>
            <div className={styles.text}>
                <h2 className='text-preset-3'>{ title }</h2>
                <p className='text-preset-5'>{ text }</p>
            </div>
            <img src={src} alt={alt} />
        </div>
    )
}