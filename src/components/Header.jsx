import styles from './header.module.css'

export default function Header() {

    return (
        <div className={styles.container}>
            <div>
                <h1 className='text-preset-2'>Reliable, efficient delivery</h1>
                <h2 className='text-preset-1'>Powered by Technology</h2>
            </div>
            <p className='text-preset-4'>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
        </div>
    )
}